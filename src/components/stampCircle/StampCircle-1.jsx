import React, { useEffect, useRef, useState } from "react";

const StampCircle = ({
  size = "w-40",
  label = "VJ",
  text = "REACT * COMPONENTS * BITS *",
  speed = 10,
  className = "",
}) => {
  const ref = useRef(null);
  const [radius, setRadius] = useState(0);

  const chars = text.split("");

  useEffect(() => {
    const update = () => {
      if (ref.current) {
        const width = ref.current.offsetWidth;
        setRadius(width / 2); // perfect circle radius
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      ref={ref}
      className={`relative aspect-square ${size} flex items-center justify-center ${className}`}
    >
      {/* CENTER LABEL */}
      <div
        className="
        absolute z-20
        w-[50%] h-[50%]
        flex items-center justify-center
        rounded-full bg-black text-white 
        font-bold text-xl uppercase
      "
      >
        {label}
      </div>

      {/* ROTATING TEXT RING */}
      <div
        className="absolute inset-0 z-10"
        style={{
          animation: `spin ${speed}s linear infinite`,
        }}
      >
        {chars.map((char, index) => {
          const angle = (index * 360) / chars.length;
          return (
            <span
              key={index}
              className="absolute left-1/2 top-1/2 text-white font-bold"
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg) translate(-50%,-50%)`,
                transformOrigin: "center center",
                fontSize: "1rem",
                letterSpacing: "0.08em",
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default StampCircle;
