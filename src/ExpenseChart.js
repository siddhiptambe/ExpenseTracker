import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ExpenseChart({ transactions }) {

  const expenseData = transactions
    .filter((t) => t.type === "Expense")
    .map((t) => ({
      name: t.description,
      amount: t.amount,
    }));

  return (
    <div style={{ width: "100%", height: 500 }}>
      <ResponsiveContainer>
        <BarChart data={expenseData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
          <XAxis dataKey="name" interval={0}  angle={-30} margin={{ top: 70, right: 30, left: 20, bottom: 40 }} textAnchor="end" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#f4b04f" animationDuration={1200} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseChart;
