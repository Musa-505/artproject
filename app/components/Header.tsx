// src/components/Header.tsx

"use client";

import React from "react";
import {
  HeartIcon as HeartIconOutline,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  viewMode: "gallery" | "favorites";
  setViewMode: (mode: "gallery" | "favorites") => void;
}

const Header: React.FC<HeaderProps> = ({
  searchTerm,
  setSearchTerm,
  viewMode,
  setViewMode,
}) => {
  return (
    <header
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "400px",
      }}
    >
      <div className="relative bg-black z-10 flex items-center justify-between p-4 md:p-6 lg:p-8">
        {/* Логотип */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Өнер галереясының логотипі"
            className="w-24"
          />
        </div>
        <button
          onClick={() => {
            setViewMode(viewMode === "gallery" ? "favorites" : "gallery");
            setSearchTerm("");
          }}
          className="hidden md:flex items-center space-x-2 text-white p-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
        >
          <HeartIconOutline className="h-6 w-6" />
          <span>{viewMode === "gallery" ? "Таңдаулылар" : "Галерея"}</span>
        </button>
      </div>
      <div
        className="relative z-10 flex justify-center md:mt-8"
        style={{ top: "80px" }}
      >
        <div className="relative w-11/12 max-w-2xl">
          <input
            type="text"
            placeholder="Іздеу"
            className="w-full py-3 pl-12 pr-4 bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg text-gray-800 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            disabled={viewMode === "favorites"}
          />
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;