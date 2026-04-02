import React, { createContext, useContext, useState, useEffect } from "react";
import mockData from "../data/mockData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : mockData;
  });

  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");

  // 💾 Save to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // ➕ Add
  const addTransaction = () => {
    const newTx = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      amount: Math.floor(Math.random() * 2000),
      category: "Misc",
      type: "expense",
    };
    setTransactions([...transactions, newTx]);
  };

  // ❌ Delete
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <AppContext.Provider value={{
      transactions,
      role,
      setRole,
      search,
      setSearch,
      addTransaction,
      deleteTransaction
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);