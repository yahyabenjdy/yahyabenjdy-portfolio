import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="en" className={`dark ${inter.variable} bg-[#050505] text-[#f3f4f6]`}>
      <body className="antialiased min-h-screen selection:bg-blue-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
