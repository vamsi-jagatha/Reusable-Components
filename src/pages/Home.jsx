import Button from "../components/Buttons/Button1";
import Line from "../components/DecorativeLines/Line1";
import GradientText from "../components/GradientText/GradientText1";
import GradientBg from "../components/Backgrounds/GradientBg-1";
import ShimmerText from "../components/ShimmerEffect/ShimmerText1";
import HomeSvg from "../../public/svgs/home.svg";
import CardsMatrix from "../components/cards/Cards-1";

const Home = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col  md:flex-row items-center justify-center text-center px-6 ">
        <GradientBg
          colors={["#ff00e6", "#0055ff", "#00f0ff"]}
          position="-top-[30%] -right-[10%]"
        />

        {/* Left Section */}
        <div className="flex-1 flex flex-col items-center  justify-center">
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
            Build faster with a curated collection of production-ready
            components designed to simplify your workflow and accelerate your
            development process.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
            <Button variant="primary">Explore Components</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex-1">
          <div className="flex-1 flex items-center justify-center">
            <CardsMatrix />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
