import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CounterItem = ({
  label,
  value,

  digitColor = "white",
  fontSize = 40,
  width = 15,
  plus = true,
  animationDelay = 0, // ⬅ NEW PROP
}) => {
  const wrapperRef = useRef([]);

  const isTailwind = digitColor.startsWith("text-");

  useEffect(() => {
    const digits = value.toString().split("");
    const DIGIT_HEIGHT = 48;

    digits.forEach((digit, index) => {
      const el = wrapperRef.current[index];
      if (!el) return;

      const numberList = el.querySelector(".numbers");
      const direction = index % 2 === 0 ? "up" : "down";

      // Reset before animation
      gsap.set(numberList, { y: 0 });

      if (direction === "up") {
        gsap.to(numberList, {
          y: -digit * DIGIT_HEIGHT,
          duration: 1.6,
          delay: animationDelay, // ⬅ APPLY DELAY HERE
          ease: "power4.out",
        });
      } else {
        gsap.set(numberList, { y: -(9 * DIGIT_HEIGHT) });

        gsap.to(numberList, {
          y: -(digit * DIGIT_HEIGHT),
          duration: 1.6,
          delay: animationDelay, // ⬅ APPLY DELAY HERE
          ease: "power4.out",
        });
      }
    });
  }, [value, animationDelay]);

  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex gap-1 font-bold ${isTailwind ? digitColor : ""}`}
        style={!isTailwind ? { color: digitColor } : {}}
      >
        {String(value)
          .split("")
          .map((digitChar, index) => (
            <div
              key={index}
              ref={(el) => (wrapperRef.current[index] = el)}
              className="relative overflow-hidden"
              style={{ height: "48px", width: `${width}px` }}
            >
              <div
                className="numbers absolute top-0 left-0"
                style={{ height: `${48 * 10}px` }}
              >
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={isTailwind ? digitColor : ""}
                    style={{
                      height: "48px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: `${fontSize}px`,
                      lineHeight: "48px",
                      width: `${width}px`,
                      ...(isTailwind ? {} : { color: digitColor }),
                    }}
                  >
                    {i}
                  </div>
                ))}

                {/* PLUS SIGN BLOCK */}
                {plus && (
                  <div
                    className={isTailwind ? digitColor : ""}
                    style={{
                      height: "48px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: `${fontSize}px`,
                      lineHeight: "48px",
                      width: `${width}px`,
                      ...(isTailwind ? {} : { color: digitColor }),
                    }}
                  >
                    +
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>

      <span className="text-gray-700 text-md mt-2">{label}</span>
    </div>
  );
};

export default CounterItem;
