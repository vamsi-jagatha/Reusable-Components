import React from "react";
import CounterItem from "./Counteritems-2";

const CounterSection = ({ items = [] }) => {
  return (
    <section className="w-full flex justify-center pt-32 pb-12 px-4">
      <div
        className="
          w-full max-w-7xl
          py-4 px-6
          rounded-2xl
          bg-gradient-to-b from-[#4d5f25]/40 to-[#0b0d06]/90
          backdrop-blur-xl
          border border-[#57702e]/30
          shadow-[0_0_40px_rgba(100,255,100,0.15)]
        "
      >
        {/* GRID SYSTEM */}
        <div
          className="
            grid 
            grid-cols-2
            sm:grid-cols-2
            lg:grid-cols-5
            gap-8
            lg:gap-0
            relative
          "
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center text-center
                relative
                px-4
              "
            >
              {/* Counter */}
              <CounterItem
                label={item.label}
                value={item.value}
                digitColor={item.digitColor}
                duration={item.duration}
                plus={item.plus}
                fontSize={item.fontSize}
              />

              {/* Dividers — only visible on large screens */}
              {index < items.length - 1 && (
                <div
                  className="
                    hidden lg:block
                    absolute right-0 top-0 bottom-0 
                    w-px 
                    bg-gradient-to-b from-transparent via-green-600/30 to-transparent
                  "
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
