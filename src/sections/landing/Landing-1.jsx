import GradientBg from "../../components/Backgrounds/GradientBg-1";
import ShimmerText from "../../components/ShimmerEffect/ShimmerText1";
import CardsMatrix from "../../components/cards/Cards-1";
import Button from "../../components/Buttons/Button-2";
import ScrollMouse from "../../components/scrollMouse/ScrollMouse-1";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop-1";

const Landing = () => {
  return (
    <>
      <ScrollToTop />

      <section className=" overflow-hidden h-full lg:min-h-screen flex flex-col md:flex-row items-center justify-center text-center">
        <GradientBg
          colors={["#ff00e6", "#0055ff", "#00f0ff"]}
          position="-top-[30%] right-[0%] md:-right-[10%]"
        />

        {/* Left Section (Text) */}
        <div className="flex-1 order-2 pt-10 md:pt-0 md:order-1 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-ragnear font-extrabold uppercase leading-tight max-w-5xl">
            Your Central Hub for
            <ShimmerText
              gradient={true}
              duration={5}
              direction="30deg"
              colors={["#155dfc", "#1447e6", "#518ef0"]}
              className="font-semibold"
            >
              Modern Reusable Components
            </ShimmerText>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-tertiary-gray max-w-2xl">
            A growing collection of clean, GSAP-animated, Tailwind-styled React
            components that you can copy and use instantly in any project.
          </p>

          <div className="mt-10 flex md:flex-wrap gap-4 items-center justify-center">
            <Button
              label="Get Started"
              variant="primary"
              hoverLabel="Explore Components"
            />
            <Button
              variant="outline"
              label="Learn More"
              hoverLabel="Learn More"
            />
          </div>
        </div>

        {/* Right Section (Cards) */}
        <div className="flex-1 order-1 pt-10 md:pt-0 md:order-2 flex items-center justify-center mt-10 md:mt-0">
          <div className="flex-1 flex items-center justify-center">
            <CardsMatrix />
          </div>
        </div>

        <ScrollMouse
          borderColor="border-blue-500"
          wheelColor="bg-blue-500"
          text="Scroll Down"
          className="mt-10 order-3 md:order-0"
          textColor="text-blue-500"
          textClassName="mt-3 text-base font-semibold"
        />
      </section>
    </>
  );
};

export default Landing;
