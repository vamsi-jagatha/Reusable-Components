import React from "react";

/**
 * Button Component
 *
 * A reusable and customizable button that supports multiple visual variants.
 *
 * Props:
 *  - children: The content inside the button (text, icons, etc.)
 *  - variant: Defines the visual style of the button.
 *             Supported values: "primary", "outline"
 *             Default: "primary"
 *  - className: Additional Tailwind classes for custom styling (optional)
 *  - ...props: Additional button attributes (onClick, disabled, type, etc.)
 *
 * Variants:
 *  - primary: Solid button with brand color and hover transition
 *  - outline: Border-style button with subtle hover background
 *
 * Usage Example:
 *  <Button variant="primary">Submit</Button>
 *  <Button variant="outline" className="mt-4">Learn More</Button>
 */

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-8 py-3 font-semibold rounded-md cursor-pointer transition-all duration-300";

  const variants = {
    primary: "bg-primary-blue text-white shadow-md hover:bg-secondary-blue",
    outline:
      "border border-primary-white text-tertiary-gray hover:text-primary-dark hover:bg-secondary-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
