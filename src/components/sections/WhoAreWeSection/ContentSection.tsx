import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { MarkdownContent } from "../../../types/content";
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
  const data: MarkdownContent = useStaticQuery(graphql`
    query {
      content: markdownRemark(frontmatter: { title: { eq: "who-are-we" } }) {
        html
      }
    }
  `);

  return (
    <SectionContainer>
      <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
    </SectionContainer>
  );
};
