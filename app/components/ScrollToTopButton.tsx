// src/components/ScrollToTopButton.tsx

"use client";

import React from "react";

interface ScrollToTopButtonProps {
  show: boolean;
  onClick: () => void;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  show,
  onClick,
}) => {
  if (!show) return null;
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 bg-white rounded-full shadow-lg p-3 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 z-30"
      aria-label="Жоғарыға айналдыру"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-gray-700"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;