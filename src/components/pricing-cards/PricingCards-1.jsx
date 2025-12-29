import React from "react";
import PriceCard from "../price-card/PriceCard-1";

const PriceCards = ({ billingCycle }) => {
  return (
    <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3 w-full">
      <PriceCard
        title="Basic"
        priceMonthly={9.99}
        priceYearly={99.99}
        billingCycle={billingCycle}
        features={["Complete Access", "24/7 Support", "Free Updates"]}
      />

      <PriceCard
        title="Pro"
        highlighted
        priceMonthly={19.99}
        priceYearly={199.99}
        billingCycle={billingCycle}
        features={[
          "Everything in Basic",
          "Priority Support",
          "Advanced Customization",
        ]}
      />

      <PriceCard
        title="Enterprise"
        priceMonthly={49.99}
        priceYearly={499.99}
        billingCycle={billingCycle}
        features={["Dedicated Manager", "Custom Integrations", "SLA Support"]}
      />
    </div>
  );
};

export default PriceCards;
