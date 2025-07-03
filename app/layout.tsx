import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Set Metadata for tab title and favicon
export const metadata: Metadata = {
  title: "CCTPS",
  icons: {
    icon: "/logo.png", // logo in public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="p-4">
          {/* ✅ Using plain HTML <img> with corrected path */}
          <img src="/public/logo.png" alt="CCTPS Logo" width="120" height="40" />
        </header>
        {children}
      </body>
    </html>
  );
}