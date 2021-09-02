import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { BlockContent } from "../../../sanity/components/BlockContent";
import { blockContentSerializer } from "../../../sanity/components/Serializer";
import { KindalCopy } from "../../../../types/pages";
import { sizes } from "../../../../styles/sizes";

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  ${sizes.aboveMobile} {
    padding: 0;
  }
`;

export const ContentSection: React.FC = () => {
  const data: KindalCopy = useStaticQuery(graphql`
    query {
      kindalCopy: sanityMarketingPage(headline1: { eq: "About Page" }) {
        copyBlock2 {
          _rawContent
        }
      }
    }
  `);

  return (
    <SectionContainer>
      <BlockContent
        blocks={data.kindalCopy.copyBlock2._rawContent}
        serializer={blockContentSerializer}
      />
    </SectionContainer>
  );
};
