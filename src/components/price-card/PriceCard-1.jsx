import React from "react";
import { Sparkles } from "lucide-react";
import Button from "../Buttons/Button-1";

const PriceCard = ({
  title = "Basic Plan",
  description = "Perfect for individuals starting out.",
  priceMonthly = 9.99,
  priceYearly = 99.99,
  features = [],
  billingCycle = "monthly",
  highlighted = false,
}) => {
  const price = billingCycle === "yearly" ? priceYearly : priceMonthly;
  const period = billingCycle === "yearly" ? "year" : "month";

  return (
    <div
      className={`
        relative
        rounded-3xl
        border
        border-white/10
        bg-[#0b0b0b]
        p-6
        shadow-lg
        transition-transform duration-300
        hover:-translate-y-1
        ${highlighted ? "ring-2 ring-purple-600" : ""}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Sparkles className="text-purple-500" />
        {highlighted && (
          <span className="text-xs px-2 py-1 rounded-full bg-purple-600 text-white">
            Popular
          </span>
        )}
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 mt-1">{description}</p>

      {/* Price */}
      <div className="mt-6 flex items-end gap-2 text-white">
        <span className="text-5xl font-bold">${price}</span>
        <span className="text-gray-400 text-sm">/ {period}</span>
      </div>

      {/* Features */}
      <ul className="mt-6 space-y-2 text-sm text-gray-300">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant="custom"
        height="h-11"
        className="w-full mt-8 bg-purple-600 hover:bg-purple-700"
      >
        Get Started
      </Button>
    </div>
  );
};

export default PriceCard;
