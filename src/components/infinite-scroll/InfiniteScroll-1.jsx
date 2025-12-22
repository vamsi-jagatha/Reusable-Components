import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InfiniteScroll = ({
  text = "✧ Creative Motion",
  repeat = 6,
  className = "",
  textClassName = "",
  bgColor = "",
  textColor = "#ffffff",
  fontSize = "clamp(2rem, 6vw, 4rem)",
  gap = "2rem",
  speedMultiplier = 1,
  paddingY = "1rem",
}) => {
  const trackRef = useRef(null);
  const offset = useRef(0);
  const velocity = useRef(0);
  const direction = useRef(1);
  const isReady = useRef(false); // 🔑 critical

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // HARD RESET
    offset.current = 0;
    velocity.current = 0;
    direction.current = 1;
    isReady.current = false;

    gsap.set(track, { x: 0, clearProps: "transform" });

    const totalWidth = track.scrollWidth / 2;

    const tick = () => {
      offset.current += velocity.current * direction.current * speedMultiplier;

      offset.current =
        ((offset.current % totalWidth) + totalWidth) % totalWidth;

      gsap.set(track, { x: -offset.current });

      velocity.current *= 0.92;
    };

    gsap.ticker.add(tick);

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (!isReady.current) return;

        direction.current = self.direction === 1 ? 1 : -1;
        velocity.current = gsap.utils.clamp(
          0,
          40,
          Math.abs(self.getVelocity()) / 150
        );
      },
    });

    requestAnimationFrame(() => {
      isReady.current = true;
    });

    return () => {
      gsap.ticker.remove(tick);
      trigger.kill();
      offset.current = 0;
      velocity.current = 0;
      direction.current = 1;
    };
  }, [speedMultiplier]);

  const items = Array.from({ length: repeat }).map((_, i) => (
    <span key={i} className="shrink-0" style={{ marginRight: gap }}>
      {text}
    </span>
  ));

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{ backgroundColor: bgColor, paddingBlock: paddingY }}
    >
      <div
        ref={trackRef}
        className={`flex whitespace-nowrap will-change-transform font-bold uppercase ${textClassName}`}
        style={{ color: textColor, fontSize }}
      >
        {items}
        {items}
      </div>
    </div>
  );
};

export default InfiniteScroll;
