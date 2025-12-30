import { useState, useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

const Testimonials = ({ testimonials = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const quoteRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const hasData = testimonials.length > 0;
  const testimonial = hasData ? testimonials[activeIndex] : null;

  // Quote reveal animation (line stagger)
  useGSAP(
    () => {
      if (!hasData || !quoteRef.current) return;

      const split = new SplitText(quoteRef.current, {
        type: "lines",
        linesClass: "line-child",
      });

      gsap.from(split.lines, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
      });

      return () => split.revert();
    },
    { dependencies: [activeIndex], scope: containerRef }
  );

  // Image animation on testimonial change
  useGSAP(
    () => {
      if (!imageRef.current) return;

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
        }
      );
    },
    { dependencies: [activeIndex], scope: containerRef }
  );

  if (!hasData) return null;

  const { image, quote, name, role } = testimonial;

  return (
    <section ref={containerRef}>
      <div className="max-w-[1440px] mx-auto px-4 py-10 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-[420px] shrink-0 order-2 md:order-1">
            <div className="relative w-full aspect-3/4 overflow-hidden rounded-2xl bg-gray-300">
              <img
                ref={imageRef}
                src={image}
                alt={name}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 mt-8 md:mt-0 order-1 md:order-2">
            <span className="relative bg-gray-900/80 mb-4 h-12 w-12 rounded-lg flex items-center justify-center text-7xl pointer-events-none">
              <span className="absolute top-0 left-1 text-purple-600">❝</span>
            </span>

            <p
              ref={quoteRef}
              className="block overflow-hidden text-gray-600 mb-6 text-4xl leading-tight"
            >
              {quote}
            </p>

            <p className="font-semibold">
              – {name}, {role}
            </p>

            {/* Controls */}
            <div className="mt-8 w-full flex md:justify-end gap-4">
              <button
                onClick={() =>
                  setActiveIndex((i) =>
                    i === 0 ? testimonials.length - 1 : i - 1
                  )
                }
                className="p-3 bg-purple-600 cursor-pointer text-white rounded-full hover:bg-purple-700 transition"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() =>
                  setActiveIndex((i) =>
                    i === testimonials.length - 1 ? 0 : i + 1
                  )
                }
                className="p-3 bg-purple-600 cursor-pointer text-white rounded-full hover:bg-purple-700 transition"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

// const testimonialData = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&h=1200&fit=crop",
//     quote:
//       "This product has completely transformed the way I work. The intuitive design and features boosted my productivity.",
//     name: "Jane Doe",
//     role: "Product Manager",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&h=1200&fit=crop",
//     quote:
//       "The experience feels polished and thoughtful. Everything just works the way you expect it to.",
//     name: "Mark Wilson",
//     role: "UX Designer",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&h=1200&fit=crop",
//     quote:
//       "Performance, clarity, and speed. This is one of the rare tools that actually delivers.",
//     name: "Aisha Khan",
//     role: "Tech Lead",
//   },
// ];
