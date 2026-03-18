import React, { useRef } from "react";
import ContactInfo from "./ContactInfo";
import MapEmbed from "./MapEmbed";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function ContactSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const el = sectionRef.current;

    // Heading animation
    gsap.from(".contact-heading", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Left side (info)
    gsap.from(".contact-left", {
      x: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 75%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Right side (map)
    gsap.from(".contact-right", {
      x: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 75%",
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" h-screen py-20 bg-[#f8f3ed]"
      id="contact"
    >
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-12 contact-heading">
          <h2 className="text-3xl font-semibold text-[#4b2e1e]">Contact Us</h2>
          <p className="text-gray-600 mt-2">
            We welcome you to visit and experience divine blessings.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="contact-left">
            <ContactInfo />
          </div>

          <div className="contact-right h-full">
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
