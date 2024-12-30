"use client";

import { ThemeProvider } from "@/components/ThemeContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Toolbar from "./Toolbar";

export default function MirruloLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-row">
          <Toolbar />
          <div className="flex-1 flex flex-col h-screen">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
