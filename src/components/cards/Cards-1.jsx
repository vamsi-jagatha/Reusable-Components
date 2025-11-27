import { useRef, useEffect } from "react";
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

  scrollDuration = 8, // gsap scrolling speed
  copies = 4, // repeated grid copies
  containerGradient = "bg-linear-to-br from-blue-500 via-blue-600 to-red-500",
  shadowClass = "shadow-2xl shadow-blue-500",
  cardClass = "", // custom card style override
}) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let tween;
    const id = requestAnimationFrame(() => {
      const singleHeight = el.scrollHeight / copies;

      el.style.transform = `translateY(0px)`;

      tween = gsap.to(el, {
        y: -singleHeight,
        duration: scrollDuration,
        ease: "none",
        repeat: -1,
        modifiers: {
          y: (value) => {
            const v = parseFloat(value);
            const wrapped = gsap.utils.wrap(-singleHeight, 0)(v);
            return wrapped + "px";
          },
        },
      });
    });

    return () => {
      cancelAnimationFrame(id);
      if (tween) tween.kill();
    };
  }, [copies, scrollDuration]);

  return (
    <div
      className={`overflow-hidden rounded-3xl ${containerGradient} ${shadowClass}`}
    >
      <div className="flex h-[350px] w-full rotate-30 items-center justify-center px-4">
        <div ref={scrollRef} style={{ willChange: "transform" }}>
          {Array.from({ length: copies }).map((_, i) => (
            <Grid key={i} items={items} cardClass={cardClass} />
          ))}
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
      border shadow-lg  
      backdrop-blur-xl 
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
