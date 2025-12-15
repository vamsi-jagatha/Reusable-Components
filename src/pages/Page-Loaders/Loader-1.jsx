import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// 🔒 Scroll helpers
const lockScroll = () => {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = `${scrollbarWidth}px`;
};

const unlockScroll = () => {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
};

const Loader = ({
  count = 6,
  colors = ["#000"],
  duration = 1,
  stagger = 0.2,
  repeat = 0,
  repeatDelay = 0,
  fromHeight = "100vh",
  toHeight = "0vh",
  yoyo = false,
}) => {
  const containerRef = useRef(null);
  const counterRef = useRef(null);

  /**
   * 🔥 THIS IS THE CRITICAL PART
   * Locks scroll BEFORE the browser paints
   */
  useLayoutEffect(() => {
    lockScroll();
    return () => unlockScroll();
  }, []);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");

      // Reset visual state
      gsap.set(counterRef.current, { opacity: 1 });
      gsap.set(boxes, { height: fromHeight, opacity: 1 });

      const tl = gsap.timeline({
        onComplete: () => {
          // 🔓 Unlock scroll ONLY after loader is fully done
          unlockScroll();
        },
      });

      // 1️⃣ Counter: 1 → 100
      const counter = { value: 1 };

      tl.to(counter, {
        value: 100,
        duration: 1.5,
        ease: "none",
        onUpdate: () => {
          counterRef.current.textContent = `${Math.round(counter.value)}%`;
        },
      });

      // 2️⃣ Fade counter
      tl.to(counterRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      // 3️⃣ Loader bars animation
      tl.fromTo(
        boxes,
        { height: fromHeight },
        {
          height: toHeight,
          duration,
          ease: "power2.inOut",
          stagger,
          repeat,
          repeatDelay,
          yoyo,
        }
      );

      // 4️⃣ Fade bars
      tl.to(boxes, {
        opacity: 0,
        duration: 0.3,
      });

      return () => tl.kill();
    },
    { scope: containerRef }
  );

  const resolveColor = (index) => {
    if (typeof colors === "string") return colors;
    return colors[index % colors.length];
  };

  return (
    <section className="fixed inset-0 z-9999 ">
      <div ref={containerRef} className="relative w-full h-full">
        {/* Loader bars */}
        <div className="absolute inset-0 flex">
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className="box flex-1"
              style={{ backgroundColor: resolveColor(i) }}
            />
          ))}
        </div>

        {/* Counter */}
        <div
          ref={counterRef}
          className="absolute z-0 bottom-10 right-10 text-6xl font-bold"
        >
          1%
        </div>
      </div>
    </section>
  );
};

export default Loader;
