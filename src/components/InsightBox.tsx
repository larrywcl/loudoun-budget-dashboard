"use client";

interface InsightBoxProps {
  title: string;
  children: React.ReactNode;
  variant?: "info" | "warning" | "success" | "neutral";
  icon?: React.ReactNode;
}

export function InsightBox({ title, children, variant = "info", icon }: InsightBoxProps) {
  const variantStyles = {
    info: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
    warning: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
    success: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
    neutral: "bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700",
  };

  const titleStyles = {
    info: "text-blue-900 dark:text-blue-100",
    warning: "text-amber-900 dark:text-amber-100",
    success: "text-green-900 dark:text-green-100",
    neutral: "text-gray-900 dark:text-gray-100",
  };

  const textStyles = {
    info: "text-blue-800 dark:text-blue-200",
    warning: "text-amber-800 dark:text-amber-200",
    success: "text-green-800 dark:text-green-200",
    neutral: "text-gray-700 dark:text-gray-300",
  };

  return (
    <div className={`p-4 rounded-lg border ${variantStyles[variant]}`}>
      <div className="flex items-start gap-3">
        {icon && (
          <div className="flex-shrink-0 mt-0.5">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h4 className={`font-semibold mb-2 ${titleStyles[variant]}`}>
            {title}
          </h4>
          <div className={`text-sm ${textStyles[variant]}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Info icon component
export function InfoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

// Chart icon component
export function ChartIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

// Light bulb icon
export function LightBulbIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}
