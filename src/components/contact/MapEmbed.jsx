import React from "react";

function MapEmbed() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden shadow-md">
      <iframe
        title="Temple Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.100497768607!2d73.82012128829956!3d18.56950739425148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf4c7b280d0f%3A0x6894aa7c5c072219!2sShree%20Ayyappa%20Swami%20Temple!5e0!3m2!1sen!2sin!4v1773843078758!5m2!1sen!2sin"
        className="w-full h-full"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default MapEmbed;
