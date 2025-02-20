import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fragrance Finder",
  description: "Helping you find your perfect fragrance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Load custom fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Average&Inter+Tight:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-inter antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
