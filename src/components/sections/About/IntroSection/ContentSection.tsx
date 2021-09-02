import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { BlockContent } from "../../../sanity/components/BlockContent";
import { blockContentSerializer } from "../../../sanity/components/Serializer";
import { AboutCopy } from "../../../../types/pages";
import { sizes } from "../../../../styles/sizes";

const SectionContainer = styled.div`
  padding: 80px 12px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  ${sizes.aboveMobile} {
    padding: 120px 0;
    width: 600px;
  }
  ${sizes.aboveTablet} {
    width: 800px;
  }
`;

export const ContentSection: React.FC = () => {
  const data: AboutCopy = useStaticQuery(graphql`
    query {
      aboutCopy: sanityMarketingPage(headline1: { eq: "About Page" }) {
        copyBlock1 {
          _rawContent
        }
      }
    }
  `);

  return (
    <SectionContainer>
      <BlockContent
        blocks={data.aboutCopy.copyBlock1._rawContent}
        serializer={blockContentSerializer}
      />
    </SectionContainer>
  );
};
