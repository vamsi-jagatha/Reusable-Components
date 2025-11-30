const DotPulse = ({ color = "bg-blue-500", size = "w-3 h-3" }) => {
  return (
    <span
      className={`
        inline-block 
        ${size} 
        rounded-full 
        ${color} 
        animate-pulse
        shadow-[0_0_10px_3px_rgba(0,0,0,0.2)]
      `}
    />
  );
};

export default DotPulse;
