import React from "react";
import { AppProvider, useApp } from "./context/AppContext";
import SummaryCards from "./components/SummaryCards";
import TransactionsTable from "./components/TransactionsTable";
import Insights from "./components/Insights";
import Charts from "./components/Charts";

function Dashboard() {
  const { role, setRole } = useApp();

  return (
    <div>
      <h1>Finance Dashboard</h1>

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>

      <SummaryCards />
      <Charts />
      <Insights />
      <TransactionsTable />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Dashboard />
    </AppProvider>
  );
}