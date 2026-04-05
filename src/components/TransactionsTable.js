import React from "react";
import { useApp } from "../context/AppContext";
import "./TransactionsTable.css";

export default function TransactionsTable() {
  const {
    transactions,
    search,
    setSearch,
    role,
    addTransaction,
    deleteTransaction
  } = useApp();

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Transactions</h2>

      <input
        placeholder="Search category..."
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
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {filtered.map(t => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.category}</td>
              <td>₹{t.amount}</td>
              <td>{t.type}</td>

              {role === "admin" && (
                <td>
                  <button onClick={() => deleteTransaction(t.id)}>
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}