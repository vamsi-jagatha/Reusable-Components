import React from "react";

const GradientBg = ({
  direction = "bg-gradient-to-r",
  colors = ["from-indigo-500", "to-purple-500"],
  blur = "blur-xl",
  opacity = "opacity-60",
  width = "w-full",
  height = "h-[100px]",
  position = "bottom-0 left-0",
  shape = "circle", // circle | square | rectangle | line | curve
  className = "",
}) => {
  const gradientClasses = [
    direction,
    ...colors,
    blur,
    opacity,
    width,
    height,
    "absolute pointer-events-none",
    position,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const renderShape = () => {
    if (shape === "circle")
      return <div className={`${gradientClasses} rounded-full`} />;
    if (shape === "square")
      return <div className={`${gradientClasses} rounded-none`} />;
    if (shape === "rectangle")
      return <div className={`${gradientClasses} rounded-lg`} />;
    if (shape === "line")
      return <div className={`${gradientClasses} h-1 rounded-full`} />;

    // --- FIXED CURVE SHAPE (NOW REAL GRADIENT + BEND) ---
    if (shape === "curve") {
      return (
        <svg
          className={`${position} absolute pointer-events-none ${width} ${height}`}
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="curveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--start)" />
              <stop offset="100%" stopColor="var(--end)" />
            </linearGradient>
          </defs>

          <path
            d="M0,100 C300,200 900,0 1440,100 L1440,200 L0,200 Z"
            className={`${blur} ${opacity}`}
            fill="url(#curveGradient)"
            style={{
              "--start": "rgba(99,102,241,1)", // from-indigo-500 mapped
              "--end": "rgba(168,85,247,1)", // to-purple-500 mapped
            }}
          />
        </svg>
      );
    }

    return <div className={`${gradientClasses} rounded-full`} />;
  };

  return renderShape();
};

export default GradientBg;
