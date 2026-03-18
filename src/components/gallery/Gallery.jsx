import React, { useRef } from "react";
import GalleryItem from "./GalleryItem";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// import images
import img1 from "../../assets/gallery/1.webp";
import img2 from "../../assets/gallery/2.webp";
import img3 from "../../assets/gallery/3.webp";

const images = [img1, img2, img3];

function GallerySection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const el = sectionRef.current;

    gsap.from(".gallery-item", {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="h-screen py-20 bg-[#f8f3ed]"
    >
      <div className="container-custom">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-[#4b2e1e] mb-10">
          Temple Gallery
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <GalleryItem key={i} img={img} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
