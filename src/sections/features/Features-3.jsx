import React from "react";
import { Rocket, Code, ServerCog } from "lucide-react";

const FEATURES = [
  {
    title: "Modular Design",
    description:
      "Each component is built to be independent, composable, and easy to swap without breaking the system.",
    icon: <Rocket size={28} />,
  },
  {
    title: "Scalable Architecture",
    description:
      "Designed to grow with your product — add features without rewriting existing components.",
    icon: <ServerCog size={28} />,
  },
  {
    title: "Developer Friendly",
    description:
      "Clean APIs, predictable props, and consistent patterns that reduce cognitive load.",
    icon: <Code size={28} />,
  },
];

const Features = () => {
  return (
    <div className="min-h-screen max-w-[1440px] mx-auto p-5 md:p-25">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14 gap-4">
        <div>
          <h2 className="text-6xl font-semibold">Cycle Platform:</h2>
        </div>
        <p className="text-lg text-gray-400">Reusable Components</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURES.map((feature, index) => (
          <div
            key={index}
            className="
              aspect-square
              rounded-3xl
              p-8
              bg-gray-900/60
              backdrop-blur
              border border-gray-800
              hover:border-gray-600
              transition
              flex flex-col
            "
          >
            <div className="mb-6 text-indigo-400">{feature.icon}</div>

            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>

            <p className="text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
