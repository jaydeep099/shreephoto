"use client";

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
    <Navbar
      className={`sticky top-0 flex flex-row items-center border-b z-50 shadow-md ${
        darkMode ? "bg-black text-white border-b-slate-800" : "bg-white text-black border-b-slate-200"
      }`}
    >
      <NavbarBrand className="p-4 flex flex-row items-center">
        {/* Hamburger icon: visible only on mobile */}
        <button
          className="block sm:hidden mr-2"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}
        </button>
        <p
          className={`font-extrabold text-xl sm:text-2xl headerFont ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Shree Photo Fashion
        </p>
      </NavbarBrand>

      <div className="flex flex-1 items-center justify-between">
        {/* Menu links: hidden on mobile, visible on sm+ */}
        <NavbarContent className="hidden sm:flex gap-4 p-4">
          <NavbarItem>
            <Link
              className={`transition-colors ${darkMode ? "text-white" : "text-black"}`}
              href="/"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`transition-colors ${darkMode ? "text-white" : "text-black"}`}
              href="/services"
            >
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`transition-colors ${darkMode ? "text-white" : "text-black"}`}
              href="/about"
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`transition-colors ${darkMode ? "text-white" : "text-black"}`}
              href="/contact"
            >
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile menu: visible only when hamburger is open */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div
              className="fixed inset-0 bg-black/50 z-[55] sm:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Mobile menu */}
            <div
              className={`fixed top-[56px] left-0 w-full shadow-xl sm:hidden z-[60] ${
                darkMode
                  ? "bg-gray-900 text-white"
                  : "bg-white text-black"
              }`}
            >
              <div className="flex flex-col gap-1 p-4">
                <Link
                  className={`font-serif py-3 px-4 rounded-lg transition-colors ${
                    darkMode
                      ? "text-white hover:bg-gray-800"
                      : "text-black hover:bg-gray-100"
                  }`}
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  className={`font-serif py-3 px-4 rounded-lg transition-colors ${
                    darkMode
                      ? "text-white hover:bg-gray-800"
                      : "text-black hover:bg-gray-100"
                  }`}
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  className={`font-serif py-3 px-4 rounded-lg transition-colors ${
                    darkMode
                      ? "text-white hover:bg-gray-800"
                      : "text-black hover:bg-gray-100"
                  }`}
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  className={`font-serif py-3 px-4 rounded-lg transition-colors ${
                    darkMode
                      ? "text-white hover:bg-gray-800"
                      : "text-black hover:bg-gray-100"
                  }`}
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Dark Mode Toggle */}
      <div className="flex flex-1 p-2 justify-end">
        <NavbarContent>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors ${
              darkMode
                ? "bg-black"
                : "bg-white"
            }`}
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
