import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import logo from "../../assets/website-icon.jpeg";

function Logo() {
  const textRef = useRef(null);

  useGSAP(() => {
    const split = new SplitType(textRef.current, { types: "chars" });

    gsap.from(split.chars, {
      y: 20,
      opacity: 0,
      stagger: 0.025,
      duration: 0.4,
      ease: "sin",
      delay: 0.3,
      filter: "blur(4px)",
    });
  });
  return (
    <div className="flex items-center gap-2 pr-10 lg:pr-0">
      <img src={logo} alt="temple logo" className="h-10 w-10 rounded-full" />
      <span
        ref={textRef}
        className="text-white font-semibold text-sm lg:text-lg cursor-pointer shrink-0"
      >
        Shree Ayyappa Seva Parishad, Sangvi
      </span>
    </div>
  );
}

export default Logo;
