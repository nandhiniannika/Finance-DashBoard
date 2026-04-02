import React from "react";
import { useApp } from "../context/AppContext";
import { LineChart, Line, PieChart, Pie, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

export default function Charts() {
  const { transactions } = useApp();

  const trendData = transactions.map(t => ({
    date: t.date,
    amount: t.type === "income" ? t.amount : -t.amount
  }));

  const categoryMap = {};
  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const pieData = Object.keys(categoryMap).map(key => ({
    name: key,
    value: categoryMap[key]
  }));

  return (
    <div>
      <h2>Charts</h2>

      <LineChart width={400} height={200} data={trendData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="amount" />
      </LineChart>

      <PieChart width={300} height={300}>
        <Pie data={pieData} dataKey="value" nameKey="name" />
        <Tooltip />
      </PieChart>
    </div>
  );
}