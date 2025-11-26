import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const WordRotate = ({
  words = ["Word", "Rotate", "Animation", "Effect"],
  scrollDuration = 0.6,
  pauseDuration = 2,
  loop = true,
  direction = "up", // NEW: 'up' or 'down'
  className = "",
  textClassName = "",
}) => {
  const containerRef = useRef(null);
  const wordsWrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wordsWrapperRef.current;
    if (!wrapper || words.length === 0) return;

    // reset wrapper
    wrapper.innerHTML = "";

    // always duplicate words for seamless loop
    const allWords = [...words, ...words];
    allWords.forEach((w) => {
      const el = document.createElement("h2");
      el.textContent = w;
      wrapper.appendChild(el);
    });

    const children = wrapper.children;
    const lineHeight = children[0].clientHeight;

    // show only one line
    gsap.set(containerRef.current, { height: lineHeight });

    const total = words.length;
    const tl = gsap.timeline({ repeat: loop ? -1 : 0 });

    for (let i = 0; i < total; i++) {
      const targetIndex = i + 1;

      tl.to(wrapper, {
        y:
          direction === "up"
            ? -lineHeight * targetIndex
            : lineHeight * targetIndex,
        duration: scrollDuration,
        ease: "power2.inOut",
      }).to({}, { duration: pauseDuration });
    }

    // seamless jump to first item without reversing
    tl.to(wrapper, {
      y: 0,
      duration: 0, // instant reset
    });

    return () => tl.kill();
  }, [words, scrollDuration, pauseDuration, loop, direction]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div
        ref={wordsWrapperRef}
        className={`flex flex-col items-center justify-center ${textClassName}`}
      ></div>
    </div>
  );
};

export default WordRotate;
