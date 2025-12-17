import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const HOVER_DELAY = 150; // ms (intent threshold)

const Faq = ({ question, answer, trigger = "click" }) => {
  const contentRef = useRef(null);
  const hoverTimeout = useRef(null);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const openFaq = () => {
    if (open) return;

    const el = contentRef.current;
    gsap.killTweensOf(el);

    gsap.to(el, {
      height: "auto",
      opacity: 1,
      duration: 0.35,
      ease: "power2.out",
    });

    setOpen(true);
  };

  const closeFaq = () => {
    if (!open) return;

    const el = contentRef.current;
    gsap.killTweensOf(el);

    gsap.to(el, {
      height: 0,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
    });

    setOpen(false);
  };

  const toggleFaq = () => {
    open ? closeFaq() : openFaq();
  };

  const useHover = trigger === "hover" && !isMobile;

  const handleMouseEnter = () => {
    if (!useHover) return;

    hoverTimeout.current = setTimeout(openFaq, HOVER_DELAY);
  };

  const handleMouseLeave = () => {
    if (!useHover) return;

    clearTimeout(hoverTimeout.current);
    closeFaq();
  };

  return (
    <div
      className="border-b border-gray-200 px-4 py-5 sm:px-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={!useHover ? toggleFaq : undefined}
        className="flex w-full cursor-pointer items-start justify-between gap-4 text-left focus:outline-none"
      >
        <span className="text-sm font-medium text-gray-600 sm:text-base md:text-lg">
          {question}
        </span>

        <span
          className={`mt-0.5 text-xl text-gray-500 transition-transform duration-300 sm:text-2xl ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <p className="mt-3 text-sm text-gray-500 leading-relaxed sm:text-base md:text-[15px]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Faq;
