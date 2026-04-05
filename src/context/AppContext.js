import React, { createContext, useContext, useState, useEffect } from "react";
import mockData from "../data/mockData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // 🔹 Transactions
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : mockData;
  });

  // 🔹 User Role
  const [role, setRole] = useState("viewer");

  // 🔹 Search filter
  const [search, setSearch] = useState("");

  // 🌙 Dark Mode State
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // ✅ Dark Mode: apply class and persist
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // 💾 Persist transactions
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // ➕ Add Transaction (randomized for demo)
  const addTransaction = () => {
    const categories = [
      "Food", "Shopping", "Bills", "Transport",
      "Entertainment", "Health", "Misc", "Salary", "Freelance"
    ];

    const newTx = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0], // Today
      amount: Math.floor(Math.random() * 3000 + 200), // ₹200–₹3200
      category: categories[Math.floor(Math.random() * categories.length)],
      type: Math.random() > 0.5 ? "expense" : "income",
    };

    setTransactions(prev => [...prev, newTx]);
  };

  // ❌ Delete Transaction
  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        transactions,
        role,
        setRole,
        search,
        setSearch,
        addTransaction,
        deleteTransaction,
        darkMode,
        setDarkMode
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// ✅ Safe Hook
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used inside AppProvider");
  }
  return context;
};