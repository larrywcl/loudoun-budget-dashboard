"use client";

import { departments, calculateChange } from "@/lib/data";

export function PersonnelTable() {
  // Sort by FTE count descending
  const sortedDepts = [...departments]
    .filter((d) => d.fy2025.fte > 0)
    .sort((a, b) => b.fy2025.fte - a.fy2025.fte);

  const totalFte2024 = sortedDepts.reduce((sum, d) => sum + d.fy2024.fte, 0);
  const totalFte2025 = sortedDepts.reduce((sum, d) => sum + d.fy2025.fte, 0);
  const totalFte2026 = sortedDepts.reduce((sum, d) => sum + d.fy2026.fte, 0);

  return (
    <div className="card overflow-hidden">
      <h2 className="section-title">Personnel by Department (FTE)</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        Full-Time Equivalent positions across fiscal years
      </p>

      <div className="overflow-x-auto -mx-6">
        <table className="data-table">
          <thead>
            <tr>
              <th>Department</th>
              <th className="text-right">FY2024</th>
              <th className="text-right">FY2025</th>
              <th className="text-right">FY2026</th>
              <th className="text-right">Change</th>
            </tr>
          </thead>
          <tbody>
            {sortedDepts.map((dept) => {
              const change = calculateChange(dept.fy2026.fte, dept.fy2024.fte);
              const fteAdded = dept.fy2026.fte - dept.fy2024.fte;
              return (
                <tr key={dept.name}>
                  <td className="font-medium">{dept.name}</td>
                  <td className="text-right">{dept.fy2024.fte.toLocaleString()}</td>
                  <td className="text-right">{dept.fy2025.fte.toLocaleString()}</td>
                  <td className="text-right font-medium">{dept.fy2026.fte.toLocaleString()}</td>
                  <td className={`text-right ${change > 0 ? "text-blue-600" : "text-gray-500"}`}>
                    {fteAdded > 0 ? "+" : ""}{fteAdded} ({change > 0 ? "+" : ""}{change.toFixed(1)}%)
                  </td>
                </tr>
              );
            })}
            <tr className="font-bold bg-gray-50 dark:bg-gray-700">
              <td>Total (Shown)</td>
              <td className="text-right">{totalFte2024.toLocaleString()}</td>
              <td className="text-right">{totalFte2025.toLocaleString()}</td>
              <td className="text-right">{totalFte2026.toLocaleString()}</td>
              <td className="text-right text-blue-600">
                +{totalFte2026 - totalFte2024} (+{calculateChange(totalFte2026, totalFte2024).toFixed(1)}%)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
