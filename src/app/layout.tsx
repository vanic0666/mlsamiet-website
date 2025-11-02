"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { usePathname } from 'next/navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// This needs to be moved to a separate file since metadata can't be used in client components
// export const metadata: Metadata = {
//   title: "MLSA MIET",
//   description: "Create by MLSA MIET Teachical Team",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // List of routes where header and footer should not appear
  const noHeaderFooterRoutes = ['/events/somethingcool', '/events/somethingelse'];
  // Or check if route starts with a specific pattern
  // const isSpecialSection = pathname.startsWith('/special-section');

  const showHeaderFooter = !noHeaderFooterRoutes.includes(pathname);
  // Or using pattern check: const showHeaderFooter = !isSpecialSection;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          {showHeaderFooter && <NavBar />}
          <main className={`flex-1 ${showHeaderFooter ? 'pt-8 lg:pt-16' : ''}`}>
            {children}
          </main>
          {showHeaderFooter && <Footer />}
        </div>
      </body>
    </html>
  );
}