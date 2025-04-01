import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar";
import Link from "next/link";
import ErrorBoundary from "./ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colors palette generator",
  description: "A colors generator app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark relative max-h-screen flex-col antialiased flex items-center justify-center w-full h-screen`}
      >
        <ErrorBoundary>
          <NavBar />
          <div className="w-full h-full">{children}</div>
          <div className="w-full z-50 text-foreground text-sm font-light py-1 px-3 text-center">
            Colors generator - 2025 by{" "}
            <Link
              className="font-medium"
              target="_blank"
              href="https://github.com/Dex-code61/colors-generator-app"
            >
              Dex-code61
            </Link>
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}
