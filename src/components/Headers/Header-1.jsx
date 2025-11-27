import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Header = ({
  logo,
  navItems = [],
  containerClass = "",
  headerClass = "",
}) => {
  const headerRef = useRef(null);

  useGSAP(() => {
    const header = headerRef.current;

    // Exact pixel values for Tailwind max-w sizes
    const MAX_W_7XL = 80 * 16; // 80rem = 1280px
    const MAX_W_5XL = 64 * 16; // 64rem = 1024px

    // === WIDTH SHRINK BETWEEN 0 → 60vh ===
    gsap.fromTo(
      header,
      { width: MAX_W_7XL },
      {
        width: MAX_W_5XL,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: () => window.innerHeight * 0.6,
          scrub: true,
        },
      }
    );

    // === SHOW/HIDE AFTER 60vh ===
    ScrollTrigger.create({
      trigger: document.body,
      start: () => window.innerHeight * 0.6,
      onUpdate: (self) => {
        if (self.direction === 1) hideHeader();
        else showHeader();
      },
    });

    function showHeader() {
      gsap.to(header, {
        y: 0,
        opacity: 1,
        duration: 0.15,
        ease: "sine.out",
      });
    }

    function hideHeader() {
      gsap.to(header, {
        y: -60,
        opacity: 0,
        duration: 0.15,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex justify-center w-full">
      <div
        ref={headerRef}
        style={{
          width: "1280px", // initial 7xl width
          maxWidth: "100%",
          transformOrigin: "top center",
        }}
        className={`bg-gray-800 rounded-full shadow-lg ${headerClass}`}
      >
        <div
          className={`w-full py-2 px-6 text-white flex justify-between items-center ${containerClass}`}
        >
          {logo && <img src={logo} alt="Logo" className="h-10" />}

          <nav>
            <ul className="flex space-x-4">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-gray-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
