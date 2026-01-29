import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loudoun County Budget Dashboard",
  description: "Transparent view of Loudoun County, Virginia government spending and fiscal data",
  keywords: ["Loudoun County", "Virginia", "budget", "transparency", "government spending", "fiscal data"],
  openGraph: {
    title: "Loudoun County Budget Dashboard",
    description: "Transparent view of Loudoun County government spending",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-blue-700 dark:text-blue-400">
                  Loudoun County
                </span>
                <span className="text-lg font-medium text-gray-600 dark:text-gray-300">
                  Budget Dashboard
                </span>
              </div>
              <nav className="hidden md:flex gap-6">
                <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Dashboard
                </a>
                <a href="/departments" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Departments
                </a>
                <a href="/methodology" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Methodology
                </a>
              </nav>
            </div>
          </div>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t border-gray-200 dark:border-gray-700 mt-12 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
            <p>
              Data sourced from{" "}
              <a 
                href="https://www.loudoun.gov/budget" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Loudoun County Official Budget Documents
              </a>
            </p>
            <p className="mt-2">
              This is an independent transparency project. Not affiliated with Loudoun County Government.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
