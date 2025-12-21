import React from "react";

const SocialStrip = ({ socials = [], gap = "gap-4", containerClass = "" }) => {
  return (
    <ul className={`flex items-center ${gap} ${containerClass}`}>
      {socials.map((item) => {
        const {
          name,
          url,
          icon,
          backgroundColor = "#ffffff",
          iconColor = "#000000",
          bgHeight = 32,
          bgWidth = 32,
          iconSize = 20,
        } = item;

        if (!icon) return null;

        const IconComponent = icon;

        return (
          <li
            key={name}
            className="flex items-center justify-center rounded-full"
            style={{
              backgroundColor,
              height: bgHeight,
              width: bgWidth,
            }}
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="inline-flex items-center justify-center"
            >
              <IconComponent
                size={iconSize}
                strokeWidth={1.8}
                style={{ color: iconColor }}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialStrip;
