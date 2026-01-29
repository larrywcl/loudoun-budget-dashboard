# Data Extraction Scripts

Scripts for extracting budget data from Loudoun County PDF documents.

## Prerequisites

- Node.js 18+
- `pdftotext` (from poppler-utils)

On macOS:
```bash
brew install poppler
```

On Ubuntu/Debian:
```bash
sudo apt-get install poppler-utils
```

## Scripts

### extract-budget-data.js

Extracts budget data from Loudoun County PDF documents and outputs structured JSON.

**Usage:**
```bash
node scripts/extract-budget-data.js
```

**Input:**
- `data/raw/FY20XX-*.pdf` — Budget PDF documents

**Output:**
- `data/processed/budgets.json` — Structured budget data

## Data Sources

Download budget PDFs from:

1. **Current Budget:** https://www.loudoun.gov/budget
2. **Archives:** https://www.loudoun.gov/1474/Budget-Archives

Key documents:
- `Department-Summaries.pdf` — Department-level financial data
- `Volume1.pdf` — Executive summary, revenue, department details
- `Volume2.pdf` — Capital Improvement Program

## Manual Data Entry

Some data requires manual extraction or verification:

1. **Key Metrics** — Total budget, general fund, tax rate from Executive Summary
2. **Population** — From Demographic trends section
3. **Inflation** — From BLS CPI-U data

Update `src/lib/data.ts` with verified figures.

## Annual Update Process

1. Download new budget PDFs (typically available April-May)
2. Place in `data/raw/` with naming convention: `FY20XX-[Document].pdf`
3. Run extraction script
4. Verify key figures against source documents
5. Update `src/lib/data.ts` as needed
6. Test and deploy
