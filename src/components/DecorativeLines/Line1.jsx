import React from "react";

/**
 * Line - animated sliding line
 *
 * Props:
 *  - width: container width (Tailwind width class) e.g. "w-32", "w-48", "w-full"
 *  - innerWidth: width of the sliding bar (Tailwind width class) e.g. "w-1/2"
 *  - height: height class for both container and bar (e.g. "h-1", "h-2")
 *  - background: container background class (e.g. "bg-secondary-gray")
 *  - color: sliding bar color class (e.g. "bg-primary-blue")
 *  - direction: "ltr" | "rtl"
 *  - className: extra classes for container
 */
const Line = ({
  width = "w-32",
  innerWidth = "w-full",
  height = "h-1",
  background = "bg-secondary-gray",
  color = "bg-primary-blue",
  direction = "ltr",
  className = "",
}) => {
  const rtlClass = direction === "rtl" ? "animate-slide-line-reverse" : "";

  return (
    <div
      className={`relative overflow-hidden rounded-full mt-12 ${width} ${height} ${background} ${className}`}
      aria-hidden="true"
    >
      <div
        className={`absolute top-0 ${height} ${innerWidth} ${color} animate-slide-line ${rtlClass}`}
        style={{ willChange: "transform" }}
      />
    </div>
  );
};

export default Line;
