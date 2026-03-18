import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function AboutText() {
  const textRef = useRef(null);

  useGSAP(() => {
    const el = textRef.current;

    gsap.from(el.children, {
      y: 30, // smaller movement (more subtle)
      opacity: 0,
      duration: 1.4, // 🔥 slower
      ease: "power2.out", // smoother than power3
      stagger: 0.3, // more breathing space
      delay: 0.2, // wait for parent animation
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div ref={textRef}>
      <h2 className="text-3xl font-semibold text-[#4b2e1e] mb-4">
        About Our Temple
      </h2>

      <p className="text-gray-700 leading-relaxed mb-8">
        Established in 1985,{" "}
        <span className="font-semibold text-[#7a4a2c]">Shree Temple</span> is a
        beacon of spirituality and devotion. Dedicated to Lord Vishnu, our
        temple serves as a sanctuary for peace and spiritual growth. Join us in
        experiencing divine blessings and cultural heritage.
      </p>
    </div>
  );
}

export default AboutText;
