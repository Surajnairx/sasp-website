import React, { useRef } from "react";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const el = sectionRef.current;

    // Image animation (left → right)
    gsap.from(".about-image", {
      x: -100,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 30%",
      },
    });

    gsap.from(".about-content", {
      x: 100,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 30%",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-[#f8f3ed] py-20 h-screen"
    >
      <div className="container-custom">
        <div className="border-t border-gray-300/40 mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="about-image">
            <AboutImage />
          </div>

          <div className="about-content">
            <AboutContent />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
