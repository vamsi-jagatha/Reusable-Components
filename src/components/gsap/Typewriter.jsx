import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Typewriter = ({
  text = "",
  speed = 0.05,
  showCursor = true,
  cursorChar = "|",
  className = "",
  triggerStart = "top 80%",
  triggerEnd = "bottom top",
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const measureRef = useRef(null); // hidden measuring element
  const cursorRef = useRef(null);
  const prevIndexRef = useRef(-1);
  const [fixedHeight, setFixedHeight] = useState("auto");

  useLayoutEffect(() => {
    // 1. Measure the final height BEFORE animation
    if (measureRef.current) {
      const h = measureRef.current.offsetHeight;
      setFixedHeight(h + "px");
    }

    // 2. Run typewriter animation
    const el = textRef.current;
    if (!el) return;

    const chars = text.split("");
    el.textContent = "";
    prevIndexRef.current = -1;

    const obj = { i: 0 };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: triggerStart,
        end: triggerEnd,
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            i: chars.length,
            duration: Math.max(0.3, chars.length * speed),
            ease: "none",
            onUpdate: () => {
              const count = Math.floor(obj.i);
              if (count !== prevIndexRef.current) {
                prevIndexRef.current = count;
                el.textContent = chars.slice(0, count).join("");
              }
            },
          });

          if (showCursor && cursorRef.current) {
            gsap.set(cursorRef.current, { opacity: 1 });
            gsap.to(cursorRef.current, {
              opacity: 0,
              repeat: -1,
              yoyo: true,
              duration: 0.6,
              ease: "power1.inOut",
            });
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [text, speed, showCursor, triggerStart, triggerEnd]);

  return (
    <>
      {/* Hidden measurer — determines final height */}
      <span
        ref={measureRef}
        className={
          className +
          " invisible pointer-events-none absolute opacity-0 whitespace-pre-wrap"
        }
      >
        {text}
      </span>

      {/* Actual visible typewriter block with fixed height */}
      <div
        ref={containerRef}
        style={{ height: fixedHeight }}
        className={
          className +
          " inline-block relative whitespace-pre-wrap overflow-hidden"
        }
      >
        <span ref={textRef} />
        {showCursor && (
          <span ref={cursorRef} className="inline-block ml-1">
            {cursorChar}
          </span>
        )}
      </div>
    </>
  );
};

export default Typewriter;
