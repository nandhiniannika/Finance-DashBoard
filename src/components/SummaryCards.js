import React from "react";
import { useApp } from "../context/AppContext";
import "./SummaryCards.css";

export default function SummaryCards() {
  const { transactions } = useApp();

  const income = transactions.filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expenses = transactions.filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expenses;

  return (
    <div className="cards">
      <div className="card">Balance ₹{balance}</div>
      <div className="card">Income ₹{income}</div>
      <div className="card">Expenses ₹{expenses}</div>
    </div>
  );
}