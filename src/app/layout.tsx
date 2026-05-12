import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Yahya Benjdy | Full Stack Engineer",
  description: "Portfolio of Yahya Benjdy, Full Stack Engineer specializing in the MERN stack, Next.js, and AI prompt engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen selection:bg-blue-500/30 selection:text-white bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-[#f3f4f6] transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <ThemeToggle />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
