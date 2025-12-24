import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const SplitTextReveal = ({
  text,
  textSize = "clamp(1.5rem, 5vw, 3rem)",
  as: Tag = "h2",
  className = "",
  duration = 0.8,
  stagger = 0.03,
  ease = "power3.out",
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      // Split into characters (spaces included automatically)
      const split = new SplitText(textRef.current, {
        type: "chars",
        charsClass: "split-char",
      });

      // Wrap each char in overflow-hidden span
      split.chars.forEach((char) => {
        const wrapper = document.createElement("span");
        wrapper.style.display = "inline-block";
        wrapper.style.overflow = "hidden";

        char.parentNode.insertBefore(wrapper, char);
        wrapper.appendChild(char);
      });

      gsap.fromTo(
        split.chars,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration,
          ease,

          stagger,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 80%",
            markers: true,
            // toggleActions: "play none none reverse",
            scrub: 3.5,
          },
        }
      );

      return () => {
        split.revert();
      };
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <Tag
        ref={textRef}
        className={`inline-block leading-tight will-change-transform ${textSize} ${className}`}
      >
        {text}
      </Tag>
    </div>
  );
};

export default SplitTextReveal;
