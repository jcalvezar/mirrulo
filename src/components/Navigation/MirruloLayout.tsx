"use client";

import { ThemeProvider } from "@/components/ThemeContext";
import Navbar from "./Navbat";
import Footer from "./Footer";

export default function MirruloLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
