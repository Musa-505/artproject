// src/hooks/useScrollVisibility.ts

"use client";

import { useState, useEffect } from "react";

export const useScrollVisibility = (threshold: number = 300) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return showScrollButton;
};