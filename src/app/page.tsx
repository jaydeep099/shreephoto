"use client";

import { Header } from "@/components/Header";
import { useTheme } from "@/context/ThemeContext";
import { div } from "framer-motion/client";

export default function Home() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    // <div>
    //   <button
    //     onClick={toggleDarkMode}
    //     className={`p-2 rounded-lg ${
    //       darkMode
    //         ? "bg-gray-700 hover:bg-gray-600"
    //         : "bg-gray-100 hover:bg-gray-200"
    //     } transition-colors`}
    //     aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    //   >
    //     {darkMode ? <span>☀️</span> : <span>🌙</span>}
    //   </button>
    // </div>
    <div className="bg-neutral-900 ">
      <Header />
    </div>
  );
}
