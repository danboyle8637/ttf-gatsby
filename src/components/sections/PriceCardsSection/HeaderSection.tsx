import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { TTFLogo } from "../../svgs/TTFLogo";
import { LogoSubheadline } from "../../../styles/typography";
import { MainPageHeadline } from "../../../styles/typography";
import { BlockContent } from "../../sanity/components/BlockContent";
import { blockContentSerializer } from "../../sanity/components/Serializer";
import { PriceHeaderData } from "../../../types/pages";
import { sizes } from "../../../styles/sizes";

const SectionContainer = styled.section`
  padding: 80px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: center;
  width: 100%;
  ${sizes.aboveMobile} {
    width: 660px;
  }
  ${sizes.aboveTablet} {
    width: 800px;
  }
`;

const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 12px;
  justify-items: center;
  width: 100%;
`;

const Logo = styled(TTFLogo)`
  width: 300px;
`;

export const HeaderSection = () => {
  const data: PriceHeaderData = useStaticQuery(graphql`
    query {
      pricingCopy: sanityMarketingPage(headline1: { eq: "Pricing Page" }) {
        copyBlock1 {
          headline
          _rawContent
        }
      }
    }
  `);

  return (
    <SectionContainer>
      <LogoContainer>
        <Logo gradientId="pricingPageLogo" />
        <LogoSubheadline>Simple Pricing Options</LogoSubheadline>
      </LogoContainer>
      <MainPageHeadline>
        {data.pricingCopy.copyBlock1.headline}
      </MainPageHeadline>
      <BlockContent
        blocks={data.pricingCopy.copyBlock1._rawContent}
        serializer={blockContentSerializer}
      />
    </SectionContainer>
  );
};
