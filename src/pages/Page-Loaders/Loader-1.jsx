import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// Usage:
// <Loader />
// <Loader count={4} />
// <Loader count={4} colors={["#000", "#fff"]} />
// <Loader count={4} colors={["#000", "#fff"]} duration={2} />
// <Loader count={4} colors={["#000", "#fff"]} duration={2} stagger={0.2} />
// <Loader count={4} colors={["#000", "#fff"]} duration={2} stagger={0.2} repeatDelay={2} />
// <Loader count={4} colors={["#000", "#fff"]} duration={2} stagger={0.2} repeatDelay={2} fromHeight="100vh" toHeight="0vh" />
// <Loader count={4} colors={["#000", "#fff"]} duration={2} stagger={0.2} repeatDelay={2} fromHeight="100vh" toHeight="0vh" yoyo={false} />

const Loader = ({
  count = 6,
  colors = ["#000"], // array of colors OR single color string
  duration = 1,
  stagger = 0.2,
  repeatDelay = 0,
  repeat = 0,
  fromHeight = "100vh",
  toHeight = "0vh",
  yoyo = false,
}) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".box");

      gsap.fromTo(
        items,
        { height: fromHeight },
        {
          height: toHeight,
          duration,
          ease: "power2.inOut",
          stagger,
          repeat: repeat,
          repeatDelay,
          yoyo,
        }
      );
    },
    { scope: containerRef }
  );

  const resolveColor = (index) => {
    if (typeof colors === "string") return colors; // constant color
    if (Array.isArray(colors) && colors.length > 0)
      return colors[index % colors.length]; // cycle through colors
    return "#000"; // fallback color
  };

  return (
    <section className="min-h-screen flex">
      <div ref={containerRef} className="loader-grid flex w-full">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="box flex-1"
            style={{ backgroundColor: resolveColor(i) }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Loader;
