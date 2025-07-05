import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

export function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Navbar isBordered className="flex flex-row items-center">
      <NavbarBrand className="p-4 flex flex-row items-center">
        {/* Hamburger icon: visible only on mobile */}
        <button
          className="block sm:hidden mr-2"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {/* Simple hamburger SVG */}
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <p className="font-bold lg:text-2xl md:text-2xl sm:text-xl headerFont">
          Shree Photo Fashion
        </p>
      </NavbarBrand>
      <div className="flex flex-1 items-center justify-end">
        {/* Menu links: hidden on mobile, visible on sm+ */}
        <NavbarContent className="hidden sm:flex gap-4 p-4">
          <NavbarItem>
            <Link
              className="text-gray-300 hover:text-white text-muted-foreground hidden space-x-1 transition-colors sm:flex"
              href="#"
            >
              asd
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-gray-300 hover:text-white text-muted-foreground hidden space-x-1 transition-colors sm:flex"
              href="#"
            >
              abc
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-gray-300 hover:text-white text-muted-foreground hidden space-x-1 transition-colors sm:flex"
              href="#"
            >
              xyz
            </Link>
          </NavbarItem>
        </NavbarContent>
        {/* Mobile menu: visible only when hamburger is open */}
        {mobileMenuOpen && (
          <div className="absolute top-14 left-0 w-full bg-gradient-to-b from-slate-900 to-gray-700 shadow-md sm:hidden z-50 h-12/12">
            <div className="flex flex-col gap-2 p-4 text-center">
              <Link
                className="text-white font-serif"
                href="#"
                onClick={() => setMobileMenuOpen(false)}
              >
                asd
              </Link>
              <Link
                className="text-white font-serif"
                href="#"
                onClick={() => setMobileMenuOpen(false)}
              >
                abc
              </Link>
              <Link
                className="text-white font-serif"
                href="#"
                onClick={() => setMobileMenuOpen(false)}
              >
                xyz
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-1 p-2 justify-end">
        <NavbarContent>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-100 hover:bg-gray-200"
            } transition-colors`}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? <span>☀️</span> : <span>🌙</span>}
          </button>
        </NavbarContent>
      </div>
    </Navbar>
  );
}
