import React from "react";
import { AppProvider } from "./context/AppContext";
import Layout from "./components/Layout";
import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";
import Insights from "./components/Insights";
import TransactionsTable from "./components/TransactionsTable";
import "./App.css";

function Dashboard() {
  return (
    <Layout>
      <SummaryCards />
      <Charts />
      <Insights />
      <TransactionsTable />
    </Layout>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Dashboard />
    </AppProvider>
  );
}