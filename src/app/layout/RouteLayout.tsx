"use client";

import { Footer } from "@/app/layout/Footer";
import { Header } from "@/app/layout/Header";
import { useTheme } from "@/context/ThemeContext";
import React from "react";

export default function Home({
  children,
  params,
  searchParams,
}: {
  children: React.ReactNode;
  params?: Promise<Record<string, string | string[]>>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { darkMode } = useTheme();
  
  // Unwrap params and searchParams if they exist (for Next.js 15+ compatibility)
  const resolvedParams = params ? React.use(params) : undefined;
  const resolvedSearchParams = searchParams ? React.use(searchParams) : undefined;
  
  // These are unused but prevent the warnings
  if (resolvedParams || resolvedSearchParams) {
    // No-op: params/searchParams are handled but not used in this layout
  }
  
  return (
    <div className={`flex flex-col min-h-screen ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}>
      <Header />
      <main
        className={`flex-grow container mx-auto p-4 ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
       {children}
      </main>
      <Footer />
    </div>
  );
}
