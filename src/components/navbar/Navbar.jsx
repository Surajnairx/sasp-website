import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const navRef = useRef(null);
  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: "sine",
    });
  });

  return (
    <header ref={navRef} className="bg-orange-600" id="header">
      <nav className="container-custom px-12 py-3 flex justify-between items-center max-lg:justify-center">
        <Logo />
        <NavMenu />
      </nav>
    </header>
  );
}

export default Navbar;
