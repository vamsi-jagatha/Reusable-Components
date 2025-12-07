import React from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const SocialStrip = ({
  size = 26,
  color = "text-white",
  hoverColor = "hover:text-blue-500",
  gap = "gap-6",
}) => {
  const socials = [
    { icon: Github, href: "https://github.com/" },
    { icon: Linkedin, href: "https://www.linkedin.com/" },
    { icon: Twitter, href: "https://twitter.com/" },
    { icon: Instagram, href: "https://instagram.com/" },
  ];

  return (
    <div className={`flex items-center ${gap}`}>
      {socials.map((item, index) => {
        const Icon = item.icon;
        return (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              ${color}
              ${hoverColor}
              transition-all duration-300 
              hover:scale-110 
              active:scale-95
            `}
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialStrip;
