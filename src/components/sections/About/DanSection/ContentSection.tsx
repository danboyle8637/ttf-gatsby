import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { BlockContent } from "../../../sanity/components/BlockContent";
import { blockContentSerializer } from "../../../sanity/components/Serializer";
import { DanCopy } from "../../../../types/pages";
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
  const data: DanCopy = useStaticQuery(graphql`
    query {
      danCopy: sanityMarketingPage(headline1: { eq: "About Page" }) {
        copyBlock3 {
          _rawContent
        }
      }
    }
  `);

  return (
    <SectionContainer>
      <BlockContent
        blocks={data.danCopy.copyBlock3._rawContent}
        serializer={blockContentSerializer}
      />
    </SectionContainer>
  );
};
