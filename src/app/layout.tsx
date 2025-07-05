import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeBackground } from "../components/ThemeBackground";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shree Photo Fashion",
  description:
    "A Photo Studio based on Bhavnagar , Gujarat , India",
  keywords: [
    "Shree Photo Fashion",
    "Photo Studio Bhavnagar",
    "Wedding Photography and videography bhavnagar",
    "baby shoot bhavnagar",
    "Modeling Shoot bhavnagar",
    "Passport size photo bhavnagar",
    "Xerox bhavnagar",
    "best baby shoot bhavnagar",
    "best Wedding Photography and videography bhavnagar",
    "best Modeling Shoot bhavnagar",
  ],
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <ThemeProvider>
            <ThemeBackground>{children}</ThemeBackground>
          </ThemeProvider>
      </body>
    </html>
  );
}
