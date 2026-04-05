import React from "react";
import { useApp } from "../context/AppContext";
import "./Insights.css";

export default function Insights() {
  const { transactions } = useApp();

  // 💰 CALCULATIONS
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  const savingsRate = income
    ? ((balance / income) * 100).toFixed(1)
    : 0;

  // 🔥 TOP EXPENSE CATEGORY
  const categoryMap = {};
  transactions
    .filter(t => t.type === "expense")
    .forEach(t => {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    });

  const topCategory = Object.keys(categoryMap).reduce(
    (a, b) => (categoryMap[a] > categoryMap[b] ? a : b),
    Object.keys(categoryMap)[0]
  );

  // 📅 LAST 2 DAYS TREND
  const sorted = [...transactions].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const last = sorted[sorted.length - 1];
  const prev = sorted[sorted.length - 2];

  let trend = "No trend data";

  if (last && prev) {
    if (last.amount > prev.amount) trend = "Spending increased ";
    else if (last.amount < prev.amount) trend = "Spending decreased ";
    else trend = "No change";
  }

  return (
    <div className="insights">

      {/* 💰 BALANCE */}
      <div className="insight-card">
        <h4>Balance</h4>
        <p>
          {balance > 0
            ? "You are saving money "
            : "You are overspending "}
        </p>
      </div>

      {/* 📊 SAVINGS RATE */}
      <div className="insight-card">
        <h4>Savings Rate</h4>
        <p>{savingsRate}% of income saved</p>
      </div>

      {/* 🔥 TOP CATEGORY */}
      <div className="insight-card">
        <h4>Top Expense</h4>
        <p>
          {topCategory
            ? `${topCategory} (₹${categoryMap[topCategory]})`
            : "No data"}
        </p>
      </div>

      {/* 📈 TREND */}
      <div className="insight-card">
        <h4>Trend</h4>
        <p>{trend}</p>
      </div>

      {/* ⚠️ ALERT */}
      <div className="insight-card alert">
        <h4>Alert</h4>
        <p>
          {expense > income
            ? "Expenses exceeded income!"
            : "Financial health is good"}
        </p>
      </div>

    </div>
  );
}