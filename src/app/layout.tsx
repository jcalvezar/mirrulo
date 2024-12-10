import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MirruloLayout from "@/components/Navigation/MirruloLayout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mirrulo Movies App",
  description: "Mirrulo Web App for Searching movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MirruloLayout>{children}</MirruloLayout>
      </body>
    </html>
  );
}
