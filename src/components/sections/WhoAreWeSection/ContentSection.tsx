import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { BlockContent } from "../../sanity/components/BlockContent";
import { blockContentSerializer } from "../../sanity/components/Serializer";
import { WhoWeAreCopy } from "../../../types/pages";
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

export const ContentSection: React.FC = () => {
  const data: WhoWeAreCopy = useStaticQuery(graphql`
    query {
      whoWeAreCopy: sanityMarketingPage(headline1: { eq: "Home Page" }) {
        copyBlock1 {
          _rawContent
        }
      }
    }
  `);

  console.log(data);

  return (
    <SectionContainer>
      <BlockContent
        blocks={data.whoWeAreCopy.copyBlock1._rawContent}
        serializer={blockContentSerializer}
      />
    </SectionContainer>
  );
};
