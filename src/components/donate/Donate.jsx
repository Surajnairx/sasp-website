import React, { useRef } from "react";
import DonateContent from "./DonateContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function DonateSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const el = sectionRef.current;

    gsap.from(el.children, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
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
      id="donate"
      className=" h-screen py-20 bg-linear-to-r from-[#4b2e1e] to-[#6b3f2a] text-white flex justify-center items-center"
    >
      <div ref={sectionRef} className="container-custom max-w-3xl mx-auto">
        <DonateContent />
      </div>
    </section>
  );
}

export default DonateSection;
