import Logo from "./Logo";
import NavMenu from "./NavMenu";
import Hamburger from "./Hamburger";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef(null);
  const topLine = useRef(null);
  const middleLine = useRef(null);
  const bottomLine = useRef(null);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: "sine.in",
    });
  });

  // hamburger animation
  useGSAP(() => {
    if (menuOpen) {
      gsap.to(topLine.current, { y: 8, rotate: 45, duration: 0.3 });
      gsap.to(middleLine.current, { opacity: 0, duration: 0.3 });
      gsap.to(bottomLine.current, { y: -8, rotate: -45, duration: 0.3 });
    } else {
      gsap.to(topLine.current, { y: 0, rotate: 0, duration: 0.3 });
      gsap.to(middleLine.current, { opacity: 1, duration: 0.3 });
      gsap.to(bottomLine.current, { y: 0, rotate: 0, duration: 0.3 });
    }
  }, [menuOpen]);

  return (
    <header ref={navRef} className="lg:bg-orange-600 relative bg-red-600">
      <nav className="container-custom flex justify-between items-center py-3 px-6 xl:px-0">
        <Logo />

        <div className="hidden lg:block">
          <NavMenu />
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col gap-1.5 bg-orange-500 px-1.5 py-2 rounded-full"
        >
          <span ref={topLine} className="w-6 h-0.5 bg-white"></span>
          <span ref={middleLine} className="w-6 h-0.5 bg-white"></span>
          <span ref={bottomLine} className="w-6 h-0.5 bg-white"></span>
        </button>
      </nav>

      {menuOpen && <Hamburger />}
    </header>
  );
}

export default Navbar;
