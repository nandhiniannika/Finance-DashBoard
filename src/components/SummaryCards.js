import React from "react";
import { useApp } from "../context/AppContext";
import "./SummaryCards.css";

export default function SummaryCards() {
  const { transactions } = useApp();

  const income = transactions.filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions.filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="cards">
      <div className="card">
        <p>Remaining</p>
        <h2>₹{balance}</h2>
      </div>

      <div className="card">
        <p>Income</p>
        <h2>₹{income}</h2>
      </div>

      <div className="card">
        <p>Expenses</p>
        <h2>₹{expense}</h2>
      </div>
    </div>
  );
}