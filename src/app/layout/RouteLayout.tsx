"use client";

import { Footer } from "@/app/layout/Footer";
import { Header } from "@/app/layout/Header";
import { useTheme } from "@/context/ThemeContext";

export default function Home({
  children,
}: {
  children: React.ReactNode;
}) {
  const { darkMode } = useTheme();
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
