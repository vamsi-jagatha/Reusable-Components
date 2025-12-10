import React from "react";
import GradientBg from "../../components/Backgrounds/GradientBg-1";

const About = () => {
  return (
    <section className=" border-b-3 border-secondary-gray relative max-w-[1440px] mx-auto px-4 py-8 flex flex-col space-y-10 md:px-6 md:py-16 md:min-h-screen">
      <GradientBg
        colors={["#8200DB"]}
        size={300}
        blur={"blur-3xl"}
        position="top-12 left-10"
        className="z-0 opacity-75"
      />
      <h2 className=" text-9xl mt-12">About</h2>
      <div className="flex flex-col items-end">
        <p
          className="
    mt-4 md:mt-8 
     
    text-2xl md:text-5xl 
    text-gray-700 
    max-w-4xl 
  "
        >
          Launch apps, storage, and GPU workloads in any cloud with just a few
          clicks. Scale instantly and manage everything through one streamlined,
          unified platform.Scale instantly and manage everything through one
          streamlined, unified platform.
        </p>
      </div>
    </section>
  );
};

export default About;
