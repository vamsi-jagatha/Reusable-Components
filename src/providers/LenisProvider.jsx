// src/providers/LenisProvider.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";

export default function LenisProvider({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    const update = (time) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
