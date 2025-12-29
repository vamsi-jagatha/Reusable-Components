import React, { useState } from "react";
import Badge from "../../components/badge/Badge-1";
import ToggleBtn from "../../components/toggle-button/ToggleBtn-1";
import PriceCards from "../../components/pricing-cards/PricingCards-1";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
        <Badge />

        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
          Pricing Plans
        </h1>

        <p className="text-gray-400 text-center max-w-xl">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Toggle */}
        <div className="flex items-center gap-4 text-sm text-gray-300">
          <span className={!isYearly ? "text-white" : ""}>Monthly</span>
          <ToggleBtn checked={isYearly} onChange={setIsYearly} />
          <span className={isYearly ? "text-white" : ""}>Yearly</span>
        </div>

        {/* Cards */}
        <PriceCards billingCycle={isYearly ? "yearly" : "monthly"} />
      </div>
    </section>
  );
};

export default Pricing;
