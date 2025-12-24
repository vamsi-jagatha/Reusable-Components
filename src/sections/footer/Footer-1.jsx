import Logo from "../../components/logo/Logo";
import SocialStrip from "../../components/socialStrip/SocialStrip-2";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const FOOTER_HEIGHT = "70vh";

const Footer = () => {
  const socials = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/your-username",
      backgroundColor: "#ffffff", // bg-white
      iconColor: "#7c3aed", // purple-600
      bgHeight: 32,
      bgWidth: 32,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/your-username",
      backgroundColor: "#ffffff",
      iconColor: "#7c3aed",
      bgHeight: 32,
      bgWidth: 32,
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/your-username",
      backgroundColor: "#ffffff",
      iconColor: "#7c3aed",
      bgHeight: 32,
      bgWidth: 32,
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/your-username",
      backgroundColor: "#ffffff",
      iconColor: "#7c3aed",
      bgHeight: 32,
      bgWidth: 32,
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:you@example.com",
      backgroundColor: "#ffffff",
      iconColor: "#7c3aed",
      bgHeight: 32,
      bgWidth: 32,
    },
  ];

  return (
    <footer
      className="
        fixed bottom-0 left-0
        w-full h-[70vh]
        bg-purple-600/50 text-white
        px-10 py-16
        flex items-center justify-between
        overflow-hidden
        z-0
      "
    >
      {/* LEFT SIDE - Content */}
      <div className="flex flex-col space-y-6 max-w-lg z-10">
        <h1 className="text-4xl mt-10 md:text-6xl font-extrabold font-ragnear">
          Let's Build Something Great
        </h1>

        <p className="text-gray-200 text-lg max-w-md">
          A minimal footer for a clean modern product. Designed to stay fixed
          and reveal as the user scrolls.
        </p>

        {/* NAV ITEMS */}
        <nav className="flex flex-col space-y-2 mt-4">
          <a href="#" className="text-gray-300 hover:text-white text-lg">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white text-lg">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white text-lg">
            Features
          </a>
          <a href="#" className="text-gray-300 hover:text-white text-lg">
            Contact
          </a>
        </nav>

        {/* SOCIAL + EMAIL */}
        <div className="flex flex-col md:flex-row gap-10 space-y-3 pt-6">
          <SocialStrip socials={socials} />
          <p className="text-gray-300 text-lg">contact@example.com</p>
        </div>
      </div>

      {/* RIGHT SIDE — SPINNING LOGO (alone, NO SVG) */}
      <div className="absolute right-20  top-50 md:right-20 md:top-10 w-50 md:w-100 h-50 md:h-100 opacity-70">
        <Logo />
      </div>
    </footer>
  );
};

export default Footer;
