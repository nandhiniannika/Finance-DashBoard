import React, { createContext, useContext, useState } from "react";
import mockData from "../data/mockData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(mockData);
  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");

  const addTransaction = () => {
    const newTx = {
      id: Date.now(),
      date: "2026-04-10",
      amount: 1000,
      category: "Misc",
      type: "expense",
    };
    setTransactions([...transactions, newTx]);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);