"use client";

import { useTheme } from "@/context/ThemeContext";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`lg:p-4 border-t shadow-md${
        darkMode ? "bg-slate-900 text-white border-t-slate-800" : "bg-white text-black border-t-grey-200"
        }`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Shree Photo Fashion. All rights
              reserved.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-gray-400"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-400"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-gray-400"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
