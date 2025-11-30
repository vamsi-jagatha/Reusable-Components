import Landing from "../sections/landing/Landing-1";
import Header from "../components/Headers/Header-2";
import Features from "../sections/features/Features-1";
import About from "../sections/about/About-1";
const Home = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1440px] mx-auto px-6">
        <Landing />
        <About />
        <Features />
        {/* Closing Section */}
        <div className="space-y-4 text-center pt-10">
          <h2 className="text-3xl font-bold">
            Built for Developers, By Developers.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Whether you're building dashboards, landing pages, SaaS products, or
            experimental projects — our components aim to accelerate your
            workflow while elevating your UI quality.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
