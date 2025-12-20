import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const glowRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "15% 75%",
        // markers: true,
        toggleActions: "play none none reverse",
      },
    });

    tl.from(titleRef.current, {
      y: 120,
      opacity: 0,
      scale: 0.92,
      duration: 1.2,
      ease: "power4.out",
    })
      .from(
        buttonRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        glowRef.current,
        {
          scale: 0,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
        },
        "-=0.8"
      );
  }, []);

  // Magnetic hover
  const onMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(buttonRef.current, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const onMouseLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center overflow-hidden  px-6 text-center text-white"
    >
      {/* Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[120px]"
      />

      <div className="relative z-10 max-w-5xl">
        <h2
          ref={titleRef}
          className="text-balance text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl"
        >
          Ready to build something
          <span className="block text-purple-400"> unforgettable?</span>
        </h2>

        <div className="mt-12 flex justify-center">
          <button
            ref={buttonRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="group relative cursor-pointer rounded-full bg-white px-10 py-4 text-lg font-semibold text-zinc-950 transition-colors duration-300 hover:bg-violet-500 hover:text-white"
          >
            Let’s Start →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
