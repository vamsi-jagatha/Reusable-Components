import React from "react";

const radiusMap = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
};

const BeamCard = ({
  children,
  className = "",
  borderRadius = "2xl",
  borderWidth = 5,
  speed = "3s",
  colors = ["#08f", "#f03"],
  pauseOnHover = true,
  borderLength = 20, // % of visible border
  rotation = "clockwise", // "clockwise" or "counterClockwise"
}) => {
  const radiusClass = radiusMap[borderRadius] || "rounded-2xl";

  // Build color gradient stops
  const gradientStops = colors
    .map((c, i) => `${c} ${(i / colors.length) * 100}%`)
    .join(", ");

  // Compute arc start/end
  const visibleStart = (100 - borderLength) / 2;
  const visibleEnd = visibleStart + borderLength;

  // Determine rotation direction multiplier
  const direction = rotation === "counterClockwise" ? -1 : 1;

  return (
    <div
      className={`relative ${radiusClass} ${className} p-0`}
      style={{
        "--beam-speed": speed,
        "--border-angle": "0turn",
        "--rotation-direction": direction,

        background: `
          conic-gradient(
            from var(--border-angle),
            transparent ${visibleStart}%,
            ${gradientStops},
            transparent ${visibleEnd}%
          )
        `,
        padding: borderWidth,
        animation: `beam-spin var(--beam-speed) linear infinite`,
      }}
      onMouseEnter={(e) => {
        if (pauseOnHover) e.currentTarget.style.animationPlayState = "paused";
      }}
      onMouseLeave={(e) => {
        if (pauseOnHover) e.currentTarget.style.animationPlayState = "running";
      }}
    >
      <div
        className={`${radiusClass} bg-neutral-900 border border-white/10 p-6`}
      >
        {children}
      </div>

      <style>{`
        @keyframes beam-spin {
          to {
            --border-angle: calc(var(--rotation-direction) * 1turn);
          }
        }
      `}</style>
    </div>
  );
};

export default BeamCard;
