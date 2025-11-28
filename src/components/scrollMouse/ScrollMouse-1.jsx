import React from "react";

const ScrollMouse = ({
  size = "h-9 w-5",
  wheelSize = "h-2 w-1",
  className = "bottom-10",
  borderColor = "border-white",
  wheelColor = "bg-white",
  text = "", // Custom text
  textColor = "text-white", // Text color
  textClassName = "mt-2 text-sm", // Tailwind classes for text styling
}) => {
  return (
    <div className={`w-full absolute ${className} flex flex-col items-center`}>
      <div
        className={`mouse-scroll border-2 ${borderColor} rounded-full ${size} flex justify-center animate-bounce`}
      >
        <div
          className={`wheel ${wheelColor} ${wheelSize} rounded-full mt-2`}
        ></div>
      </div>
      {text && <span className={`${textColor} ${textClassName}`}>{text}</span>}
    </div>
  );
};

export default ScrollMouse;
