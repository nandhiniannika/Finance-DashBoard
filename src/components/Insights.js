import React from "react";
import { useApp } from "../context/AppContext";
import "./Insights.css";

export default function Insights() {
  const { transactions } = useApp();

  const expenseMap = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      expenseMap[t.category] =
        (expenseMap[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.keys(expenseMap).reduce(
    (a, b) => expenseMap[a] > expenseMap[b] ? a : b,
    "-"
  );

  return (
    <div className="insights">
      <h2>Insights</h2>
      <p>Highest Spending: {highest}</p>
      <p>Total Transactions: {transactions.length}</p>
    </div>
  );
}