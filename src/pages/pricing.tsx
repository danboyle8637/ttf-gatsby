import * as React from "react";

import { HeaderSection } from "../components/sections/PriceCardsSection/HeaderSection";
import { PriceCardSection } from "../components/sections/PriceCardsSection";
import { CallToActionSection } from "../components/sections/CallToActionSection";

const PricingPage = () => {
  return (
    <>
      <HeaderSection />
      <PriceCardSection />
      <CallToActionSection />
    </>
  );
};

export default PricingPage;
