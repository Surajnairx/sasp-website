import React from "react";

function GalleryItem({ img }) {
  return (
    <div className="gallery-item overflow-hidden rounded-lg group cursor-pointer">
      <img
        src={img}
        alt="Gallery"
        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
    </div>
  );
}

export default GalleryItem;
