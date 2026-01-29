"use client";

import { useState } from "react";
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
import { InsightBox, InfoIcon } from "./InsightBox";

type ChartLine = "budgetIndex" | "generalFundIndex" | "cpiIndex" | "truflationIndex" | "chapwoodIndex";

const lineConfig: Record<ChartLine, { label: string; color: string; description: string }> = {
  budgetIndex: { 
    label: "Total Budget", 
    color: "#1e40af",
    description: "All county funds including General Fund, enterprise funds, and capital projects"
  },
  generalFundIndex: { 
    label: "General Fund", 
    color: "#7c3aed",
    description: "Primary operating fund for county services"
  },
  cpiIndex: { 
    label: "BLS CPI-U", 
    color: "#059669",
    description: "Official government inflation measure (All Urban Consumers)"
  },
  truflationIndex: { 
    label: "Truflation", 
    color: "#0891b2",
    description: "Real-time blockchain-based inflation index"
  },
  chapwoodIndex: { 
    label: "Chapwood Index", 
    color: "#dc2626",
    description: "Alternative measure tracking 500 items in major cities"
  },
};

export function BudgetGrowthChart() {
  const [visibleLines, setVisibleLines] = useState<Set<ChartLine>>(
    new Set(["budgetIndex", "generalFundIndex", "cpiIndex", "chapwoodIndex"])
  );

  const toggleLine = (line: ChartLine) => {
    const newSet = new Set(visibleLines);
    if (newSet.has(line)) {
      newSet.delete(line);
    } else {
      newSet.add(line);
    }
    setVisibleLines(newSet);
  };

  const latestData = budgetGrowthData[budgetGrowthData.length - 2]; // FY2025
  const budgetGrowth = ((latestData.budgetIndex - 100)).toFixed(1);
  const cpiGrowth = ((latestData.cpiIndex - 100)).toFixed(1);
  const chapwoodGrowth = ((latestData.chapwoodIndex - 100)).toFixed(1);

  return (
    <div className="card">
      <h2 className="section-title">Budget Growth vs. Inflation</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        Indexed to FY2021 = 100. Click legend items to show/hide lines.
      </p>
      
      {/* Line toggles */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(Object.keys(lineConfig) as ChartLine[]).map((key) => (
          <button
            key={key}
            onClick={() => toggleLine(key)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 ${
              visibleLines.has(key)
                ? "opacity-100 ring-2"
                : "opacity-50 hover:opacity-75"
            }`}
            style={{
              backgroundColor: visibleLines.has(key) 
                ? `${lineConfig[key].color}20` 
                : undefined,
              color: lineConfig[key].color,
              borderColor: lineConfig[key].color,
              ringColor: lineConfig[key].color,
            }}
            title={lineConfig[key].description}
          >
            <span 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: lineConfig[key].color }}
            />
            {lineConfig[key].label}
          </button>
        ))}
      </div>

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
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid #e5e7eb",
                borderRadius: "0.5rem",
              }}
              formatter={(value: number, name: string) => {
                const config = lineConfig[name as ChartLine];
                return [`${value.toFixed(1)}`, config?.label || name];
              }}
              labelFormatter={(label) => `${label}`}
            />
            <Legend 
              formatter={(value) => lineConfig[value as ChartLine]?.label || value}
            />
            {(Object.keys(lineConfig) as ChartLine[]).map((key) => (
              visibleLines.has(key) && (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={lineConfig[key].color}
                  strokeWidth={key.includes("budget") || key.includes("generalFund") ? 3 : 2}
                  dot={{ fill: lineConfig[key].color, r: key.includes("budget") ? 4 : 3 }}
                  activeDot={{ r: 6 }}
                  strokeDasharray={key.includes("Index") && !key.includes("budget") && !key.includes("generalFund") ? "5 5" : undefined}
                />
              )
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Key findings */}
      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">+{budgetGrowth}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Budget Growth</div>
            <div className="text-xs text-gray-500">FY2021 → FY2025</div>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="text-2xl font-bold text-green-600">+{cpiGrowth}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Official Inflation (CPI)</div>
            <div className="text-xs text-gray-500">Same period</div>
          </div>
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <div className="text-2xl font-bold text-red-600">+{chapwoodGrowth}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Chapwood Index</div>
            <div className="text-xs text-gray-500">Alt. inflation</div>
          </div>
        </div>

        <InsightBox 
          title="Understanding the Inflation Comparison" 
          variant="neutral"
          icon={<InfoIcon className="w-5 h-5 text-gray-500" />}
        >
          <p className="mb-2">
            We compare budget growth against multiple inflation measures to provide perspective:
          </p>
          <ul className="space-y-1 list-disc list-inside">
            <li><strong>BLS CPI-U</strong> — Official government measure (~{cpiGrowth}% cumulative 2021-2025)</li>
            <li><strong>Truflation</strong> — Real-time blockchain-based index using multiple data sources</li>
            <li><strong>Chapwood Index</strong> — Measures actual cost of 500 items in major cities (~{chapwoodGrowth}% cumulative)</li>
          </ul>
          <p className="mt-2 text-sm italic">
            The truth likely lies somewhere between these measures. Even using the highest inflation 
            estimate (Chapwood), Loudoun&apos;s budget growth of {budgetGrowth}% significantly exceeds real-world inflation.
          </p>
        </InsightBox>
      </div>
    </div>
  );
}
