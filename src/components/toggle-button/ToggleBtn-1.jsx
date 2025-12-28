import React, { useState } from "react";

const ToggleBtn = ({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = "md", // sm | md | lg
  className = "",
}) => {
  const [internal, setInternal] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isOn = isControlled ? checked : internal;

  const toggle = () => {
    if (disabled) return;
    const next = !isOn;
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  const sizes = {
    sm: {
      track: "w-10 h-5",
      thumb: "w-4 h-4 translate-x-1",
      thumbOn: "translate-x-5",
    },
    md: {
      track: "w-12 h-6",
      thumb: "w-5 h-5 translate-x-1",
      thumbOn: "translate-x-6",
    },
    lg: {
      track: "w-14 h-7",
      thumb: "w-6 h-6 translate-x-1",
      thumbOn: "translate-x-7",
    },
  };

  const s = sizes[size];

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      aria-disabled={disabled}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
      className={`
        relative inline-flex items-center
        rounded-full transition-colors duration-300
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${isOn ? "bg-purple-600" : "bg-purple-600"}
        ${s.track}
        ${className}
      `}
    >
      <span
        className={`
          absolute left-0
          rounded-full bg-white shadow
          transition-transform duration-300 ease-out
          ${s.thumb}
          ${isOn ? s.thumbOn : ""}
        `}
      />
    </button>
  );
};

export default ToggleBtn;
