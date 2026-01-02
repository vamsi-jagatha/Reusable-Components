"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* -------------------------------------------------------------------------- */
/*                               Timeline Data                                */
/* -------------------------------------------------------------------------- */

const EXPERIENCE_TIMELINE = [
  {
    period: "2023 – Present",
    role: "Frontend Developer",
    description:
      "Building scalable, high-performance user interfaces using modern JavaScript frameworks, with a strong focus on animations, accessibility, and user experience.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&h=1200&fit=crop",
  },
  {
    period: "2022 – 2023",
    role: "Junior Web Developer",
    description:
      "Contributed to production-ready web applications, resolved bugs, collaborated with backend teams, and strengthened responsive design practices.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&h=1200&fit=crop",
  },
  {
    period: "2021 – 2022",
    role: "Web Development Intern",
    description:
      "Supported development of internal tools, practiced Git-based workflows, and gained hands-on experience with core web technologies.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&h=1200&fit=crop",
  },
  {
    period: "2020 – 2021",
    role: "Computer Science Student",
    description:
      "Studied programming fundamentals, data structures, and computer science principles that form the backbone of modern software development.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&h=1200&fit=crop",
  },
];

/* -------------------------------------------------------------------------- */
/*                               Timeline Component                            */
/* -------------------------------------------------------------------------- */

const Timeline = ({
  theme = {
    sectionBg: "bg-transparent",
    heading: "text-black",
    intro: "text-black",
    period: "text-black",
    role: "text-gray-700",
    description: "text-gray-500",
    baseLine: "bg-gray-300",
    progressLine: "bg-purple-600",
  },
}) => {
  const timelineSectionRef = useRef(null);
  const progressLineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: timelineSectionRef.current,
            start: "top 30%",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }, timelineSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={`${theme.sectionBg}`}>
      {/* Section Heading */}
      <h2
        className={`font-ragnear text-center pt-12 text-3xl ${theme.heading}`}
      >
        Experience
      </h2>

      <div className="max-w-6xl mx-auto py-6">
        {/* Section Intro */}
        <p
          className={`text-4xl md:text-6xl text-center leading-tight max-w-3xl mx-auto mb-24 ${theme.intro}`}
        >
          My Journey Toward a Sustainable Future
        </p>

        {/* Timeline Wrapper */}
        <div ref={timelineSectionRef} className="relative px-6 md:px-0">
          <div className="relative">
            {/* Timeline Lines */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
              {/* Base Line */}
              <div className={`absolute inset-0 ${theme.baseLine}`} />

              {/* Progress Line */}
              <div
                ref={progressLineRef}
                className={`absolute inset-0 ${theme.progressLine}`}
                style={{ transform: "scaleY(0)" }}
              />
            </div>

            {/* Timeline Items */}
            <div className="relative space-y-22">
              {EXPERIENCE_TIMELINE.map((item, index) => {
                const isReversed = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${
                      isReversed ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div className="w-full md:w-1/2 px-10">
                      <h3 className={`text-2xl font-semibold ${theme.period}`}>
                        {item.period}
                      </h3>

                      <p
                        className={`text-2xl font-ragnear font-medium ${theme.role}`}
                      >
                        {item.role}
                      </p>

                      <p
                        className={`mt-2 text-sm md:text-base leading-relaxed ${theme.description}`}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-1/2  px-10 md:pr-10 pr-0  mt-6 md:mt-0">
                      <div className="bg-white p-1.5 rounded-2xl shadow-lg">
                        <img
                          src={item.image}
                          alt={item.role}
                          className="w-full h-72 object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
