// Budget data for Loudoun County
// Source: https://www.loudoun.gov/budget

export interface FiscalYearMetrics {
  totalBudget: number;
  generalFund: number;
  countyOperating: number;
  schoolOperating: number;
  taxRate: number;
  population: number;
  schoolTransfer: number;
  countyFte: number;
  schoolFte?: number;
}

export interface Department {
  name: string;
  category: string;
  fy2024: { personnel: number; operating: number; capital?: number; total: number; fte: number };
  fy2025: { personnel: number; operating: number; capital?: number; total: number; fte: number };
  fy2026: { personnel: number; operating: number; capital?: number; total: number; fte: number };
}

export interface InflationData {
  year: string;
  index: number;
  yoy: number;
}

export const keyMetrics: Record<string, FiscalYearMetrics> = {
  FY2021: {
    totalBudget: 3200000000,
    generalFund: 1850000000,
    countyOperating: 680000000,
    schoolOperating: 1320000000,
    taxRate: 0.890,
    population: 420000,
    schoolTransfer: 900000000,
    countyFte: 4200,
    schoolFte: 13500,
  },
  FY2022: {
    totalBudget: 3500000000,
    generalFund: 2000000000,
    countyOperating: 720000000,
    schoolOperating: 1420000000,
    taxRate: 0.880,
    population: 425000,
    schoolTransfer: 980000000,
    countyFte: 4400,
    schoolFte: 13800,
  },
  FY2023: {
    totalBudget: 3800000000,
    generalFund: 2150000000,
    countyOperating: 780000000,
    schoolOperating: 1550000000,
    taxRate: 0.880,
    population: 432000,
    schoolTransfer: 1050000000,
    countyFte: 4650,
    schoolFte: 14100,
  },
  FY2024: {
    totalBudget: 4175858354,
    generalFund: 2346000000,
    countyOperating: 840537318,
    schoolOperating: 1665045179,
    taxRate: 0.875,
    population: 439560,
    schoolTransfer: 1139827376,
    countyFte: 4850,
    schoolFte: 14400,
  },
  FY2025: {
    totalBudget: 5167533587,
    generalFund: 2705309133,
    countyOperating: 982557366,
    schoolOperating: 1824777892,
    taxRate: 0.865,
    population: 452803,
    schoolTransfer: 1268127376,
    countyFte: 5104,
    schoolFte: 14800,
  },
  FY2026: {
    totalBudget: 5400000000,
    generalFund: 2850000000,
    countyOperating: 1050000000,
    schoolOperating: 1950000000,
    taxRate: 0.865,
    population: 464000,
    schoolTransfer: 1350000000,
    countyFte: 5250,
    schoolFte: 15100,
  },
};

export const departments: Department[] = [
  {
    name: "Fire and Rescue",
    category: "Public Safety",
    fy2024: { personnel: 98000000, operating: 12000000, capital: 2500000, total: 110000000, fte: 720 },
    fy2025: { personnel: 115000000, operating: 14500000, capital: 3000000, total: 129500000, fte: 785 },
    fy2026: { personnel: 128000000, operating: 16000000, capital: 3500000, total: 144000000, fte: 840 },
  },
  {
    name: "Sheriff's Office",
    category: "Public Safety",
    fy2024: { personnel: 85000000, operating: 8500000, capital: 1800000, total: 93500000, fte: 680 },
    fy2025: { personnel: 100000000, operating: 10200000, capital: 2000000, total: 110200000, fte: 750 },
    fy2026: { personnel: 112000000, operating: 11500000, capital: 2200000, total: 123500000, fte: 810 },
  },
  {
    name: "Family Services",
    category: "Health and Welfare",
    fy2024: { personnel: 42000000, operating: 8500000, capital: 500000, total: 50500000, fte: 420 },
    fy2025: { personnel: 48000000, operating: 9800000, capital: 600000, total: 57800000, fte: 475 },
    fy2026: { personnel: 53000000, operating: 11000000, capital: 700000, total: 64000000, fte: 520 },
  },
  {
    name: "Information Technology",
    category: "General Government",
    fy2024: { personnel: 18000000, operating: 22000000, capital: 8000000, total: 40000000, fte: 165 },
    fy2025: { personnel: 21000000, operating: 26000000, capital: 9500000, total: 47000000, fte: 185 },
    fy2026: { personnel: 23500000, operating: 29000000, capital: 10500000, total: 52500000, fte: 200 },
  },
  {
    name: "General Services",
    category: "General Government",
    fy2024: { personnel: 12500000, operating: 28000000, capital: 3000000, total: 40500000, fte: 135 },
    fy2025: { personnel: 14200000, operating: 32000000, capital: 3500000, total: 46200000, fte: 150 },
    fy2026: { personnel: 15500000, operating: 35000000, capital: 4000000, total: 50500000, fte: 160 },
  },
  {
    name: "Mental Health Services",
    category: "Health and Welfare",
    fy2024: { personnel: 28000000, operating: 6500000, capital: 300000, total: 34500000, fte: 285 },
    fy2025: { personnel: 33000000, operating: 7800000, capital: 400000, total: 40800000, fte: 330 },
    fy2026: { personnel: 37000000, operating: 8800000, capital: 500000, total: 45800000, fte: 365 },
  },
  {
    name: "Parks, Recreation and Community Services",
    category: "Parks and Culture",
    fy2024: { personnel: 24000000, operating: 9500000, capital: 2000000, total: 33500000, fte: 320 },
    fy2025: { personnel: 28000000, operating: 11000000, capital: 2500000, total: 39000000, fte: 365 },
    fy2026: { personnel: 31000000, operating: 12500000, capital: 3000000, total: 43500000, fte: 400 },
  },
  {
    name: "Library Services",
    category: "Parks and Culture",
    fy2024: { personnel: 14500000, operating: 4200000, capital: 500000, total: 18700000, fte: 185 },
    fy2025: { personnel: 16500000, operating: 4800000, capital: 600000, total: 21300000, fte: 205 },
    fy2026: { personnel: 18000000, operating: 5300000, capital: 700000, total: 23300000, fte: 220 },
  },
  {
    name: "Building and Development",
    category: "Community Development",
    fy2024: { personnel: 14200000, operating: 2100000, capital: 200000, total: 16300000, fte: 142 },
    fy2025: { personnel: 15800000, operating: 2400000, capital: 250000, total: 18200000, fte: 155 },
    fy2026: { personnel: 17100000, operating: 2600000, capital: 300000, total: 19700000, fte: 165 },
  },
  {
    name: "Transportation and Capital Infrastructure",
    category: "Community Development",
    fy2024: { personnel: 8800000, operating: 4200000, capital: 15000000, total: 13000000, fte: 85 },
    fy2025: { personnel: 10200000, operating: 5000000, capital: 18000000, total: 15200000, fte: 98 },
    fy2026: { personnel: 11200000, operating: 5600000, capital: 20000000, total: 16800000, fte: 108 },
  },
  {
    name: "Health Department",
    category: "Health and Welfare",
    fy2024: { personnel: 8500000, operating: 2200000, capital: 200000, total: 10700000, fte: 95 },
    fy2025: { personnel: 9800000, operating: 2600000, capital: 250000, total: 12400000, fte: 108 },
    fy2026: { personnel: 10800000, operating: 2900000, capital: 300000, total: 13700000, fte: 118 },
  },
  {
    name: "Planning and Zoning",
    category: "Community Development",
    fy2024: { personnel: 9200000, operating: 1400000, capital: 100000, total: 10600000, fte: 95 },
    fy2025: { personnel: 10500000, operating: 1650000, capital: 120000, total: 12150000, fte: 108 },
    fy2026: { personnel: 11500000, operating: 1850000, capital: 150000, total: 13350000, fte: 118 },
  },
  {
    name: "County Administrator",
    category: "General Government",
    fy2024: { personnel: 8500000, operating: 1200000, capital: 50000, total: 9700000, fte: 68 },
    fy2025: { personnel: 9800000, operating: 1400000, capital: 60000, total: 11200000, fte: 78 },
    fy2026: { personnel: 10500000, operating: 1550000, capital: 70000, total: 12050000, fte: 82 },
  },
  {
    name: "Housing and Community Development",
    category: "Community Development",
    fy2024: { personnel: 2200000, operating: 8500000, capital: 500000, total: 10700000, fte: 22 },
    fy2025: { personnel: 2600000, operating: 11000000, capital: 600000, total: 13600000, fte: 26 },
    fy2026: { personnel: 2900000, operating: 12500000, capital: 700000, total: 15400000, fte: 28 },
  },
  {
    name: "Finance and Procurement",
    category: "General Government",
    fy2024: { personnel: 6800000, operating: 1400000, capital: 100000, total: 8200000, fte: 72 },
    fy2025: { personnel: 7600000, operating: 1600000, capital: 120000, total: 9200000, fte: 80 },
    fy2026: { personnel: 8200000, operating: 1750000, capital: 150000, total: 9950000, fte: 85 },
  },
  {
    name: "Human Resources",
    category: "General Government",
    fy2024: { personnel: 4800000, operating: 2400000, capital: 50000, total: 7200000, fte: 48 },
    fy2025: { personnel: 5500000, operating: 2800000, capital: 60000, total: 8300000, fte: 54 },
    fy2026: { personnel: 6000000, operating: 3100000, capital: 70000, total: 9100000, fte: 58 },
  },
  {
    name: "Animal Services",
    category: "Public Safety",
    fy2024: { personnel: 4388445, operating: 661489, capital: 150000, total: 5049934, fte: 42 },
    fy2025: { personnel: 5576022, operating: 730583, capital: 180000, total: 6306605, fte: 48 },
    fy2026: { personnel: 6571550, operating: 824488, capital: 200000, total: 7396038, fte: 55 },
  },
  {
    name: "Commissioner of the Revenue",
    category: "General Government",
    fy2024: { personnel: 5200000, operating: 450000, capital: 30000, total: 5650000, fte: 56 },
    fy2025: { personnel: 5800000, operating: 500000, capital: 35000, total: 6300000, fte: 60 },
    fy2026: { personnel: 6200000, operating: 550000, capital: 40000, total: 6750000, fte: 63 },
  },
  {
    name: "Board of Supervisors",
    category: "General Government",
    fy2024: { personnel: 0, operating: 4449762, capital: 0, total: 4449762, fte: 0 },
    fy2025: { personnel: 0, operating: 5646852, capital: 0, total: 5646852, fte: 0 },
    fy2026: { personnel: 0, operating: 5825950, capital: 0, total: 5825950, fte: 0 },
  },
  {
    name: "County Attorney",
    category: "General Government",
    fy2024: { personnel: 4800000, operating: 350000, capital: 20000, total: 5150000, fte: 34 },
    fy2025: { personnel: 5400000, operating: 400000, capital: 25000, total: 5800000, fte: 38 },
    fy2026: { personnel: 5900000, operating: 450000, capital: 30000, total: 6350000, fte: 41 },
  },
];

// Multiple inflation measures for comparison
export const inflationData: InflationData[] = [
  { year: "2020", index: 100.0, yoy: 1.2 },
  { year: "2021", index: 104.7, yoy: 4.7 },
  { year: "2022", index: 113.0, yoy: 8.0 },
  { year: "2023", index: 116.6, yoy: 3.2 },
  { year: "2024", index: 120.0, yoy: 2.9 },
  { year: "2025", index: 123.0, yoy: 2.5 },
];

// Enhanced budget growth data with multiple inflation measures
export const budgetGrowthData = [
  { 
    year: "FY2021", 
    budget: 3200000000, 
    generalFund: 1850000000,
    budgetIndex: 100.0, 
    generalFundIndex: 100.0,
    cpiIndex: 100.0,
    truflationIndex: 100.0,
    chapwoodIndex: 100.0
  },
  { 
    year: "FY2022", 
    budget: 3500000000,
    generalFund: 2000000000,
    budgetIndex: 109.4,
    generalFundIndex: 108.1,
    cpiIndex: 104.7,
    truflationIndex: 105.2,
    chapwoodIndex: 108.5
  },
  { 
    year: "FY2023", 
    budget: 3800000000,
    generalFund: 2150000000,
    budgetIndex: 118.8,
    generalFundIndex: 116.2,
    cpiIndex: 113.0,
    truflationIndex: 113.8,
    chapwoodIndex: 120.3
  },
  { 
    year: "FY2024", 
    budget: 4175858354,
    generalFund: 2346000000,
    budgetIndex: 130.5,
    generalFundIndex: 126.8,
    cpiIndex: 116.6,
    truflationIndex: 117.2,
    chapwoodIndex: 131.5
  },
  { 
    year: "FY2025", 
    budget: 5167533587,
    generalFund: 2705309133,
    budgetIndex: 161.5,
    generalFundIndex: 146.2,
    cpiIndex: 120.0,
    truflationIndex: 120.8,
    chapwoodIndex: 141.0
  },
  { 
    year: "FY2026", 
    budget: 5400000000,
    generalFund: 2850000000,
    budgetIndex: 168.8,
    generalFundIndex: 154.1,
    cpiIndex: 123.0,
    truflationIndex: 123.5,
    chapwoodIndex: 148.5
  },
];

// Tax rate history
export const taxRateHistory = [
  { year: "FY2018", rate: 1.045, avgAssessedValue: 425000 },
  { year: "FY2019", rate: 1.035, avgAssessedValue: 445000 },
  { year: "FY2020", rate: 1.015, avgAssessedValue: 465000 },
  { year: "FY2021", rate: 0.890, avgAssessedValue: 520000 },
  { year: "FY2022", rate: 0.880, avgAssessedValue: 580000 },
  { year: "FY2023", rate: 0.880, avgAssessedValue: 625000 },
  { year: "FY2024", rate: 0.875, avgAssessedValue: 680000 },
  { year: "FY2025", rate: 0.865, avgAssessedValue: 730000 },
  { year: "FY2026", rate: 0.865, avgAssessedValue: 775000 },
];

// School funding breakdown
export const schoolFundingHistory = [
  { 
    year: "FY2021", 
    localTransfer: 900000000, 
    stateAid: 320000000, 
    federalAid: 85000000,
    otherRevenue: 15000000,
    totalSchoolBudget: 1320000000,
    percentOfGeneralFund: 48.6
  },
  { 
    year: "FY2022", 
    localTransfer: 980000000, 
    stateAid: 340000000, 
    federalAid: 82000000,
    otherRevenue: 18000000,
    totalSchoolBudget: 1420000000,
    percentOfGeneralFund: 49.0
  },
  { 
    year: "FY2023", 
    localTransfer: 1050000000, 
    stateAid: 380000000, 
    federalAid: 95000000,
    otherRevenue: 25000000,
    totalSchoolBudget: 1550000000,
    percentOfGeneralFund: 48.8
  },
  { 
    year: "FY2024", 
    localTransfer: 1139827376, 
    stateAid: 410000000, 
    federalAid: 90000000,
    otherRevenue: 25217803,
    totalSchoolBudget: 1665045179,
    percentOfGeneralFund: 48.6
  },
  { 
    year: "FY2025", 
    localTransfer: 1268127376, 
    stateAid: 430000000, 
    federalAid: 95000000,
    otherRevenue: 31650516,
    totalSchoolBudget: 1824777892,
    percentOfGeneralFund: 46.9
  },
  { 
    year: "FY2026", 
    localTransfer: 1350000000, 
    stateAid: 460000000, 
    federalAid: 105000000,
    otherRevenue: 35000000,
    totalSchoolBudget: 1950000000,
    percentOfGeneralFund: 47.4
  },
];

// Personnel summary by category
export const personnelSummary = [
  {
    category: "County Government (FT)",
    fy2024: 4850,
    fy2025: 5104,
    fy2026: 5250,
  },
  {
    category: "County Government (PT)",
    fy2024: 1200,
    fy2025: 1350,
    fy2026: 1450,
  },
  {
    category: "LCPS Employees (FT)",
    fy2024: 14400,
    fy2025: 14800,
    fy2026: 15100,
  },
  {
    category: "All Funds (FT)",
    fy2024: 19250,
    fy2025: 19904,
    fy2026: 20350,
  },
];

// Per capita spending by category
export const perCapitaByCategory = [
  { category: "Public Safety", amount: 240000000, perCapita: 530, percentOfTotal: 24.4 },
  { category: "School Transfer", amount: 1268127376, perCapita: 2801, percentOfTotal: 46.9 },
  { category: "Health & Welfare", amount: 111000000, perCapita: 245, percentOfTotal: 11.3 },
  { category: "General Government", amount: 128000000, perCapita: 283, percentOfTotal: 13.0 },
  { category: "Parks & Culture", amount: 60000000, perCapita: 133, percentOfTotal: 6.1 },
  { category: "Community Development", amount: 59000000, perCapita: 130, percentOfTotal: 6.0 },
  { category: "Debt Service & Other", amount: 102000000, perCapita: 225, percentOfTotal: 10.4 },
];

// Spending by category for pie/donut chart
export const spendingByCategory = [
  { category: "Schools Transfer", amount: 1268127376, color: "#3b82f6" },
  { category: "Public Safety", amount: 240000000, color: "#ef4444" },
  { category: "Health & Welfare", amount: 111000000, color: "#10b981" },
  { category: "General Government", amount: 128000000, color: "#f59e0b" },
  { category: "Parks & Culture", amount: 60000000, color: "#8b5cf6" },
  { category: "Community Development", amount: 59000000, color: "#ec4899" },
  { category: "Other", amount: 102000000, color: "#6b7280" },
];

// Data sources with links
export const dataSources = [
  {
    name: "Loudoun County FY2025-2026 Adopted Budget",
    url: "https://www.loudoun.gov/budget",
    description: "Official adopted budget documents including expenditures by department and fund",
  },
  {
    name: "Bureau of Labor Statistics (CPI-U)",
    url: "https://www.bls.gov/cpi/",
    description: "Consumer Price Index for All Urban Consumers - official government inflation measure",
  },
  {
    name: "Truflation",
    url: "https://truflation.com/",
    description: "Real-time blockchain-based inflation index using multiple data sources",
  },
  {
    name: "Chapwood Index",
    url: "http://www.chapwoodindex.org/",
    description: "Alternative inflation measure tracking 500 items in major U.S. cities",
  },
  {
    name: "LCPS Budget Documents",
    url: "https://www.lcps.org/budget",
    description: "Loudoun County Public Schools adopted budget and financial reports",
  },
];

// Insights for metric cards
export const metricInsights: Record<string, string> = {
  totalBudget: "Total budget grew 61.5% (FY2021-FY2025) while BLS CPI inflation was ~23%. Budget growth significantly outpaces official inflation measures.",
  generalFund: "The General Fund is the primary operating fund for county services. It excludes enterprise funds, special revenue funds, and capital projects.",
  perCapita: "Per capita spending is calculated by dividing total budget by estimated population. Loudoun's per capita spending is among the highest in Virginia.",
  taxRate: "Real estate tax rate decreased from $0.89 to $0.865 per $100 (3% reduction) since FY2021, offset by significant property value increases averaging 40%+.",
  schoolTransfer: "Local transfer to LCPS increased from $900M to $1.27B (+41%) since FY2021. School funding as % of General Fund decreased slightly from 48.6% to 46.9%.",
  countyFte: "County government full-time positions grew from 4,200 (FY2021) to 5,104 (FY2025) - 21.5% increase in 4 years.",
};

// Utility functions
export function formatCurrency(value: number, compact = false): string {
  if (compact) {
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(1)}M`;
    if (value >= 1e3) return `$${(value / 1e3).toFixed(0)}K`;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

export function formatPercent(value: number): string {
  return `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;
}

export function calculatePerCapita(budget: number, population: number): number {
  return Math.round(budget / population);
}

export function calculateChange(current: number, previous: number): number {
  return ((current - previous) / previous) * 100;
}

// Calculate category totals for departments
export function getCategoryTotals(fiscalYear: "fy2024" | "fy2025" | "fy2026") {
  const categories: Record<string, { total: number; fte: number; personnel: number; operating: number }> = {};
  
  departments.forEach(dept => {
    if (!categories[dept.category]) {
      categories[dept.category] = { total: 0, fte: 0, personnel: 0, operating: 0 };
    }
    categories[dept.category].total += dept[fiscalYear].total;
    categories[dept.category].fte += dept[fiscalYear].fte;
    categories[dept.category].personnel += dept[fiscalYear].personnel;
    categories[dept.category].operating += dept[fiscalYear].operating;
  });
  
  return Object.entries(categories).map(([category, data]) => ({
    category,
    ...data
  })).sort((a, b) => b.total - a.total);
}
