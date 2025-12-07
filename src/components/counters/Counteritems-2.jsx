import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CounterItem = ({
  label,
  value,
  digitColor = "white",
  fontSize = 40,
  width = 12,
  plus = true,
  animationDelay = 0,
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
      const targetIndex = Number(digit);

      gsap.set(numberList, { y: 0 });

      if (direction === "up") {
        gsap.to(numberList, {
          y: -(targetIndex * DIGIT_HEIGHT),
          duration: 1.6,
          delay: animationDelay,
          ease: "power4.out",
        });
      } else {
        gsap.set(numberList, { y: -(9 * DIGIT_HEIGHT) });

        gsap.to(numberList, {
          y: -(targetIndex * DIGIT_HEIGHT),
          duration: 1.6,
          delay: animationDelay,
          ease: "power4.out",
        });
      }
    });
  }, [value, animationDelay]);

  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex gap-1 font-bold items-center ${
          isTailwind ? digitColor : ""
        }`}
        style={!isTailwind ? { color: digitColor } : {}}
      >
        {/* DIGIT WHEELS */}
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
                style={{ height: `${48 * 10}px` }} // Only 0–9
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
              </div>
            </div>
          ))}

        {/* STATIC PLUS SIGN */}
        {plus && (
          <span
            className={isTailwind ? digitColor : ""}
            style={{
              fontSize: `${fontSize}px`,
              marginTop: "-4px",
              lineHeight: "48px",
              fontWeight: "bold",
              ...(isTailwind ? {} : { color: digitColor }),
            }}
          >
            +
          </span>
        )}
      </div>

      <span className="text-gray-700 text-md mt-0">{label}</span>
    </div>
  );
};

export default CounterItem;
