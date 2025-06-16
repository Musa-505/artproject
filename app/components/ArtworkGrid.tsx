// src/components/ArtworkGrid.tsx

"use client";

import React from "react";
import ArtworkCard from "./ArtworkCard";
import { Artwork } from "../data/artworks";

interface ArtworkGridProps {
  displayedArtworks: Artwork[];
  openFullScreen: (artwork: Artwork) => void;
  viewMode: "gallery" | "favorites";
}

const ArtworkGrid: React.FC<ArtworkGridProps> = ({
  displayedArtworks,
  openFullScreen,
  viewMode,
}) => {
  return (
    <main className="container mx-auto p-4 md:p-8 lg:p-12 mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {viewMode === "gallery"
          ? "Барлық өнер туындылары"
          : "Таңдаулы өнер туындылары"}
      </h2>
      {displayedArtworks.length === 0 && (
        <p className="text-gray-600 text-center">
          {viewMode === "favorites"
            ? "Сізде әлі таңдаулы өнер туындылары жоқ."
            : "Сіздің сұрауыңыз бойынша ештеңе табылмады."}
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {displayedArtworks.map((artwork) => (
          <ArtworkCard
            key={artwork.id}
            artwork={artwork}
            openFullScreen={openFullScreen}
          />
        ))}
      </div>
    </main>
  );
};

export default ArtworkGrid;
