import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function HeroButton() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".hero-btn", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 1,
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto"
    >
      <button className="hero-btn w-full sm:w-auto bg-orange-500 text-white px-7 py-3 rounded-lg font-medium shadow-lg">
        View Pooja Schedule
      </button>

      <button className="hero-btn w-full sm:w-auto bg-white text-gray-800 px-7 py-3 rounded-lg font-medium shadow-md border border-gray-200">
        Donate Now
      </button>
    </div>
  );
}

export default HeroButton;
