import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Timeline = ({ items = [] }) => {
  const containerRef = useRef(null);
  const descriptionRefs = useRef([]);
  const splitsRef = useRef([]); // keep SplitText instances to revert

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // cleanup any previous splits
      splitsRef.current.forEach((s) => s && s.revert && s.revert());
      splitsRef.current = [];

      descriptionRefs.current.forEach((desc, idx) => {
        if (!desc) return;
        desc.style.overflow = "visible";
        const split = new SplitText(desc, { type: "lines" });
        splitsRef.current.push(split);
        const lines = split.lines;

        // For masking: wrap each line's content in an inner span
        const innerEls = [];
        lines.forEach((lineEl) => {
          // ensure line element clips overflow
          lineEl.style.overflow = "hidden";
          lineEl.style.display = "block";

          // create inner wrapper to animate (inline-block so y translation works)
          const inner = document.createElement("span");
          inner.className = "inner-line";
          inner.style.display = "inline-block";
          // move existing children into inner
          while (lineEl.firstChild) {
            inner.appendChild(lineEl.firstChild);
          }
          lineEl.appendChild(inner);
          innerEls.push(inner);
        });

        gsap.set(innerEls, { y: 40, opacity: 0, force3D: true });

        // Create timeline controlled by a ScrollTrigger with scrub
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: desc,
            start: "top 85%",
            end: "top 20%",
            // scrub: true,
          },
        });

        // animate inner elements into view with stagger
        tl.to(innerEls, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
        });
      });
    }, containerRef);

    return () => {
      // revert gsap.context (kills timelines/scrolltriggers inside)
      ctx.revert();
      // revert SplitText instances (restores original DOM)
      splitsRef.current.forEach((s) => s && s.revert && s.revert());
      splitsRef.current = [];
    };
  }, [items]);

  return (
    <div ref={containerRef} className="flex flex-col space-y-12 mt-0">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-t-3 border-secondary-gray pt-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          {/* Left */}
          <div className="text-4xl font-bold text-purple-800 opacity-80">
            {item.year}
            <div className="text-lg text-gray-500">{item.title}</div>
          </div>

          {/* Right (SplitText target) */}
          <div
            ref={(el) => (descriptionRefs.current[index] = el)}
            className="md:col-span-2 text-xl md:text-2xl leading-relaxed text-gray-700"
          >
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
