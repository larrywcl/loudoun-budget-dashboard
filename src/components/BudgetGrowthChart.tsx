"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { budgetGrowthData } from "@/lib/data";

export function BudgetGrowthChart() {
  return (
    <div className="card">
      <h2 className="section-title">Budget Growth vs. Inflation</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        Indexed to FY2021 = 100. Inflation: BLS CPI-U (All Urban Consumers)
      </p>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={budgetGrowthData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis 
              dataKey="year" 
              tick={{ fontSize: 12 }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              tickLine={false}
              domain={[90, 180]}
              tickFormatter={(v) => `${v}`}
            />
            <Tooltip
              formatter={(value, name) => {
                const label = name === "budgetIndex" ? "Budget Index" : "CPI Index";
                return [`${Number(value).toFixed(1)}`, label];
              }}
              labelFormatter={(label) => `${label}`}
            />
            <Legend 
              formatter={(value) => value === "budgetIndex" ? "Budget Growth" : "CPI-U Inflation"}
            />
            <Line
              type="monotone"
              dataKey="budgetIndex"
              stroke="#1e40af"
              strokeWidth={3}
              dot={{ fill: "#1e40af", r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="cpiIndex"
              stroke="#059669"
              strokeWidth={3}
              dot={{ fill: "#059669", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        <p>
          <strong>Key Finding:</strong> Loudoun County&apos;s budget has grown{" "}
          <span className="text-blue-600 font-semibold">68.8%</span> since FY2021,
          while inflation (CPI-U) has increased{" "}
          <span className="text-green-600 font-semibold">23.0%</span> over the same period.
        </p>
      </div>
    </div>
  );
}
