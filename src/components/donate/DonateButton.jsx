import React from "react";

function DonateButton() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* Primary Button */}
      <button
        className="bg-white text-[#4b2e1e] px-8 py-3 rounded-md font-medium shadow-lg 
      hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        Donate via UPI
      </button>

      {/* Secondary Button */}
      <button
        className="bg-transparent border border-white text-white px-8 py-3 rounded-md font-medium 
      hover:bg-white hover:text-[#4b2e1e] transition-all duration-300"
      >
        Donate Online
      </button>
    </div>
  );
}

export default DonateButton;
