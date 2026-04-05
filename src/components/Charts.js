import React, { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";
import "./Charts.css";

export default function Charts() {
  const { transactions } = useApp();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // 📅 FORMAT DATE
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit"
    });
  };

  // 🔥 GROUP DATA
  const grouped = {};
  transactions.forEach((t) => {
    if (!grouped[t.date]) {
      grouped[t.date] = { date: t.date, income: 0, expense: 0 };
    }
    if (t.type === "income") grouped[t.date].income += t.amount;
    else grouped[t.date].expense += t.amount;
  });

  const data = Object.values(grouped);

  // 🔥 PIE DATA
  const categoryMap = {};
  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      if (!categoryMap[t.category]) categoryMap[t.category] = 0;
      categoryMap[t.category] += t.amount;
    });

  const pieData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key]
  }));

  // 💜 COLORS
  const COLORS = ["#7c3aed", "#8b5cf6", "#a78bfa", "#c4b5fd"];

  if (loading) {
    return (
      <div>
        <div className="chart-box skeleton"></div>
        <div className="chart-box skeleton"></div>
      </div>
    );
  }

  return (
    <div>
      {/* 💜 LINE CHART */}
      <div className="chart-box fade-in">
        <h3>Income vs Expense</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <defs>
              <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity={0.1} />
              </linearGradient>

              <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c084fc" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#c084fc" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#ede9fe" strokeDasharray="3 3" />

            <XAxis
              dataKey="date"
              tickFormatter={formatDate}
              tick={{ fill: "#6d28d9", fontSize: 12 }}
            />

            <YAxis tick={{ fill: "#6d28d9" }} />

            <Tooltip
              contentStyle={{
                background: "#ffffff",
                borderRadius: "10px",
                border: "none"
              }}
              labelFormatter={formatDate}
            />

            <Legend />

            {/* 💰 INCOME (NO DOTS) */}
            <Line
              type="monotone"
              dataKey="income"
              stroke="#7c3aed"
              strokeWidth={3}
              dot={false}          // ❌ removed dots
              activeDot={false}    // ❌ removed hover dot
              isAnimationActive={true}
            />

            {/* 💸 EXPENSE (NO DOTS) */}
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#c084fc"
              strokeWidth={3}
              dot={false}
              activeDot={false}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 🍩 DONUT CHART */}
      <div className="chart-box fade-in">
        <h3>Spending Breakdown</h3>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={3}
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