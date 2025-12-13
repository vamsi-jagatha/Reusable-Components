const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick = () => {},
  disabled = false,
  type = "button",

  // Custom props
  buttonBg = "",
  buttonTextColor = "",
  afterColor = "",
  fontSize = "",
  fontFamily = "", // ← now treated as a Tailwind class
}) => {
  const baseStyles =
    "relative overflow-hidden inline-flex ease-in-out items-center justify-center rounded-full font-medium transition-all duration-300 cursor-pointer select-none";

  const variants = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    secondary:
      "bg-white text-purple-600 border border-purple-600 hover:bg-purple-50",
    outline: "border border-gray-400 text-gray-200 hover:bg-gray-800",
    ghost: "text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const rippleStyles = `
    after:content-['']
    after:absolute after:inset-0
    after:rounded-full
    after:scale-0
    after:h-64
    after:w-64
    after:bg-[var(--after-color)]
    after:transition-transform after:duration-500 after:ease-out
    hover:after:scale-150
    after:pointer-events-none after:opacity-30
  `;

  const combinedClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${rippleStyles}
    ${fontFamily}            /* ← Tailwind class included */
    ${className}
  `.replace(/\s+/g, " ");

  const style = {
    "--btn-bg": buttonBg || undefined,
    "--btn-text": buttonTextColor || undefined,
    "--after-color": afterColor || "rgba(255,255,255,0.3)",
    backgroundColor: "var(--btn-bg)",
    color: "var(--btn-text)",
    fontSize: fontSize || undefined,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
