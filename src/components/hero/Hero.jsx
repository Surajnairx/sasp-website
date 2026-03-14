import React from "react";
import HeroContent from "./HeroContent";
import temple from "../../assets/hero-bg.jpg";
function Hero() {
  return (
    <section
      className="relative z-10 h-[calc(100vh-64px)] bg-bottom bg-cover flex items-center"
      style={{ backgroundImage: `url(${temple})` }}
    >
      <div className="container-custom w-full">
        <HeroContent />
      </div>

      {/* fog gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/10 to-transparent"></div>
    </section>
  );
}

export default Hero;
