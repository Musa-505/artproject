// src/components/ArtworkCard.tsx

"use client";

import React from "react";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { Artwork } from "../data/artworks";
import { handleImageError } from "../utils/helpers";

interface ArtworkCardProps {
  artwork: Artwork;
  openFullScreen: (artwork: Artwork) => void;
  toggleFavorite: (id: string) => void;
  isFavorited: (id: string) => boolean;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({
  artwork,
  openFullScreen,
  toggleFavorite,
  isFavorited,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img
        src={artwork.src}
        alt={artwork.title}
        className="w-full object-cover rounded-t-lg"
        style={{ height: "450px", cursor: "pointer" }}
        onError={handleImageError}
        onClick={() => openFullScreen(artwork)}
      />
    </div>
  );
};

export default ArtworkCard;