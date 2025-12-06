import React, { useEffect, useRef, useState, useCallback } from "react";

const CounterItem = ({ label, value, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  const animateCount = useCallback(() => {
    const end = parseInt(value, 10);
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    let currentFrame = 0;

    const counter = () => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOut * end));

      if (currentFrame < totalFrames) {
        requestAnimationFrame(counter);
      }
    };

    requestAnimationFrame(counter);
  }, [value, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount();
        }
      },
      { threshold: 0.4 }
    );

    const el = elementRef.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [animateCount]);

  return (
    <div ref={elementRef} className="flex flex-col items-center">
      <span className="text-4xl font-bold text-blue-600">{count}</span>
      <span className="text-gray-700 text-lg">{label}</span>
    </div>
  );
};

export default CounterItem;
