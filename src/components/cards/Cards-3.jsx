import React, { useRef } from "react";

const TourchCard = ({
  children,
  className = "",
  bgColor = "bg-neutral-900",
  borderColor = "border-white/10",
  beamSize = 300, // px
  beamColor = "rgba(255,255,255,0.15)", // CSS value
}) => {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 group 
        border ${borderColor} ${bgColor} ${className}`}
    >
      {/* Beam Light */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 
        group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(${beamSize}px circle at var(--x) var(--y), ${beamColor}, transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default TourchCard;
