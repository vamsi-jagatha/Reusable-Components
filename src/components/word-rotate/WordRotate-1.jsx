import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const WordRotate = ({
  words = ["Word", "Rotate", "Animation", "Effect"],
  scrollDuration = 0.6,
  pauseDuration = 2,
  loop = true,
  direction = "up",
  className = "",
  textClassName = "",
}) => {
  const containerRef = useRef(null);
  const wordsWrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = wordsWrapperRef.current;
      if (!wrapper || words.length === 0) return;

      wrapper.innerHTML = "";

      // Duplicate words for seamless infinite loop
      const allWords = [...words, ...words];
      allWords.forEach((w) => {
        const el = document.createElement("span");
        el.style.display = "block";
        el.style.lineHeight = "1";
        el.style.margin = "0";
        el.textContent = w;
        wrapper.appendChild(el);
      });

      // Force layout before GSAP measurements
      const first = wrapper.children[0];
      if (!first) return;

      const lineHeight = first.getBoundingClientRect().height;

      gsap.set(containerRef.current, { height: lineHeight });

      const total = words.length;
      const tl = gsap.timeline({ repeat: loop ? -1 : 0 });

      for (let i = 0; i < total; i++) {
        const y =
          direction === "up" ? -lineHeight * (i + 1) : lineHeight * (i + 1);

        tl.to(wrapper, {
          y,
          duration: scrollDuration,
          ease: "power2.inOut",
        }).to({}, { duration: pauseDuration });
      }

      // instant reset
      tl.to(wrapper, { y: 0, duration: 0 });
    });

    return () => ctx.revert();
  }, [words, scrollDuration, pauseDuration, loop, direction]);

  return (
    <span
      style={{
        display: "inline-block",
        verticalAlign: "baseline",
      }}
      className={className}
    >
      <span
        ref={containerRef}
        style={{
          display: "inline-block",
          verticalAlign: "baseline",
          lineHeight: 1, // IMPORTANT
        }}
        className="overflow-hidden"
      >
        <span
          ref={wordsWrapperRef}
          className={`flex flex-col items-center justify-center ${textClassName}`}
          style={{ lineHeight: 1 }} // IMPORTANT
        ></span>
      </span>
    </span>
  );
};

export default WordRotate;
