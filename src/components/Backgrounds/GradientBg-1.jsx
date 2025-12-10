import React from "react";

const GradientBg = ({
  position = "top-right",
  size = 350,
  blur = "blur-3xl",
  colors = ["#3b82f6", "#1d4ed8"],
  direction = "to bottom right",
  className = "",
}) => {
  // Predefined position shortcuts
  const predefined = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  const positionClass = predefined[position] || position;

  const bgStyle =
    colors.length === 1
      ? { backgroundColor: colors[0] }
      : {
          backgroundImage: `linear-gradient(${direction}, ${colors.join(
            ", "
          )})`,
        };

  return (
    <div
      className={`absolute pointer-events-none ${positionClass} ${className}`}
    >
      <div
        className={`rounded-full ${blur}`}
        style={{
          width: size,
          height: size,
          ...bgStyle,
        }}
      ></div>
    </div>
  );
};

export default GradientBg;
