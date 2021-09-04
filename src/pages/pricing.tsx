import * as React from "react";
import { graphql } from "gatsby";

import { HeaderSection } from "../components/sections/PriceCardsSection/HeaderSection";
import { PriceCardSection } from "../components/sections/PriceCardsSection";
import { CallToActionSection } from "../components/sections/CallToActionSection";
import { Seo } from "../components/content/Seo";
import { PricePageData } from "../types/pages";

const PricingPage: React.FC<PricePageData> = ({ data }) => {
  return (
    <>
      <Seo
        title={data.seo.frontmatter.pageTitle}
        description={data.seo.frontmatter.description}
        socialHeadline={data.socialShareInfo.socialShareInformation.headline1}
        socialDescription={
          data.socialShareInfo.socialShareInformation.description1
        }
        socialImage={
          data.socialShareInfo.socialShareInformation.standardImage1.asset.url
        }
        socialSlug={data.socialShareInfo.socialShareInformation.string1.current}
      />
      <HeaderSection />
      <PriceCardSection />
      <CallToActionSection />
    </>
  );
};

export default PricingPage;

export const contactData = graphql`
  query {
    seo: markdownRemark(frontmatter: { title: { eq: "seo-pricing" } }) {
      frontmatter {
        pageTitle
        description
      }
    }
    socialShareInfo: sanityMarketingPage(headline1: { eq: "Pricing Page" }) {
      socialShareInformation {
        headline1
        string1 {
          current
        }
        description1
        standardImage1 {
          asset {
            url
          }
        }
      }
    }
  }
`;
