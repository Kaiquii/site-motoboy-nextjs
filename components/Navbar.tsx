"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-yellow-400/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
            <Link href="/" className="flex items-center group">
              <span className="whitespace-nowrap group-hover:text-yellow-400 transition-colors duration-300">
                Chama
              </span>
              <span className="inline-block mx-1 group-hover:scale-110 transition-transform duration-300">
                🔥
              </span>
              <span className="inline-block mx-1 group-hover:text-yellow-400 transition-colors duration-300">
                o
              </span>
              <span className="hidden xs:inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 py-1 px-2 sm:px-3 rounded-lg ml-1 text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap group-hover:from-yellow-400 group-hover:to-orange-400 transition-all duration-300 shadow-lg">
                boy moto frete!
              </span>
              <span className="xs:hidden bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 py-1 px-2 rounded ml-1 text-xs whitespace-nowrap group-hover:from-yellow-400 group-hover:to-orange-400 transition-all duration-300 shadow-lg">
                boy!
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <a
              href="#home"
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#servicos"
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium relative group"
            >
              Serviços
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contato"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold py-2 px-6 rounded-full hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-yellow-400 transition-colors duration-300 p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4 bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 px-4 border border-yellow-400/20">
            <a
              href="#home"
              className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#servicos"
              className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#contato"
              className="block bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold py-3 px-6 rounded-full text-center hover:from-yellow-400 hover:to-orange-400 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
