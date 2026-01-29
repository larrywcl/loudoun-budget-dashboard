"use client";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  subtitle?: string;
}

export function MetricCard({ title, value, change, changeType = "neutral", subtitle }: MetricCardProps) {
  const changeColor = {
    positive: "text-green-600 dark:text-green-400",
    negative: "text-red-600 dark:text-red-400",
    neutral: "text-gray-500 dark:text-gray-400",
  }[changeType];

  return (
    <div className="card">
      <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
        {title}
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="metric-value">{value}</span>
        {change && (
          <span className={`text-sm font-medium ${changeColor}`}>
            {change}
          </span>
        )}
      </div>
      {subtitle && (
        <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {subtitle}
        </div>
      )}
    </div>
  );
}
