import React from "react";
import CounterItem from "./Counteritems-2";
import Cards from "../cards/Cards-4";

const CounterSection = ({ items = [] }) => {
  return (
    <Cards
      borderRadius="2xl"
      borderWidth={3}
      speed="8s"
      colors={["#9C2CE9"]}
      pauseOnHover={false}
      borderLength={10} // % of visible border
      rotation="counterClockwise"
      className=" mt-20  md:w-7xl md:mt-32 mmd:pt-32   pt-32 pb-12 px-4"
    >
      <div
        className="
          w-full max-w-7xl
          py-4 px-6
          rounded-2xl
    bg-purple-800/20
          backdrop-blur-xl
          border border-purple-700/30
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
                    bg-linear-to-b from-transparent via-purple-600/30 to-transparent
                  "
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </Cards>
  );
};

export default CounterSection;
