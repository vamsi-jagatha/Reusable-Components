import Logo from "../../components/logo/Logo";
import SocialStrip from "../../components/SocialStrip/SocialStrip-1";

const FOOTER_HEIGHT = "70vh";

const Footer = () => {
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
          <SocialStrip />
          {/* <div className="flex space-x-4">
            <div className="h-8 w-8 bg-white/10 rounded-full flex items-center justify-center">
              🌐
            </div>
            <div className="h-8 w-8 bg-white/10 rounded-full flex items-center justify-center">
              🐦
            </div>
            <div className="h-8 w-8 bg-white/10 rounded-full flex items-center justify-center">
              📸
            </div>
          </div> */}

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
