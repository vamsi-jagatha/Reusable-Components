import React from "react";
import Button from "../Buttons/Button-2";

const Header = ({
  logo = null, // string | ReactNode | null
  logoColor = "text-blue-600",
  logoHoverColor = "hover:text-blue-500",
  logoSize = "w-8 h-8",
  animateLogo = true,

  menuItems = [],
  itemColor = "text-white",
  className = "",
  fixed = true,
}) => {
  return (
    <header
      className={`w-full max-w-7xl mx-auto p-4 flex items-center justify-between
      ${fixed ? "fixed top-0 left-0 right-0 z-50" : ""}
      ${className}`}
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
          // <svg
          //   xmlns="http://www.w3.org/2000/svg"
          //   viewBox="0 0 256 256"
          //   className={`${logoSize} ${logoColor} ${logoHoverColor} transition ${
          //     animateLogo ? "animate-pulse" : ""
          //   }`}
          //   fill="currentColor"
          // >
          //   <path d="M 64 160 C 46.327 160 32 174.327 32 192 C 32 209.673 46.327 224 64 224 C 81.673 224 96 209.673 96 192 L 128 192 C 128 227.346 99.346 256 64 256 C 28.654 256 0 227.346 0 192 C 0 156.654 28.654 128 64 128 Z M 192 128 C 227.346 128 256 156.654 256 192 C 256 227.346 227.346 256 192 256 C 156.654 256 128 227.346 128 192 L 160 192 C 160 209.673 174.327 224 192 224 C 209.673 224 224 209.673 224 192 C 224 174.327 209.673 160 192 160 Z M 64 0 C 99.346 0 128 28.654 128 64 L 96 64 C 96 46.327 81.673 32 64 32 C 46.327 32 32 46.327 32 64 C 32 81.673 46.327 96 64 96 L 64 128 C 28.654 128 0 99.346 0 64 C 0 28.654 28.654 0 64 0 Z M 192 0 C 227.346 0 256 28.654 256 64 C 256 99.346 227.346 128 192 128 L 192 96 C 209.673 96 224 81.673 224 64 C 224 46.327 209.673 32 192 32 C 174.327 32 160 46.327 160 64 L 128 64 C 128 28.654 156.654 0 192 0 Z" />
          // </svg>
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

      {/* NAVIGATION */}
      <nav>
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
    </header>
  );
};

export default Header;
