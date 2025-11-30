import Landing from "../sections/landing/Landing-1";
import Header from "../components/Headers/Header-2";
import Features from "../sections/features/Features-1";

const Home = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1440px] mx-auto">
        <Landing />
        <Features />
      </div>
    </>
  );
};

export default Home;
