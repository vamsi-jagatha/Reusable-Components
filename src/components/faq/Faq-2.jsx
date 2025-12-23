import React from "react";
import { ArrowRight } from "lucide-react";

const Faq = ({ description = "", projects = [], onHover }) => {
  return (
    <section className="w-full mx-auto">
      {description && <p className="mb-4 text-gray-600">{description}</p>}

      <div>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => onHover(project.image)}
            className="
              flex items-center justify-between
              border-b-2 border-gray-800
              py-4
              transition-all duration-300 ease-out
              hover:bg-gray-50 hover:text-black hover:px-3
            "
          >
            <h3 className="text-xl md:text-2xl font-semibold">
              {project.title}
            </h3>

            <ArrowRight
              size={16}
              className="-rotate-45 transition-transform duration-300 hover:translate-x-1"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Faq;
