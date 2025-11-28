import GradientBg from "../../components/Backgrounds/GradientBg-1";
import ShimmerText from "../../components/ShimmerEffect/ShimmerText1";
import CardsMatrix from "../../components/cards/Cards-1";
import Button from "../../components/Buttons/Button-2";
import ScrollMouse from "../../components/scrollMouse/ScrollMouse-1";

const Landing = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col  md:flex-row items-center justify-center text-center px-6 ">
        <GradientBg
          colors={["#ff00e6", "#0055ff", "#00f0ff"]}
          position="-top-[30%] -right-[10%]"
        />

        {/* Left Section */}
        <div className="flex-1  flex flex-col items-center  justify-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-ragnear font-extrabold uppercase leading-tight max-w-5xl">
            Your Central Hub for
            <ShimmerText
              gradient={true}
              duration={5}
              direction="30deg"
              colors={["#155dfc", "#1447e6", "#518ef0"]}
              className=" font-semibold"
            >
              Modern Reusable Components
            </ShimmerText>
          </h1>

          {/* Tagline */}
          <p className="mt-6 text-lg md:text-xl text-tertiary-gray max-w-2xl">
            A growing collection of clean, GSAP-animated, Tailwind-styled React
            components that you can copy and use instantly in any project.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
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
        {/* Right Section */}
        <div className="flex-1  flex items-center justify-center mt-10 md:mt-0">
          <div className="flex-1 flex items-center justify-center">
            <CardsMatrix />
          </div>
          {/* <BentoGrid items={items} /> */}
        </div>
        <ScrollMouse
          borderColor="border-blue-500"
          wheelColor="bg-blue-500"
          text="Scroll Down"
          textColor="text-blue-500"
          textClassName="mt-3 text-base font-semibold"
        />
      </section>
    </>
  );
};

export default Landing;
