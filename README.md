# Loudoun County Budget Dashboard

A transparency dashboard for Loudoun County, Virginia government spending and fiscal data.

🔗 **Live Demo:** [Coming Soon]

## Features

- **Key Metrics Dashboard** — Total budget, general fund, per capita spending, tax rates
- **Budget vs. Inflation Chart** — Compare budget growth to CPI-U inflation
- **Department Breakdown** — Expenditures by department (Personnel/Operating)
- **Personnel Tracking** — FTE counts by department over time
- **Responsive Design** — Works on desktop and mobile
- **Dark Mode Support** — Respects system preferences

## Data Sources

All data is sourced from official Loudoun County budget documents:

- [Loudoun County Budget](https://www.loudoun.gov/budget) — Current adopted budget
- [Budget Archives](https://www.loudoun.gov/1474/Budget-Archives) — Historical budgets
- [ACFR Reports](https://www.loudoun.gov/1476/Annual-Comprehensive-Financial-Reports) — Audited financials
- [BLS CPI Data](https://www.bls.gov/cpi/) — Inflation statistics

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Deployment:** Vercel/Netlify ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/loudoun-budget-dashboard.git
cd loudoun-budget-dashboard

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
loudoun-budget-dashboard/
├── data/
│   ├── raw/           # Original PDF budget documents
│   └── processed/     # Extracted JSON data
├── scripts/
│   └── extract-budget-data.js  # Data extraction script
├── src/
│   ├── app/           # Next.js pages
│   ├── components/    # React components
│   └── lib/           # Data and utilities
└── public/            # Static assets
```

## Data Updates

Budget data is updated annually when new Adopted Budget documents are published (typically April-May).

### To update data:

1. Download new budget PDFs to `data/raw/`
2. Run the extraction script:
   ```bash
   node scripts/extract-budget-data.js
   ```
3. Review extracted data in `data/processed/budgets.json`
4. Update `src/lib/data.ts` with any new metrics or corrections

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify

1. Push to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Manual

```bash
npm run build
# Deploy .next directory to your hosting provider
```

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Disclaimer

This is an independent transparency project. It is **not affiliated with, endorsed by, or officially connected to Loudoun County Government**.

Data accuracy is not guaranteed. For official budget information, please refer to [loudoun.gov/budget](https://www.loudoun.gov/budget).

## License

MIT License — see [LICENSE](LICENSE) for details.

## Acknowledgments

- Inspired by [Virginia Freedom Tech](https://audit.virginiafreedom.tech/) (Frederick County dashboard)
- Built with data from Loudoun County's excellent public budget documents
