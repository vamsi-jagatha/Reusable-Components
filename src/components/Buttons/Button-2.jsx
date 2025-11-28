import React from "react";

const VARIANTS = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 px-6 rounded-md",
  secondary: "bg-gray-700 text-white hover:bg-gray-800 px-6 rounded-md",
  danger: "bg-red-600 text-white hover:bg-red-700 px-6 rounded-md",
  outline:
    "border border-gray-700 text-gray-800 hover:bg-gray-100 px-6 rounded-md",
  ghost: "text-gray-800 hover:bg-gray-100 px-6 rounded-md",
  transparent: "bg-transparent text-white p-0 rounded-none",
  custom: "",
};

const Button = ({
  label = "Button",
  hoverLabel = "Button",
  variant = "primary",
  height = "h-10",
  className = "",
  hoverTextColor = "",
  onClick = () => {},
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "group relative cursor-pointer overflow-hidden transition-colors duration-150 flex items-center justify-center " +
        VARIANTS[variant] +
        " " +
        height +
        " " +
        className
      }
    >
      <span className="block w-full h-full transform transition-transform duration-300 group-hover:-translate-y-full">
        <span
          className={
            "inline-flex items-center justify-center w-full font-semibold " +
            height
          }
        >
          {label}
        </span>

        <span
          className={
            "inline-flex items-center justify-center w-full font-semibold " +
            height +
            " " +
            hoverTextColor
          }
        >
          {hoverLabel}
        </span>
      </span>
    </button>
  );
};

export default Button;
