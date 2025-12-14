// Testing.jsx
import React from "react";
import Landing from "../../sections/landing/Landing-2";
import About from "../../sections/about/About-2";
import Features from "../../sections/features/Features-2";
import QuickActionButton from "../../components/quickActionButtons/QuickActionButton-1";
import Footer from "../../sections/footer/Footer-1";

const Home = () => {
  return (
    <>
      <QuickActionButton
        size={80}
        topLabel="Book Call"
        bottomLabel="Start Now"
        textSize="text-lg"
        duration={1.2}
        easing="elastic.out(1, 0.5)"
      />

      <div className="relative z-10  rounded-b-[3.5rem] bg-primary-dark">
        <Landing />
        <About />
        <Features />
      </div>
      <div style={{ height: "70vh" }}></div>

      <Footer />
    </>
  );
};

export default Home;
