import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: 0, autoKill: true },
      ease: "power3.out",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-6 right-6 z-50
        bg-blue-600 hover:bg-blue-700
        text-white p-3 rounded-full shadow-lg
        transition-all duration-300
        flex items-center cursor-pointer justify-center animate-bounce
      "
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;
