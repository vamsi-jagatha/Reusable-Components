import React from "react";

/**
 * ShimmerText Component
 *
 * Renders text with a configurable shimmer. Pass `colors` and `duration`
 * to customize the gradient and animation length.
 *
 * Props:
 *  - children: Text content
 *  - className: Additional classes for text styling (size, weight, etc.)
 *  - colors: Array of color stops OR a comma-separated string (default: ["#ffffff","#5E5E5E","#ffffff"]).
 *  - duration: Number of seconds for one shimmer loop (default: 5).
 *
 * Usage:
 *  <ShimmerText className="text-5xl font-bold" colors={["#fff","#aaa","#fff"]} duration={4}>
 *    Modern Components
 *  </ShimmerText>
 */

const ShimmerText = ({
  children,
  className = "",
  colors = ["#ffffff", "#5E5E5E", "#ffffff"],
  duration = 5,
  direction = "110deg",
  textColor = null,
  gradient = true,
}) => {
  const colorsString = Array.isArray(colors) ? colors.join(", ") : colors;

  // If gradient is disabled, render simple colored text.
  if (!gradient) {
    const plainStyle = { color: textColor || undefined };
    return (
      <span className={`relative inline-block ${className}`} style={plainStyle}>
        {children}
      </span>
    );
  }

  const style = {
    "--shimmer-colors": colorsString,
    "--shimmer-duration": `${duration}s`,
    "--shimmer-direction": direction,
    "--shimmer-fallback": textColor || "transparent",
  };

  return (
    <span className={`relative inline-block ${className}`} style={style}>
      <span className="shimmer-text">{children}</span>
    </span>
  );
};

export default ShimmerText;
