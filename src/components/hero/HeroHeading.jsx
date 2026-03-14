import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function HeroHeading() {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".hero-title", {
        y: 300,
        opacity: 0,
        duration: 2.5,
        ease: "power2.out",
      }).from(".hero-subtext", {
        y: 80,
        opacity: 0,
        duration: 1.8,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <h1 className="hero-title text-5xl md:text-6xl font-bold text-[#3B1F0E] leading-tight">
        Welcome to <br />
        <span className="text-[#fe5500]">Shree Temple</span>
      </h1>

      <p className="hero-subtext mt-5 text-lg md:text-xl text-black/80 max-w-lg">
        A Sacred Place of Devotion, Peace and Spirituality.
      </p>
    </div>
  );
}

export default HeroHeading;
