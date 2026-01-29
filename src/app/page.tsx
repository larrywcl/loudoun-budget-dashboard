import { MetricCard } from "@/components/MetricCard";
import { BudgetGrowthChart } from "@/components/BudgetGrowthChart";
import { DepartmentTable } from "@/components/DepartmentTable";
import { PersonnelTable } from "@/components/PersonnelTable";
import {
  keyMetrics,
  formatCurrency,
  formatNumber,
  calculateChange,
  calculatePerCapita,
} from "@/lib/data";

export default function Home() {
  const fy2025 = keyMetrics.FY2025;
  const fy2024 = keyMetrics.FY2024;

  const budgetChange = calculateChange(fy2025.totalBudget, fy2024.totalBudget);
  const perCapita = calculatePerCapita(fy2025.totalBudget, fy2025.population);
  const perCapitaPrev = calculatePerCapita(fy2024.totalBudget, fy2024.population);
  const perCapitaChange = calculateChange(perCapita, perCapitaPrev);
  const schoolPct = ((fy2025.schoolTransfer / fy2025.generalFund) * 100).toFixed(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Loudoun County Budget Dashboard
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Fiscal Year 2025 Adopted Budget — Loudoun County, Virginia
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard
          title="Total Budget"
          value={formatCurrency(fy2025.totalBudget, true)}
          change={`${budgetChange > 0 ? "+" : ""}${budgetChange.toFixed(1)}% vs FY24`}
          changeType={budgetChange > 5 ? "negative" : "neutral"}
          subtitle="All funds"
        />
        <MetricCard
          title="General Fund"
          value={formatCurrency(fy2025.generalFund, true)}
          subtitle="Primary operating fund"
        />
        <MetricCard
          title="Per Capita Spending"
          value={`$${formatNumber(perCapita)}`}
          change={`${perCapitaChange > 0 ? "+" : ""}${perCapitaChange.toFixed(1)}%`}
          changeType={perCapitaChange > 5 ? "negative" : "neutral"}
          subtitle={`Pop: ${formatNumber(fy2025.population)}`}
        />
        <MetricCard
          title="Tax Rate"
          value={`$${fy2025.taxRate.toFixed(3)}`}
          change={fy2025.taxRate < fy2024.taxRate ? "↓ $0.01" : "—"}
          changeType={fy2025.taxRate < fy2024.taxRate ? "positive" : "neutral"}
          subtitle="Per $100 assessed value"
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard
          title="County Operations"
          value={formatCurrency(fy2025.countyOperating, true)}
          subtitle="County government departments"
        />
        <MetricCard
          title="School Operating"
          value={formatCurrency(fy2025.schoolOperating, true)}
          subtitle={`${schoolPct}% of General Fund to schools`}
        />
        <MetricCard
          title="County FTE"
          value={formatNumber(fy2025.countyFte)}
          change={`+${fy2025.countyFte - fy2024.countyFte} positions`}
          changeType="neutral"
          subtitle="Full-time equivalent"
        />
        <MetricCard
          title="School Transfer"
          value={formatCurrency(fy2025.schoolTransfer, true)}
          change={`+${calculateChange(fy2025.schoolTransfer, fy2024.schoolTransfer).toFixed(1)}%`}
          changeType="neutral"
          subtitle="Local funding to LCPS"
        />
      </div>

      {/* Budget Growth Chart */}
      <div className="mb-8">
        <BudgetGrowthChart />
      </div>

      {/* Department Tables */}
      <div className="space-y-8">
        <DepartmentTable />
        <PersonnelTable />
      </div>

      {/* Data Notes */}
      <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
          About This Data
        </h3>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>
            • Budget figures are from the FY2025 and FY2026 Adopted Budget documents
          </li>
          <li>
            • All figures are <strong>budgeted</strong> amounts, not actual expenditures
          </li>
          <li>
            • Inflation comparison uses BLS CPI-U (All Urban Consumers) index
          </li>
          <li>
            • See the <a href="/methodology" className="underline">Methodology</a> page for full details
          </li>
        </ul>
      </div>
    </div>
  );
}
