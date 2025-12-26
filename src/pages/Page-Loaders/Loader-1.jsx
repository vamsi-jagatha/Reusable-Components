import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

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
  const overlayRef = useRef(null); // now points to the full overlay section
  const counterRef = useRef(null);
  const originalStylesRef = useRef({
    bodyOverflow: "",
    bodyPaddingRight: "",
    docOverflow: "",
  });

  /* 🔒 Lock scroll while loader is mounted */
  useLayoutEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // save original styles so we can restore them later
    originalStylesRef.current = {
      bodyOverflow: document.body.style.overflow || "",
      bodyPaddingRight: document.body.style.paddingRight || "",
      docOverflow: document.documentElement.style.overflow || "",
    };

    // hide vertical scrollbar on body only; only add padding if there's a scrollbar
    // hide scroll on html and body to avoid any extra scrollbar showing
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // make sure the overlay itself doesn't produce its own scrollbar
    if (overlayRef.current) {
      overlayRef.current.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalStylesRef.current.bodyOverflow;
      document.body.style.paddingRight =
        originalStylesRef.current.bodyPaddingRight;
      document.documentElement.style.overflow =
        originalStylesRef.current.docOverflow;
    };
  }, []);

  useGSAP(
    () => {
      // scope .box selection to the overlay so other boxes on the page are unaffected
      const scopedRoot = overlayRef.current;
      const boxes = scopedRoot
        ? gsap.utils.toArray(scopedRoot.querySelectorAll(".box"))
        : gsap.utils.toArray(".box");

      gsap.set(counterRef.current, { opacity: 1 });
      gsap.set(boxes, { height: fromHeight, opacity: 1 });

      const counter = { value: 1 };
      const tl = gsap.timeline();

      // Counter animation
      tl.to(counter, {
        value: 100,
        duration: 1.5,
        ease: "none",
        onUpdate: () => {
          counterRef.current.textContent = `${Math.round(counter.value)}%`;
        },
      });

      // Fade counter
      tl.to(counterRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      // Bars animation
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

      // Fade bars
      tl.to(boxes, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          // hide the full overlay so other page elements are interactive again
          if (overlayRef.current) {
            overlayRef.current.style.display = "none";
            overlayRef.current.style.pointerEvents = "none";
          }
          // restore body scroll immediately when loader completes
          document.body.style.overflow = originalStylesRef.current.bodyOverflow;
          document.body.style.paddingRight =
            originalStylesRef.current.bodyPaddingRight;
          document.documentElement.style.overflow =
            originalStylesRef.current.docOverflow;
        },
      });

      return () => tl.kill();
    },
    { scope: overlayRef }
  );

  const resolveColor = (index) =>
    typeof colors === "string" ? colors : colors[index % colors.length];

  return (
    <section ref={overlayRef} className="fixed inset-0 z-9999">
      <div className="relative w-full h-full">
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
          className="absolute bottom-10 right-10 text-6xl font-bold"
        >
          1%
        </div>
      </div>
    </section>
  );
};

export default Loader;
