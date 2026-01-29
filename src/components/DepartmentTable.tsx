"use client";

import { useState } from "react";
import { departments, formatCurrency, calculateChange } from "@/lib/data";

type SortField = "name" | "total" | "personnel" | "operating" | "fte" | "change";
type SortDirection = "asc" | "desc";

export function DepartmentTable() {
  const [sortField, setSortField] = useState<SortField>("total");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [selectedYear, setSelectedYear] = useState<"fy2025" | "fy2026">("fy2025");

  const sortedDepartments = [...departments].sort((a, b) => {
    let aVal: number | string;
    let bVal: number | string;

    switch (sortField) {
      case "name":
        aVal = a.name;
        bVal = b.name;
        break;
      case "change":
        aVal = calculateChange(a[selectedYear].total, a.fy2024.total);
        bVal = calculateChange(b[selectedYear].total, b.fy2024.total);
        break;
      default:
        aVal = a[selectedYear][sortField];
        bVal = b[selectedYear][sortField];
    }

    if (typeof aVal === "string") {
      return sortDirection === "asc" 
        ? aVal.localeCompare(bVal as string) 
        : (bVal as string).localeCompare(aVal);
    }
    return sortDirection === "asc" ? aVal - (bVal as number) : (bVal as number) - aVal;
  });

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <span className="opacity-30">↕</span>;
    return <span>{sortDirection === "asc" ? "↑" : "↓"}</span>;
  };

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <h2 className="section-title mb-0">Department Expenditures</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedYear("fy2025")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedYear === "fy2025"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            }`}
          >
            FY2025 Adopted
          </button>
          <button
            onClick={() => setSelectedYear("fy2026")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedYear === "fy2026"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            }`}
          >
            FY2026 Adopted
          </button>
        </div>
      </div>

      <div className="overflow-x-auto -mx-6">
        <table className="data-table">
          <thead>
            <tr>
              <th 
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => handleSort("name")}
              >
                Department <SortIcon field="name" />
              </th>
              <th 
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-right"
                onClick={() => handleSort("total")}
              >
                Total <SortIcon field="total" />
              </th>
              <th 
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-right hidden md:table-cell"
                onClick={() => handleSort("personnel")}
              >
                Personnel <SortIcon field="personnel" />
              </th>
              <th 
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-right hidden md:table-cell"
                onClick={() => handleSort("operating")}
              >
                Operating <SortIcon field="operating" />
              </th>
              <th 
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-right hidden sm:table-cell"
                onClick={() => handleSort("fte")}
              >
                FTE <SortIcon field="fte" />
              </th>
              <th 
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-right"
                onClick={() => handleSort("change")}
              >
                vs FY24 <SortIcon field="change" />
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedDepartments.map((dept) => {
              const change = calculateChange(dept[selectedYear].total, dept.fy2024.total);
              return (
                <tr key={dept.name}>
                  <td className="font-medium">{dept.name}</td>
                  <td className="text-right font-mono">
                    {formatCurrency(dept[selectedYear].total, true)}
                  </td>
                  <td className="text-right font-mono hidden md:table-cell">
                    {formatCurrency(dept[selectedYear].personnel, true)}
                  </td>
                  <td className="text-right font-mono hidden md:table-cell">
                    {formatCurrency(dept[selectedYear].operating, true)}
                  </td>
                  <td className="text-right hidden sm:table-cell">
                    {dept[selectedYear].fte.toLocaleString()}
                  </td>
                  <td className={`text-right font-medium ${
                    change > 0 ? "text-red-600" : "text-green-600"
                  }`}>
                    {change > 0 ? "+" : ""}{change.toFixed(1)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
