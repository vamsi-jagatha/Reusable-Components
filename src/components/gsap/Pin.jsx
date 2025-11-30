import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pin = ({
  children,
  start = "top top",
  end = "+=300",
  pinSpacing = true,
  markers = false,
  scrub = false,
  className = "",
}) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start,
        end,
        pin: true,
        pinSpacing,
        scrub,
        markers,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [start, end, pinSpacing, scrub, markers]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default Pin;
