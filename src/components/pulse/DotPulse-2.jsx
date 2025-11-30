const DotPulse = ({
  dotSize = "w-2 h-2", // core dot
  color = "bg-blue-500",
  ringColor = "bg-blue-500/40",
  ringSize = "w-3 h-3",
}) => {
  return (
    <span className="relative inline-block">
      {/* Pulse ring  */}
      <span
        className={`
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          ${ringSize}     
          rounded-full
          ${ringColor}
          animate-ping
        `}
      />

      {/* Solid dot  */}
      <span
        className={`
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          ${dotSize}
          ${color}
          rounded-full
          z-20
        `}
      />
    </span>
  );
};

export default DotPulse;
