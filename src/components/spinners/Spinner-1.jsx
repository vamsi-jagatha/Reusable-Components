import React from "react";
import {
  LoaderCircle,
  LoaderPinwheel,
  Loader,
  Disc3,
  Hourglass,
} from "lucide-react";

const iconMap = {
  circle: LoaderCircle,
  pinwheel: LoaderPinwheel,
  shell: Loader, // Lucide's general loader (closest to shell)
  disc: Disc3,
  hourglass: Hourglass,
};

const Spinner = ({
  variant = "circle",
  size = 48,
  color = "blue-600",
  pause = 0, // milliseconds
  className = "",
}) => {
  const Icon = iconMap[variant] || LoaderCircle;

  // Pause animation by delaying animation start
  const animationStyle = pause > 0 ? { animationDelay: `${pause}ms` } : {};

  return (
    <Icon
      size={size}
      className={`animate-spin text-${color} ${className}`}
      style={animationStyle}
    />
  );
};

export default Spinner;
