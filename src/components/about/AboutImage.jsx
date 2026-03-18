import React, { useRef } from "react";
import templeInside from "../../assets/Ayyappan Sastha.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function AboutImage() {
  const imgRef = useRef(null);

  useGSAP(() => {
    const el = imgRef.current;

    gsap.from(el, {
      x: -80,
      opacity: 0,
      scale: 1.05, // 🔥 slight zoom-in
      duration: 1.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <div ref={imgRef}>
      <img
        src={templeInside}
        alt="Temple Idol"
        className="w-full rounded-md shadow-md object-cover"
      />
    </div>
  );
}

export default AboutImage;
