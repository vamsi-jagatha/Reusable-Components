import React from "react";
import Cards from "../../components/cards/Cards-5";
import { Bus, ArrowUp, Server, Cpu, Cloud, Wrench } from "lucide-react";

const Features = () => {
  const cardsList = [
    {
      icon: Bus,
      sideIcon: ArrowUp,
      sideIconLink: "#",
      title: "Transport Efficiency",
      description: "Seamlessly move workloads across environments.",
      bgColor: "bg-purple-500/40",
      textColor: "text-white",
    },
    {
      icon: Cloud,
      sideIcon: ArrowUp,
      sideIconLink: "#",
      title: "Cloud Deployments",
      description: "Deploy services globally in minutes.",
      bgColor: "bg-purple-500/40",
      textColor: "text-white",
    },
    {
      icon: Server,
      sideIcon: ArrowUp,
      sideIconLink: "#",
      title: "Server Management",
      description: "Powerful infrastructure with zero overhead.",
      bgColor: "bg-purple-500/40",
      textColor: "text-white",
    },
    {
      icon: Cpu,
      sideIcon: ArrowUp,
      sideIconLink: "#",
      title: "Compute Optimized",
      description: "Scale compute power effortlessly.",
      bgColor: "bg-purple-500/40",
      textColor: "text-white",
    },
    {
      icon: Wrench,
      sideIcon: ArrowUp,
      sideIconLink: "#",
      title: "Maintenance Tools",
      description: "Smart automation for daily operations.",
      bgColor: "bg-purple-500/40",
      textColor: "text-white",
    },
    {
      icon: Bus,
      sideIcon: ArrowUp,
      sideIconLink: "#",
      title: "Logistics & Ops",
      description: "Stay ahead with optimized system flows.",
      bgColor: "bg-purple-500/40",
      textColor: "text-white",
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-4 py-8 flex flex-col space-y-10 md:px-6 md:py-16 md:min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl max-w-2xl mx-auto md:text-4xl lg:text-5xl   ">
          Efficient and Integrated Deploying Services
        </h1>
        <p className="py-3 md:py-6 text-sm text-tertiary-gray">
          Simplify operations with our efficient, quality-focused services{" "}
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cardsList.map((card, index) => (
            <Cards key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
