import { ArrowRight, ArrowUpRight, Check, Mail } from "lucide-react";

const ICONS = {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
};

const Button = ({
  children,
  className = "",
  textColor = "text-white",
  textSize = "text-xl",
  icon = null,
  iconPosition = "right",
  fontFamily = "",
  iconSize = 18,
  underlineColor = "rgb(120,120,120)",
  hoverColor = "blue",
}) => {
  const IconComponent = typeof icon === "string" ? ICONS[icon] : icon;

  return (
    <button
      className={`
        group
        bg-transparent
        py-1
        cursor-pointer
        flex items-center gap-2
        transition-all duration-300
        ${textColor}
        ${fontFamily}
        ${textSize}
        ${className}
      `}
    >
      {IconComponent && iconPosition === "left" && (
        <IconComponent size={iconSize} />
      )}

      {/* underline wrapper */}
      <span
        className="relative inline-block pb-0.5 border-b-2"
        style={{ borderColor: underlineColor }}
      >
        {children}

        {/* animated underline ON HOVER */}
        <span
          className="
            absolute left-0 -bottom-0.5 
            h-0.5 w-0 
            transition-all duration-300 
            group-hover:w-full
          "
          style={{ backgroundColor: hoverColor }}
        />
      </span>

      {IconComponent && iconPosition === "right" && (
        <IconComponent size={iconSize} />
      )}
    </button>
  );
};

export default Button;
