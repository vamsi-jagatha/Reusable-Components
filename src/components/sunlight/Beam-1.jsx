import React from "react";

const Beam = ({ className = "" }) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 flex justify-center items-start ${className}`}
    >
      {/* Outer Soft Column Glow */}
      <div
        className="
          absolute
          w-120
          h-[160vh]
          bg-purple-600/20
          blur-[200px]
          opacity-80
          mix-blend-screen
        "
      ></div>

      {/* Inner Strong Vertical Glow */}
      <div
        className="
          absolute
          w-[18rem]
          h-[160vh]
          bg-purple-500/40
          blur-[120px]
          opacity-90
          mix-blend-screen
        "
      ></div>

      {/* Core Vertical Light Column */}
      <div
        className="
          absolute
          w-40
          h-[150vh]
          bg-linear-to-b
          from-purple-300/90
          via-purple-400/70
          to-transparent
          blur-[50px]
          opacity-100
          mix-blend-screen
        "
      ></div>

      {/* Subtle Top Highlight (NOT a triangle — small taper only) */}
      {/* <div
        className="
          absolute
          w-[8rem]
          h-[80vh]
          bg-gradient-to-b
          from-purple-200/80
          to-transparent
          blur-3xl
          opacity-80
          mix-blend-screen
        "
        style={{
          clipPath: "polygon(50% 0%, 30% 100%, 70% 100%)",
        }}
      ></div> */}

      {/* Noise Texture Overlay */}
      <div
        className="
          absolute 
          w-[20rem] 
          h-[120vh]
          opacity-20
          mix-blend-screen
        "
        // style={{
        //   backgroundImage:
        //     "url('https://grainy-gradients.vercel.app/noise.png')",
        //   backgroundSize: "cover",
        // }}
      ></div>
    </div>
  );
};

export default Beam;
