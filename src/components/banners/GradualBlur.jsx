import React from "react";

const GradualBlur = ({
  position = "bottom",
  size = "6rem",
  strength = 40, // MUST be strong for spreading blur
  fadeStrength = 1, // controls fade opacity
  className = "",
  baseColor = "#0f0f0f",
}) => {
  const direction = {
    top: "to bottom",
    bottom: "to top",
    left: "to right",
    right: "to left",
  }[position];

  const isVertical = position === "top" || position === "bottom";

  // Convert hex to rgb
  const hexToRgb = (hex) => {
    const val = hex.replace("#", "");
    return {
      r: parseInt(val.substring(0, 2), 16),
      g: parseInt(val.substring(2, 4), 16),
      b: parseInt(val.substring(4, 6), 16),
    };
  };

  const { r, g, b } = hexToRgb(baseColor);

  const style = {
    position: "fixed",
    pointerEvents: "none",
    zIndex: 50,

    height: isVertical ? size : "100%",
    width: !isVertical ? size : "100%",

    top: position === "top" ? 0 : "auto",
    bottom: position === "bottom" ? 0 : "auto",
    left: position === "left" ? 0 : "auto",
    right: position === "right" ? 0 : "auto",

    // REAL blur effect — stays active, spreads text blur
    backdropFilter: `blur(${strength}px)`,
    WebkitBackdropFilter: `blur(${strength}px)`,

    // IMPORTANT: Fade only, no opaque layering
    background: `
      linear-gradient(
        ${direction},
        rgba(${r}, ${g}, ${b}, 0) 0%,            /* pure blur */
        rgba(${r}, ${g}, ${b}, ${0.1 * fadeStrength}) 0%,  
        rgba(${r}, ${g}, ${b}, ${0.35 * fadeStrength}) 60%,
        rgba(${r}, ${g}, ${b}, ${0.85 * fadeStrength}) 100% /* dark fade */
      )
    `,

    mixBlendMode: "normal",
  };

  return <div className={className} style={style} />;
};

export default GradualBlur;
