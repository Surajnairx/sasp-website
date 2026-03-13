import { useRef } from "react";
import NavItem from "./NavItem";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function NavMenu() {
  const menuRef = useRef();
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
    <ul ref={menuRef} className=" lg:flex gap-6 text-white font-medium hidden">
      {links.map((link, index) => (
        <NavItem key={index} label={link} />
      ))}
    </ul>
  );
}

export default NavMenu;
