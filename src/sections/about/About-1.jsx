import React from "react";
import Pin from "../../components/gsap/Pin";

const About = () => {
  return (
    <Pin start="top top" end="+=500">
      <section className="w-full flex flex-col items-center justify-center min-h-screen py-20 px-6 text-primary-white">
        <div className="space-y-10">
          {/* Page Heading */}
          <header className=" text-center ">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-primary-blue to-secondary-blue bg-clip-text text-transparent font-ragnear">
              About Our Reusable Components
            </h1>
          </header>

          {/* Center Large Text */}
          <div className="text-center">
            <p className="text-2xl md:text-4xl text-gray-300 max-w-6xl mx-auto leading-relaxed">
              Build once. Reuse everywhere. Empower your development workflow
              with beautifully designed, fully customizable UI components that
              help you move faster without sacrificing quality. Each component
              is crafted to be flexible, intuitive, and scalable — giving you
              the freedom to create consistent, modern interfaces across every
              project.
            </p>
          </div>
        </div>
      </section>
    </Pin>
  );
};

export default About;
