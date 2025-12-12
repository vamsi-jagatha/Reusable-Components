import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const QuickActionButton = ({
  size = 128, // controls both height & width
  topLabel = "Make a Call",
  bottomLabel = "Make a Call",
  topBg = "bg-purple-700",
  bottomBg = "bg-white",
  topTextColor = "text-white",
  bottomTextColor = "text-purple-600",
  textSize = "text-2xl",
  easing = "elastic.out(1, 0.4)",
  duration = 1.6,
  position = { bottom: "24px", right: "24px" },
}) => {
  const containerRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    const top = topRef.current;
    const bottom = bottomRef.current;

    // Reset dynamic positions based on the size prop
    gsap.set(top, { y: 0 });
    gsap.set(bottom, { y: size });

    const hoverIn = () => {
      gsap.to(top, {
        y: -size,
        duration,
        ease: easing,
      });

      gsap.to(bottom, {
        y: 0,
        duration,
        ease: easing,
      });
    };

    const hoverOut = () => {
      gsap.to(top, {
        y: 0,
        duration,
        ease: easing,
      });

      gsap.to(bottom, {
        y: size,
        duration,
        ease: easing,
      });
    };

    el.addEventListener("mouseenter", hoverIn);
    el.addEventListener("mouseleave", hoverOut);

    return () => {
      el.removeEventListener("mouseenter", hoverIn);
      el.removeEventListener("mouseleave", hoverOut);
    };
  }, [size, duration, easing]);

  return (
    <div
      ref={containerRef}
      className="
        fixed z-50
        rounded-full
        overflow-hidden
        bg-white
        cursor-pointer
        shadow-xl
      "
      style={{
        width: size,
        height: size,
        touchAction: "none",
        bottom: position.bottom,
        right: position.right,
        left: position.left,
        top: position.top,
      }}
    >
      {/* TOP (default visible) */}
      <div
        ref={topRef}
        className={`
          flex items-center justify-center
          absolute top-0 left-0
          rounded-full
          w-full h-full
          ${topBg} ${topTextColor} ${textSize} font-ragnear font-semibold
        `}
      >
        {topLabel}
      </div>

      {/* BOTTOM (enters from below) */}
      <div
        ref={bottomRef}
        className={`
          flex items-center justify-center
          absolute top-0 left-0
          rounded-full
          w-full h-full
          ${bottomBg} ${bottomTextColor} ${textSize} font-ragnear font-semibold
        `}
      >
        {bottomLabel}
      </div>
    </div>
  );
};

export default QuickActionButton;
