

import React from "react";

export default function BaseCarouselButton({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 ${
        direction === "left" ? "left-4" : "right-4"
      } bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition`}
    >
      {direction === "left" ? "◀" : "▶"}
    </button>
  );
}