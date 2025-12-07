import React, { useRef, useState, useEffect } from "react";
import Button from "../Buttons/Button-2";
import { gsap } from "gsap";
import NavButton from "../navButtons/NavButton-1";
import SocialStrip from "../socialStrip/SocialStrip-1";

const Header = ({
  logo = null,
  logoColor = "text-blue-600",
  logoHoverColor = "hover:text-blue-500",
  logoSize = "w-8 h-8",
  animateLogo = true,
  menuItems = [],
  itemColor = "text-white",
  className = "",
  fixed = true,
}) => {
  const [open, setOpen] = useState(false);

  const mobileNavRef = useRef(null);
  const menuItemsRef = useRef([]);
  const socialRef = useRef(null); // <-- NEW

  // Mobile menu animation
  useEffect(() => {
    if (open) {
      gsap.fromTo(
        mobileNavRef.current,
        { height: 0, opacity: 0 },
        { height: "100vh", opacity: 1, duration: 0.4, ease: "power2.out" }
      );

      gsap.fromTo(
        menuItemsRef.current,
        { x: 20, opacity: 0, filter: "blur(10px)" },
        {
          x: 0,
          filter: "blur(0px)",
          opacity: 1,
          stagger: 0.25,
          duration: 0.45,
          delay: 0.3,
          ease: "power3.out",
        }
      );

      // SOCIAL STRIP ANIMATION (NEW)
      gsap.fromTo(
        socialRef.current,
        { y: 20, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power3.out",
          delay: 1,
        }
      );
    } else {
      gsap.to(mobileNavRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.45,
        ease: "power2.in",
      });

      gsap.to(socialRef.current, {
        opacity: 0,
        y: 20,
        filter: "blur(8px)",
        duration: 0.25,
        ease: "power2.in",
      });
    }
  }, [open]);

  return (
    <>
      <header
        className={`w-full max-w-7xl mx-auto p-4 flex items-center justify-between
        ${fixed ? "fixed top-0 left-0 right-0 z-50" : ""} ${className}`}
      >
        {/* LOGO */}
        <div className="cursor-pointer">
          {logo ? (
            typeof logo === "string" ? (
              <img src={logo} className="h-10 w-10" alt="Logo" />
            ) : (
              logo
            )
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className={`${logoSize} ${logoColor} ${logoHoverColor} transition ${
                animateLogo ? "animate-spin" : ""
              }`}
              fill="currentColor"
            >
              <path d="M 152 70.059 L 201.539 20.519 L 235.48 54.461 L 185.941 104 L 256 104 L 256 152 L 185.941 152 L 235.48 201.539 L 201.539 235.48 L 152 185.941 L 152 256 L 104 256 L 104 185.941 L 54.46 235.48 L 20.52 201.539 L 70.059 152 L 0 152 L 0 104 L 70.059 104 L 20.519 54.46 L 54.461 20.52 L 104 70.059 L 104 0 L 152 0 Z"></path>
            </svg>
          )}
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>
                  <Button
                    label={item.label}
                    itemColor={item.itemColor || itemColor}
                    hoverLabel={item.hoverLabel || item.label}
                    variant={item.variant || "transparent"}
                    hoverTextColor={item.hoverTextColor || "text-blue-600"}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* MOBILE NAV BUTTON */}
        <NavButton open={open} setOpen={setOpen} />
      </header>

      {/* MOBILE NAV MENU */}
      <div
        ref={mobileNavRef}
        className="md:hidden opacity-0 h-0 overflow-hidden bg-[#0d0d0d]/90 flex items-center justify-center backdrop-blur-md fixed top-0 left-0 right-0 z-40"
      >
        <ul className="flex flex-col items-center gap-6 py-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              ref={(el) => (menuItemsRef.current[index] = el)}
              className="opacity-0"
            >
              <a href={item.href}>
                <Button
                  height="h-14"
                  className="text-5xl font-ragnear font-semibold"
                  label={item.label}
                  itemColor={item.itemColor || itemColor}
                  hoverLabel={item.hoverLabel || item.label}
                  variant={item.variant || "transparent"}
                  hoverTextColor={item.hoverTextColor || "text-blue-600"}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* SOCIAL STRIP WITH ANIMATION */}
        <div ref={socialRef} className="absolute bottom-4 left-10">
          <SocialStrip />
        </div>
      </div>
    </>
  );
};

export default Header;
