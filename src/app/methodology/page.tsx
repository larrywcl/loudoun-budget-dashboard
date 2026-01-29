import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology | Loudoun County Budget Dashboard",
  description: "Data sources, methodology, and notes for the Loudoun County Budget Dashboard",
};

export default function MethodologyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Data Sources & Methodology
      </h1>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Primary Data Sources</h2>
          
          <div className="card mb-6">
            <h3 className="font-semibold text-lg mb-2">Loudoun County Adopted Budget Documents</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              The primary source for all budget data is the official Adopted Budget documents
              published by Loudoun County.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <a 
                  href="https://www.loudoun.gov/budget" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Current Budget
                </a> — FY2026 Adopted Budget
              </li>
              <li>
                <a 
                  href="https://www.loudoun.gov/1474/Budget-Archives" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Budget Archives
                </a> — Historical budget documents (FY2005-present)
              </li>
              <li>
                <a 
                  href="https://www.loudoun.gov/1476/Annual-Comprehensive-Financial-Reports" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Annual Comprehensive Financial Reports (ACFR)
                </a> — Actual expenditures and audited financials
              </li>
            </ul>
          </div>

          <div className="card mb-6">
            <h3 className="font-semibold text-lg mb-2">Inflation Data</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Inflation comparisons use the Bureau of Labor Statistics Consumer Price Index
              for All Urban Consumers (CPI-U).
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <a 
                  href="https://www.bls.gov/cpi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  BLS CPI Data
                </a> — Official inflation statistics
              </li>
              <li>
                Series: CPI-U, All items, U.S. city average (CUUR0000SA0)
              </li>
              <li>
                Base year for indexing: Calendar year 2020 (aligns with FY2021)
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 className="font-semibold text-lg mb-2">Population Data</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Population figures are from Loudoun County&apos;s Office of Management and Budget,
              based on U.S. Census Bureau estimates and county forecasts.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li>FY2024: 439,560 (estimate)</li>
              <li>FY2025: 452,803 (forecast)</li>
              <li>FY2026: 464,000 (forecast)</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Methodology Notes</h2>
          
          <div className="space-y-4">
            <div className="card">
              <h3 className="font-semibold mb-2">Budgeted vs. Actual</h3>
              <p className="text-gray-600 dark:text-gray-300">
                All figures shown are <strong>budgeted</strong> (appropriated) amounts from the
                Adopted Budget documents, not actual expenditures. Actual spending may differ
                from budgeted amounts. For actual expenditure data, refer to the ACFR documents.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">Fiscal Year Definition</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Loudoun County&apos;s fiscal year runs from July 1 to June 30. For example,
                FY2025 covers July 1, 2024 through June 30, 2025.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">Department Data</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Department-level data is extracted from the &ldquo;Department Financial and FTE Summary&rdquo;
                tables in the budget documents. Categories:
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
                <li><strong>Personnel:</strong> Salaries, benefits, and employee-related costs</li>
                <li><strong>Operating:</strong> Operating and maintenance expenditures</li>
                <li><strong>FTE:</strong> Full-Time Equivalent positions funded by the General Fund</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">Per Capita Calculations</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Per capita spending is calculated as: Total Budget ÷ Population Estimate.
                This provides a rough measure of spending per resident but should be
                interpreted carefully, as not all budget expenditures directly benefit
                individual residents equally.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">Inflation Indexing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                The budget growth vs. inflation chart indexes both series to 100 in the base
                year (FY2021/Calendar 2020). This allows for direct visual comparison of
                relative growth rates. The gap between the lines represents budget growth
                in excess of (or below) inflation.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Update Frequency</h2>
          <p className="text-gray-600 dark:text-gray-300">
            This dashboard is updated annually when new Adopted Budget documents are published,
            typically in April-May of each year. Data is manually verified against official
            county documents.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              <strong>Budget ≠ Actual:</strong> Budgeted amounts may differ from actual spending.
            </li>
            <li>
              <strong>Capital vs. Operating:</strong> This dashboard focuses primarily on operating
              budgets. Capital improvement projects (CIP) are tracked separately in County documents.
            </li>
            <li>
              <strong>Schools:</strong> Loudoun County Public Schools (LCPS) operates as a separate
              entity with its own detailed budget. The figures shown here represent the County&apos;s
              transfer to LCPS, not LCPS&apos;s internal budget.
            </li>
            <li>
              <strong>Inflation Measure:</strong> CPI-U is a broad national measure. Local cost
              increases (especially housing) in Loudoun County may differ significantly from
              national averages.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This dashboard is an independent transparency project. It is not affiliated with,
            endorsed by, or officially connected to Loudoun County Government.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            The goal is to make public budget data more accessible and understandable for
            Loudoun County residents, journalists, and policymakers.
          </p>
        </section>
      </div>
    </div>
  );
}
