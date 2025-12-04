import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  rounded = "md",
  icon = null,
  hoverIcon = null,
  iconPosition = "right",
  disabled = false,
  className = "",
  bgColor = "bg-purple-600",
  hoverColor = "hover:bg-purple-700",
  activeColor = "active:bg-purple-800",
  textColor = "text-white",
  borderColor = "border-purple-500",
}) => {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-[0.97] group";

  const roundedClasses =
    rounded === "none"
      ? "rounded-none"
      : rounded === "sm"
      ? "rounded-sm"
      : rounded === "lg"
      ? "rounded-lg"
      : rounded === "full"
      ? "rounded-full"
      : "rounded-md";

  const sizeClasses =
    size === "sm"
      ? "px-3 py-1.5 text-sm"
      : size === "lg"
      ? "px-5 py-3 text-lg"
      : size === "icon"
      ? "p-2 text-base"
      : "px-4 py-2 text-base";

  let variantClasses = "";

  if (variant === "outline") {
    variantClasses = `
      border ${borderColor}
      text-purple-600
      hover:bg-purple-50
      shadow-sm
    `;
  } else if (variant === "ghost") {
    variantClasses = `
      text-purple-600
      hover:bg-purple-100/40
      hover:text-purple-700
    `;
  } else {
    variantClasses = `
      ${bgColor}
      ${hoverColor}
      ${activeColor}
      ${textColor}
      shadow-md
    `;
  }

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const IconGroup = (
    <span
      className="
        relative w-8 h-8 overflow-hidden 
        inline-flex items-center justify-center
        bg-black text-white rounded-full
      "
    >
      {/* default icon */}
      <span
        className="
          absolute inset-0 flex items-center justify-center
          transition-all duration-300
          group-hover:translate-x-[150%]
        "
      >
        {icon}
      </span>

      {/* hover icon */}
      <span
        className="
          absolute inset-0 flex items-center justify-center
          translate-x-[-150%]
          transition-all duration-300
          group-hover:translate-x-0
        "
      >
        {hoverIcon}
      </span>
    </span>
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${base} 
        ${roundedClasses} 
        ${sizeClasses} 
        ${variantClasses} 
        ${disabledClasses} 
        ${className}
      `}
    >
      <span className="flex items-center justify-center gap-3">
        {icon && iconPosition === "left" && IconGroup}
        {children}
        {icon && iconPosition === "right" && IconGroup}
      </span>
    </button>
  );
};

export default Button;
