// src/components/FullScreenModal.tsx

"use client";

import React from "react";
import {
  HeartIcon as HeartIconOutline,
  XMarkIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { Artwork } from "../data/artworks";

interface FullScreenModalProps {
  selectedArtwork: Artwork;
  isFavorited: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
  handleDownload: () => void;
  closeFullScreen: () => void;
}

const FullScreenModal: React.FC<FullScreenModalProps> = ({
  selectedArtwork,
  isFavorited,
  toggleFavorite,
  handleDownload,
  closeFullScreen,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 p-4">
      <div className="flex justify-between items-center w-full max-w-4xl px-4 py-3 bg-black bg-opacity-80 rounded-t-lg">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-gray-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
            {selectedArtwork.artistName.charAt(0)}
          </div>
          <div>
            <p className="text-white text-lg font-semibold">
              {selectedArtwork.artistName}
            </p>
            <p className="text-gray-400 text-sm">
              {selectedArtwork.artistHandle}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => toggleFavorite(selectedArtwork.id)}
            className="p-2 rounded-full text-white hover:bg-gray-700 transition-colors duration-200"
            aria-label={
              isFavorited(selectedArtwork.id)
                ? "Таңдаулылардан жою"
                : "Таңдаулыларға қосу"
            }
          >
            {isFavorited(selectedArtwork.id) ? (
              <HeartIconSolid className="h-6 w-6 text-red-500" />
            ) : (
              <HeartIconOutline className="h-6 w-6" />
            )}
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 bg-yellow-500 text-black py-2 px-4 rounded-md font-semibold hover:bg-yellow-600 transition-colors duration-200"
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            <span>Жүктеп алу</span>
          </button>
          <button
            onClick={closeFullScreen}
            className="text-white hover:text-gray-300 focus:outline-none"
            aria-label="Толық экранды суретті жабу"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center w-full max-w-4xl bg-black bg-opacity-80 rounded-b-lg overflow-hidden">
        <img
          src={selectedArtwork.src}
          alt={selectedArtwork.title}
          className="max-w-full max-h-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default FullScreenModal;