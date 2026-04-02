import React from "react";
import { useApp } from "../context/AppContext";
import "./Charts.css";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  defs,
  linearGradient,
  stop
} from "recharts";

export default function Charts() {
  const { transactions } = useApp();

  // 📈 Line Data
  const trendData = transactions.map(t => ({
    date: t.date,
    amount: t.type === "income" ? t.amount : -t.amount
  }));

  // 🥧 Pie Data
  const categoryMap = {};
  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const pieData = Object.keys(categoryMap).map(key => ({
    name: key,
    value: categoryMap[key]
  }));

  // 🎨 Colors
  const COLORS = ["#00C49F", "#0088FE", "#FFBB28", "#FF8042", "#A28CFF"];

  // 📊 Percentage Label
  const renderLabel = ({ percent }) =>
    `${(percent * 100).toFixed(0)}%`;

  return (
    <div className="chart-container">

      {/* 📈 Trend Chart */}
      <div className="chart-box">
        <h3>Balance Trend</h3>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={trendData}>
            
            {/* 🌈 Gradient */}
            <defs>
              <linearGradient id="colorLine" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00C49F" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#0088FE" stopOpacity={0.2}/>
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="amount"
              stroke="url(#colorLine)"
              strokeWidth={3}
              dot={{ r: 4 }}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 🥧 Pie Chart */}
      <div className="chart-box">
        <h3>Spending Breakdown</h3>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label={renderLabel}
              isAnimationActive={true}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}