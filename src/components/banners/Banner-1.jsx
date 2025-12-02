import React from "react";

const Banner = ({
  height = "h-24",

  // banner container position
  bannerPosition = "", // ex: "top-0 left-0 fixed", "mt-4", "sticky top-0"

  // gradient settings
  gradientSize = "w-64 h-64",
  gradientColors = ["#6366f1", "#a855f7"],
  gradientBlur = "blur-3xl",
  gradientOpacity = "opacity-60",

  // gradient position
  gradientPositionX = "",
  gradientPositionY = "",
  gradientTranslateX = "",
  gradientTranslateY = "",

  children,
}) => {
  const gradientClasses = [
    "absolute rounded-full pointer-events-none",
    gradientSize,
    gradientBlur,
    gradientOpacity,
    gradientPositionX,
    gradientPositionY,
    gradientTranslateX,
    gradientTranslateY,
    "transform",
  ]
    .filter(Boolean)
    .join(" ");

  const gradientString = `radial-gradient(circle, ${gradientColors.join(
    ", "
  )})`;

  return (
    <header
      className={` w-full flex items-center justify-center overflow-hidden ${height} ${bannerPosition}`}
    >
      <div
        className={gradientClasses}
        style={{ background: gradientString }}
      ></div>

      <p className="text-md text-center z-40 px-4 font-medium text-white">
        {children}
      </p>
    </header>
  );
};

export default Banner;
