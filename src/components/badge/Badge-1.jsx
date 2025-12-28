import React from "react";

const Badge = ({
  badgeColor = "bg-white-300",
  textColor = "text-gray-400",
  borderColor = "border-secondary-gray",
  text = "Our Pricing Plans!",
  logoSize = "w-4 h-4",
  logoColor = "text-purple-600",
  logoHoverColor = "hover:text-gray-500",
  animateLogo = true,
}) => {
  return (
    <div
      className={`flex items-center group shadow shadow-secondary-gray max-w-max ${badgeColor} border ${borderColor} ${textColor} py-1 px-3 rounded-4xl  text-sm gap-2`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className={`${logoSize} ${logoColor} group-hover:${logoHoverColor} transition ${
          animateLogo ? "animate-spin" : ""
        }`}
        fill="currentColor"
      >
        <path d="M 152 70.059 L 201.539 20.519 L 235.48 54.461 L 185.941 104 L 256 104 L 256 152 L 185.941 152 L 235.48 201.539 L 201.539 235.48 L 152 185.941 L 152 256 L 104 256 L 104 185.941 L 54.46 235.48 L 20.52 201.539 L 70.059 152 L 0 152 L 0 104 L 70.059 104 L 20.519 54.46 L 54.461 20.52 L 104 70.059 L 104 0 L 152 0 Z"></path>
      </svg>
      <span className="font-mono">{text}</span>
    </div>
  );
};

export default Badge;
