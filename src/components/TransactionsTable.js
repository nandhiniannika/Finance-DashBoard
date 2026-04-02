import React from "react";
import { useApp } from "../context/AppContext";
import "./TransactionsTable.css";

export default function TransactionsTable() {
  const { transactions, search, setSearch, role, addTransaction } = useApp();

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Transactions</h2>

      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {role === "admin" && (
        <button onClick={addTransaction}>Add</button>
      )}

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {filtered.length === 0 ? (
            <tr><td colSpan="4">No Data</td></tr>
          ) : (
            filtered.map(t => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>{t.category}</td>
                <td>₹{t.amount}</td>
                <td>{t.type}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}