import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { BlockContent } from "../../sanity/components/BlockContent";
import { blockContentSerializer } from "../../sanity/components/Serializer";
import { InStudioTrainingCopyData } from "../../../types/pages";
import { sizes } from "../../../styles/sizes";

const SectionContainer = styled.div`
  padding: 60px 12px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  ${sizes.aboveMobile} {
    padding: 0;
  }
`;

export const ContentSection = () => {
  const data: InStudioTrainingCopyData = useStaticQuery(graphql`
    query {
      inStudioCopy: sanityMarketingPage(headline1: { eq: "Home Page" }) {
        copyBlock2 {
          _rawContent
        }
      }
    }
  `);

  return (
    <SectionContainer>
      <BlockContent
        blocks={data.inStudioCopy.copyBlock2._rawContent}
        serializer={blockContentSerializer}
      />
    </SectionContainer>
  );
};
