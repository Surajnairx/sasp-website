import React from "react";
import HeroContent from "./HeroContent";
import temple from "../../assets/hero-bg.jpg";
function Hero() {
  return (
    <section
      className="relative z-10 h-[calc(100vh-64px)] bg-bottom bg-cover flex items-center"
      style={{ backgroundImage: `url(${temple})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container-custom w-full">
        <HeroContent />
      </div>

      {/* fog gradient */}
    </section>
  );
}

export default Hero;
