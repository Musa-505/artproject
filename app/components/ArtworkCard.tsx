// src/components/ArtworkCard.tsx

"use client";

import React from "react";
import { Artwork } from "../data/artworks";
import { handleImageError } from "../utils/helpers";
import Image from "next/image";

interface ArtworkCardProps {
  artwork: Artwork;
  openFullScreen: (artwork: Artwork) => void;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({
  artwork,
  openFullScreen,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <Image
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
