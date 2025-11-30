import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const CardsMatrix = ({
  items = [
    { name: "Buttons" },
    { name: "Loaders" },
    { name: "Cards" },
    { name: "Animations" },
    { name: "Text Effects" },
    { name: "Gradients" },
    { name: "Backgrounds" },
    { name: "Forms" },
    { name: "Modals" },
  ],

  scrollDuration = 8,
  copies = 4,
  containerGradient = "bg-linear-to-br from-blue-500 via-blue-600 to-red-500",
  shadowClass = "shadow-2xl shadow-blue-500",
  cardClass = "",
}) => {
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let ctx = gsap.context(() => {
      const singleHeight = el.scrollHeight / copies;

      gsap.to(el, {
        y: -singleHeight,
        duration: scrollDuration,
        ease: "none",
        repeat: -1,
        modifiers: {
          y: (value) => {
            const v = parseFloat(value);
            return gsap.utils.wrap(-singleHeight, 0)(v) + "px";
          },
        },
      });
    });

    return () => ctx.revert();
  }, [copies, scrollDuration]);

  return (
    <div
      className={`overflow-hidden rounded-3xl ${containerGradient} ${shadowClass}`}
    >
      <div className="flex h-[350px] w-full items-center justify-center px-4">
        {/* Rotation wrapper only */}
        <div className="rotate-30">
          {/* Non-rotated stable parent for GSAP */}
          <div className="overflow-hidden">
            <div
              ref={scrollRef}
              style={{ transform: "translateZ(0)", willChange: "transform" }}
            >
              {Array.from({ length: copies }).map((_, i) => (
                <Grid key={i} items={items} cardClass={cardClass} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Grid = ({ items, cardClass }) => (
  <div className="grid grid-cols-3 gap-5 max-w-md mb-5">
    {items.map((item, i) => (
      <Card key={i} title={item.name} cardClass={cardClass} />
    ))}
  </div>
);

const Card = ({ title, cardClass }) => (
  <div
    className={`
      p-6 rounded-2xl 
      border  
      transition transform 
      hover:-translate-y-2 
      cursor-pointer
      bg-white/40 border-black/10 text-black
      dark:bg-white/5 dark:border-white/10 dark:text-white
      ${cardClass}
    `}
  >
    <p className="font-semibold text-sm md:text-base">{title}</p>
  </div>
);

export default CardsMatrix;
