import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const schedule = [
  ["5:30 AM", "Suprabhatam", "Abhishekam"],
  ["7:00 AM", "Abhishekam", "Maha Aarti"],
  ["12:00 PM", "Maha Aarti", "Evening Aarti"],
];

function PoojaSchedule() {
  const cardRef = useRef(null);

  useGSAP(() => {
    const el = cardRef.current;

    gsap.from(el, {
      y: 40,
      opacity: 0,
      scale: 0.96, // 🔥 subtle scale for card feel
      duration: 1.2, // slower than parent
      ease: "power2.out",
      delay: 0.4, // comes AFTER text
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play reverse play reverse",
      },
    });

    // 🔥 Optional: stagger rows inside
    gsap.from(".schedule-row", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      delay: 0.6,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-[#f3eae2] border border-[#e5d6c8] rounded-md p-6"
    >
      <h3 className="text-lg font-semibold text-[#4b2e1e] mb-4">
        Daily Pooja Schedule
      </h3>

      <div className="text-sm text-gray-700 space-y-3">
        {schedule.map((item, i) => (
          <div
            key={i}
            className="schedule-row grid grid-cols-3 border-b last:border-none pb-2"
          >
            <span>{item[0]}</span>
            <span className="text-center">{item[1]}</span>
            <span className="text-right">{item[2]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PoojaSchedule;
