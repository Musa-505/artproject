// src/app/page.tsx

"use client";

import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import ArtworkGrid from "./components/ArtworkGrid";
import FullScreenModal from "./components/FullScreenModal";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { useScrollVisibility } from "./hooks/useScrollVisibility";
import { artworks } from "./data/artworks";
import { Artwork } from "./data/artworks";

const ArtGalleryApp: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const showScrollButton = useScrollVisibility();
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const savedFavorites = localStorage.getItem("artGalleryFavorites");
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    }
    return [];
  });
  const [viewMode, setViewMode] = useState<"gallery" | "favorites">("gallery");

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("artGalleryFavorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const openFullScreen = useCallback((artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setShowFullScreen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeFullScreen = useCallback(() => {
    setSelectedArtwork(null);
    setShowFullScreen(false);
    document.body.style.overflow = "unset";
  }, []);

  const toggleFavorite = useCallback((artworkId: string) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(artworkId)) {
        return prevFavorites.filter((id) => id !== artworkId);
      } else {
        return [...prevFavorites, artworkId];
      }
    });
  }, []);

  const isFavorited = useCallback(
    (artworkId: string) => {
      return favorites.includes(artworkId);
    },
    [favorites]
  );

  const handleDownload = useCallback(() => {
    if (selectedArtwork) {
      const link = document.createElement("a");
      link.href = selectedArtwork.src;
      const filename =
        selectedArtwork.src.substring(
          selectedArtwork.src.lastIndexOf("/") + 1
        ) || "download";
      link.download = `${selectedArtwork.title.replace(
        /\s/g,
        "_"
      )}_${filename}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [selectedArtwork]);

  const allFilteredArtworks = artworks.filter(
    (artwork) =>
      artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.artistName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.artistHandle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedArtworks =
    viewMode === "favorites"
      ? allFilteredArtworks.filter((artwork) => isFavorited(artwork.id))
      : allFilteredArtworks;

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <ArtworkGrid
        displayedArtworks={displayedArtworks}
        openFullScreen={openFullScreen}
        toggleFavorite={toggleFavorite}
        isFavorited={isFavorited}
        viewMode={viewMode}
      />

      <ScrollToTopButton show={showScrollButton} onClick={scrollToTop} />

      {selectedArtwork && showFullScreen && (
        <FullScreenModal
          selectedArtwork={selectedArtwork}
          isFavorited={isFavorited}
          toggleFavorite={toggleFavorite}
          handleDownload={handleDownload}
          closeFullScreen={closeFullScreen}
        />
      )}
    </div>
  );
};

export default ArtGalleryApp;