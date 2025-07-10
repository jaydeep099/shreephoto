"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { darkMode } = useTheme();
  return (
    <div className="flex flex-col min-h-screen bg-black dark:bg-white  text-white dark:text-black">
      <Header />
      <main
        className={`flex-grow container mx-auto p-4 ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <h1 className="text-4xl font-bold">Welcome to Shree Photo Fashion</h1>
        <p className="mt-4">
          This is the main content area. You can add your page content here.
        </p>
      </main>
      <Footer />
    </div>
  );
}
