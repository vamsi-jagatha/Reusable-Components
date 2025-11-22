import React from "react";

/**
 * GradientText Component
 *
 * Renders text with a customizable gradient color background.
 *
 * Props:
 *  - children: Text content
 *  - from: Tailwind gradient "from" color (default: from-blue-500)
 *  - to: Tailwind gradient "to" color (default: to-purple-500)
 *  - direction: Tailwind gradient direction (default: bg-gradient-to-r)
 *  - className: Additional Tailwind classes for sizing or typography
 *
 * Example:
 *  <GradientText from="from-pink-500" to="to-orange-500">
 *     Reusable Components
 *  </GradientText>
 */

const GradientText = ({
  children,
  from = "from-primary-blue",
  to = "to-secondary-gray",
  direction = "bg-gradient-to-r",
  className = "",
}) => {
  return (
    <span
      className={`
        ${direction}
        ${from}
        ${to}
        bg-clip-text
        text-transparent
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default GradientText;
