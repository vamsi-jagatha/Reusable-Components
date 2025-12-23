import React, { useState } from "react";
import Faq from "../../components/faq/Faq-2";

const projectsData = [
  {
    title: "Role-Based Admin Dashboard",
    link: "https://example.com/admin-dashboard",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
  },
  {
    title: "Online Booking & Reservation System",
    link: "https://example.com/booking-system",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
  },
  {
    title: "Marketing Landing Page",
    link: "https://example.com/landing-page",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200",
  },
  {
    title: "Vendor Management Portal",
    link: "https://example.com/vendor-portal",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200",
  },
  {
    title: "Customer Support Ticketing System",
    link: "https://example.com/ticketing-system",
    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200",
  },
  {
    title: "Analytics & Reporting Platform",
    link: "https://example.com/analytics-platform",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=1200",
  },
];
const Project = () => {
  const [activeImage, setActiveImage] = useState(projectsData[0].image);

  return (
    <div className="relative max-w-[1440px] mx-auto px-4 py-8 flex flex-col space-y-16 md:space-y-4 md:px-6 md:py-10 md:min-h-screen">
      <h2 className="text-5xl md:text-8xl text-purple-600/40 font-ragnear select-none pointer-events-none">
        Projects
      </h2>

      <div className="flex flex-col md:flex-row md:mt-8  md:gap-12">
        {/* IMAGE COLUMN */}
        <div className="flex-1 relative h-[420px] overflow-hidden rounded-lg">
          <img
            key={activeImage}
            src={activeImage}
            alt="Project preview"
            className="
              absolute inset-0 w-full h-full object-cover
              transition-opacity duration-500 ease-out
              opacity-100
            "
          />
        </div>

        {/* FAQ COLUMN */}
        <div className="flex-1">
          <Faq
            description="A selection of projects I’ve built and worked on."
            projects={projectsData}
            onHover={setActiveImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
