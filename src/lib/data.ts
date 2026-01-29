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
}

export interface Department {
  name: string;
  category: string;
  fy2024: { personnel: number; operating: number; total: number; fte: number };
  fy2025: { personnel: number; operating: number; total: number; fte: number };
  fy2026: { personnel: number; operating: number; total: number; fte: number };
}

export interface InflationData {
  year: string;
  index: number;
  yoy: number;
}

export const keyMetrics: Record<string, FiscalYearMetrics> = {
  FY2024: {
    totalBudget: 4175858354,
    generalFund: 2346000000,
    countyOperating: 840537318,
    schoolOperating: 1665045179,
    taxRate: 0.875,
    population: 439560,
    schoolTransfer: 1139827376,
    countyFte: 4850,
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
  },
};

export const departments: Department[] = [
  {
    name: "Fire and Rescue",
    category: "Public Safety",
    fy2024: { personnel: 98000000, operating: 12000000, total: 110000000, fte: 720 },
    fy2025: { personnel: 115000000, operating: 14500000, total: 129500000, fte: 785 },
    fy2026: { personnel: 128000000, operating: 16000000, total: 144000000, fte: 840 },
  },
  {
    name: "Sheriff's Office",
    category: "Public Safety",
    fy2024: { personnel: 85000000, operating: 8500000, total: 93500000, fte: 680 },
    fy2025: { personnel: 100000000, operating: 10200000, total: 110200000, fte: 750 },
    fy2026: { personnel: 112000000, operating: 11500000, total: 123500000, fte: 810 },
  },
  {
    name: "Family Services",
    category: "Health and Welfare",
    fy2024: { personnel: 42000000, operating: 8500000, total: 50500000, fte: 420 },
    fy2025: { personnel: 48000000, operating: 9800000, total: 57800000, fte: 475 },
    fy2026: { personnel: 53000000, operating: 11000000, total: 64000000, fte: 520 },
  },
  {
    name: "Information Technology",
    category: "General Government",
    fy2024: { personnel: 18000000, operating: 22000000, total: 40000000, fte: 165 },
    fy2025: { personnel: 21000000, operating: 26000000, total: 47000000, fte: 185 },
    fy2026: { personnel: 23500000, operating: 29000000, total: 52500000, fte: 200 },
  },
  {
    name: "General Services",
    category: "General Government",
    fy2024: { personnel: 12500000, operating: 28000000, total: 40500000, fte: 135 },
    fy2025: { personnel: 14200000, operating: 32000000, total: 46200000, fte: 150 },
    fy2026: { personnel: 15500000, operating: 35000000, total: 50500000, fte: 160 },
  },
  {
    name: "Mental Health Services",
    category: "Health and Welfare",
    fy2024: { personnel: 28000000, operating: 6500000, total: 34500000, fte: 285 },
    fy2025: { personnel: 33000000, operating: 7800000, total: 40800000, fte: 330 },
    fy2026: { personnel: 37000000, operating: 8800000, total: 45800000, fte: 365 },
  },
  {
    name: "Parks, Recreation and Community Services",
    category: "Parks and Culture",
    fy2024: { personnel: 24000000, operating: 9500000, total: 33500000, fte: 320 },
    fy2025: { personnel: 28000000, operating: 11000000, total: 39000000, fte: 365 },
    fy2026: { personnel: 31000000, operating: 12500000, total: 43500000, fte: 400 },
  },
  {
    name: "Library Services",
    category: "Parks and Culture",
    fy2024: { personnel: 14500000, operating: 4200000, total: 18700000, fte: 185 },
    fy2025: { personnel: 16500000, operating: 4800000, total: 21300000, fte: 205 },
    fy2026: { personnel: 18000000, operating: 5300000, total: 23300000, fte: 220 },
  },
  {
    name: "Building and Development",
    category: "Community Development",
    fy2024: { personnel: 14200000, operating: 2100000, total: 16300000, fte: 142 },
    fy2025: { personnel: 15800000, operating: 2400000, total: 18200000, fte: 155 },
    fy2026: { personnel: 17100000, operating: 2600000, total: 19700000, fte: 165 },
  },
  {
    name: "Transportation and Capital Infrastructure",
    category: "Community Development",
    fy2024: { personnel: 8800000, operating: 4200000, total: 13000000, fte: 85 },
    fy2025: { personnel: 10200000, operating: 5000000, total: 15200000, fte: 98 },
    fy2026: { personnel: 11200000, operating: 5600000, total: 16800000, fte: 108 },
  },
  {
    name: "Health Department",
    category: "Health and Welfare",
    fy2024: { personnel: 8500000, operating: 2200000, total: 10700000, fte: 95 },
    fy2025: { personnel: 9800000, operating: 2600000, total: 12400000, fte: 108 },
    fy2026: { personnel: 10800000, operating: 2900000, total: 13700000, fte: 118 },
  },
  {
    name: "Planning and Zoning",
    category: "Community Development",
    fy2024: { personnel: 9200000, operating: 1400000, total: 10600000, fte: 95 },
    fy2025: { personnel: 10500000, operating: 1650000, total: 12150000, fte: 108 },
    fy2026: { personnel: 11500000, operating: 1850000, total: 13350000, fte: 118 },
  },
  {
    name: "County Administrator",
    category: "General Government",
    fy2024: { personnel: 8500000, operating: 1200000, total: 9700000, fte: 68 },
    fy2025: { personnel: 9800000, operating: 1400000, total: 11200000, fte: 78 },
    fy2026: { personnel: 10500000, operating: 1550000, total: 12050000, fte: 82 },
  },
  {
    name: "Housing and Community Development",
    category: "Community Development",
    fy2024: { personnel: 2200000, operating: 8500000, total: 10700000, fte: 22 },
    fy2025: { personnel: 2600000, operating: 11000000, total: 13600000, fte: 26 },
    fy2026: { personnel: 2900000, operating: 12500000, total: 15400000, fte: 28 },
  },
  {
    name: "Finance and Procurement",
    category: "General Government",
    fy2024: { personnel: 6800000, operating: 1400000, total: 8200000, fte: 72 },
    fy2025: { personnel: 7600000, operating: 1600000, total: 9200000, fte: 80 },
    fy2026: { personnel: 8200000, operating: 1750000, total: 9950000, fte: 85 },
  },
  {
    name: "Human Resources",
    category: "General Government",
    fy2024: { personnel: 4800000, operating: 2400000, total: 7200000, fte: 48 },
    fy2025: { personnel: 5500000, operating: 2800000, total: 8300000, fte: 54 },
    fy2026: { personnel: 6000000, operating: 3100000, total: 9100000, fte: 58 },
  },
  {
    name: "Animal Services",
    category: "Public Safety",
    fy2024: { personnel: 4388445, operating: 661489, total: 5049934, fte: 42 },
    fy2025: { personnel: 5576022, operating: 730583, total: 6306605, fte: 48 },
    fy2026: { personnel: 6571550, operating: 824488, total: 7396038, fte: 55 },
  },
  {
    name: "Commissioner of the Revenue",
    category: "General Government",
    fy2024: { personnel: 5200000, operating: 450000, total: 5650000, fte: 56 },
    fy2025: { personnel: 5800000, operating: 500000, total: 6300000, fte: 60 },
    fy2026: { personnel: 6200000, operating: 550000, total: 6750000, fte: 63 },
  },
  {
    name: "Board of Supervisors",
    category: "General Government",
    fy2024: { personnel: 0, operating: 4449762, total: 4449762, fte: 0 },
    fy2025: { personnel: 0, operating: 5646852, total: 5646852, fte: 0 },
    fy2026: { personnel: 0, operating: 5825950, total: 5825950, fte: 0 },
  },
  {
    name: "County Attorney",
    category: "General Government",
    fy2024: { personnel: 4800000, operating: 350000, total: 5150000, fte: 34 },
    fy2025: { personnel: 5400000, operating: 400000, total: 5800000, fte: 38 },
    fy2026: { personnel: 5900000, operating: 450000, total: 6350000, fte: 41 },
  },
];

export const inflationData: InflationData[] = [
  { year: "2020", index: 100.0, yoy: 1.2 },
  { year: "2021", index: 104.7, yoy: 4.7 },
  { year: "2022", index: 113.0, yoy: 8.0 },
  { year: "2023", index: 116.6, yoy: 3.2 },
  { year: "2024", index: 120.0, yoy: 2.9 },
  { year: "2025", index: 123.0, yoy: 2.5 },
];

export const budgetGrowthData = [
  { year: "FY2021", budget: 3200000000, budgetIndex: 100.0, cpiIndex: 100.0 },
  { year: "FY2022", budget: 3500000000, budgetIndex: 109.4, cpiIndex: 104.7 },
  { year: "FY2023", budget: 3800000000, budgetIndex: 118.8, cpiIndex: 113.0 },
  { year: "FY2024", budget: 4175858354, budgetIndex: 130.5, cpiIndex: 116.6 },
  { year: "FY2025", budget: 5167533587, budgetIndex: 161.5, cpiIndex: 120.0 },
  { year: "FY2026", budget: 5400000000, budgetIndex: 168.8, cpiIndex: 123.0 },
];

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
