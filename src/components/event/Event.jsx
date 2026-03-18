import React, { useRef } from "react";
import EventCard from "./EventCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ramNavami from "../../assets/events/ram-navami.webp";
import krishnaJanmashtami from "../../assets/events/krishna_janmashtami.webp";
import diwali from "../../assets/events/diwali.webp";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    title: "Ram Navami Celebration",
    date: "April 17, 2026",
    desc: "Join us for special pooja and prasadam.",
    img: ramNavami,
  },
  {
    title: "Krishna Janmashtami",
    date: "August 26, 2026",
    desc: "Midnight aarti and bhajans.",
    img: krishnaJanmashtami,
  },
  {
    title: "Diwali Mahotsav",
    date: "November 1, 2026",
    desc: "Festival of lights with grand decorations.",
    img: diwali,
  },
];

function EventsSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const el = sectionRef.current;

    gsap.from(".event-card", {
      y: 60,
      opacity: 0,
      duration: 1,
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
    <section id="events" ref={sectionRef} className="py-20 bg-white h-screen">
      <div className="container-custom">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-[#4b2e1e] mb-10">
          Upcoming Events
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
