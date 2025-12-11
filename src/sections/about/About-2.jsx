import React from "react";
import GradientBg from "../../components/Backgrounds/GradientBg-1";
import Typewriter from "../../components/gsap/Typewriter";
import Timeline from "../../components/timelines/Timeline-1";

const About = () => {
  const timelineItems = [
    {
      year: "2019",
      title: "Foundation Year",
      description:
        "The platform began as a simple infrastructure toolkit focused on automating cloud deployments. Our early architecture emphasized modularity and performance, setting the foundation for future scaling.",
    },
    {
      year: "2021",
      title: "Global Expansion",
      description:
        "We introduced multi-cloud orchestration, enabling teams to deploy across AWS, Azure, and GCP with unified automation. This milestone unlocked true cloud-agnostic infrastructure for thousands of users.",
    },
    {
      year: "2023",
      title: "AI & GPU Era",
      description:
        "GPU-powered workloads, AI pipelines, and real-time observability were added—transforming the platform into a high-performance compute hub built for modern engineering teams pushing the limits of scale and automation.",
    },
  ];
  return (
    <section className=" relative max-w-[1440px] mx-auto px-4 py-8 flex flex-col space-y-16 md:px-6 md:py-10 md:min-h-screen">
      <GradientBg
        colors={["#8200DB"]}
        size={250}
        blur={"blur-3xl"}
        position="top-12 left-10"
        className="z-0 opacity-75"
      />

      {/* Heading */}
      <h2 className="text-8xl mt-12">About</h2>

      {/* Typewriter Intro */}
      <Typewriter
        text={`We build a unified cloud platform that removes the complexity of launching and scaling modern workloads. Deploy applications, storage, and GPU-powered compute across any cloud with a frictionless, streamlined experience. Manage everything from a single dashboard, scale on demand, and eliminate the operational overhead that slows teams down.
        `}
        speed={0.02}
        showCursor={true}
        cursorChar=""
        className="text-2xl  md:text-5xl font-semibold mb-0 text-gray-500 indent-32 md:indent-64 leading-tight"
      />

      <Timeline items={timelineItems} />
    </section>
  );
};

export default About;
