import React from "react";
import DonateButton from "./DonateButton";

function DonateContent() {
  return (
    <div className="text-center bg-white/10 backdrop-blur-md p-10 rounded-xl">
      <h2 className="text-3xl font-semibold mb-4">Support Our Temple</h2>

      <p className="text-gray-200 mb-8 leading-relaxed">
        Your generous donations help us maintain the temple, organize events,
        and continue serving the community. Every contribution makes a
        difference.
      </p>

      <DonateButton />
    </div>
  );
}

export default DonateContent;
