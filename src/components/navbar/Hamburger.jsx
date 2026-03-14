import React, { useRef } from "react";
import NavItem from "./NavItem";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Hamburger({ menuOpen }) {
  const hamRef = useRef(null);
  const menuRef = useRef(null);
  const links = [
    "Home",
    "About",
    "Pooja & Seva",
    "Events",
    "Gallery",
    "Donate",
    "Contact",
  ];
  useGSAP(() => {
    gsap.from(hamRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.from(menuRef.current.children, {
      y: -10,
      opacity: 0,
      stagger: 0.15,
      duration: 0.4,
      ease: "power2.out",
      delay: 0.3,
      filter: "blur(4px)",
    });
  });

  return (
    <div
      ref={hamRef}
      className={`absolute lg:hidden top-full left-0 w-full flex flex-col  py-3 items-center gap-6 font-semibold text-lg bg-amber-800/20 text-orange-900`}
    >
      <ul ref={menuRef}>
        {links.map((link, index) => (
          <NavItem key={index} label={link} />
        ))}
      </ul>
    </div>
  );
}

export default Hamburger;
