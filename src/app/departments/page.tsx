import { Metadata } from "next";
import { DepartmentTable } from "@/components/DepartmentTable";
import { PersonnelTable } from "@/components/PersonnelTable";
import { departments, formatCurrency } from "@/lib/data";

export const metadata: Metadata = {
  title: "Departments | Loudoun County Budget Dashboard",
  description: "Department-level budget data for Loudoun County, Virginia",
};

export default function DepartmentsPage() {
  // Calculate category totals
  const categories = departments.reduce((acc, dept) => {
    if (!acc[dept.category]) {
      acc[dept.category] = { total: 0, fte: 0, count: 0 };
    }
    acc[dept.category].total += dept.fy2025.total;
    acc[dept.category].fte += dept.fy2025.fte;
    acc[dept.category].count += 1;
    return acc;
  }, {} as Record<string, { total: number; fte: number; count: number }>);

  const sortedCategories = Object.entries(categories)
    .sort(([, a], [, b]) => b.total - a.total);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Department Budgets
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Detailed expenditure and personnel data by department
      </p>

      {/* Category Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {sortedCategories.map(([category, data]) => (
          <div key={category} className="card">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              {category}
            </div>
            <div className="mt-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              {formatCurrency(data.total, true)}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {data.fte.toLocaleString()} FTE • {data.count} departments
            </div>
          </div>
        ))}
      </div>

      {/* Department Tables */}
      <div className="space-y-8">
        <DepartmentTable />
        <PersonnelTable />
      </div>

      {/* Category Breakdown */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Budget by Category (FY2025)</h2>
        <div className="card">
          <div className="space-y-4">
            {sortedCategories.map(([category, data]) => {
              const totalBudget = Object.values(categories).reduce((sum, c) => sum + c.total, 0);
              const pct = (data.total / totalBudget) * 100;
              return (
                <div key={category}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{category}</span>
                    <span className="text-gray-500">
                      {formatCurrency(data.total, true)} ({pct.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
