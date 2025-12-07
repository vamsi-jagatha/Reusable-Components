// components/Header/NavButton.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const NavButton = ({ open, setOpen }) => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .to(line1Ref.current, {
        y: 6,
        rotation: 240,
        width: 20,
        duration: 0.25,
        ease: "power2.inOut",
      })

      .to(
        line2Ref.current,
        {
          y: -6,
          rotation: -240,
          width: 20,
          duration: 0.25,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    if (open) tl.current.play();
    else tl.current.reverse();
  }, [open]);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="md:hidden focus:outline-none cursor-pointer relative w-7 h-6 flex flex-col justify-center"
    >
      <div
        ref={line1Ref}
        className="absolute top-0 w-7 h-1 bg-white rounded"
      ></div>

      <div
        ref={line2Ref}
        className="absolute top-3 w-7 h-1 bg-white rounded"
      ></div>
    </button>
  );
};

export default NavButton;
