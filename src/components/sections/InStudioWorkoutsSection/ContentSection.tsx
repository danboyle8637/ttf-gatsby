import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { MarkdownContent } from "../../../types/content";

const SectionContainer = styled.div`
  padding: 60px 12px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const ContentSection = () => {
  const data: MarkdownContent = useStaticQuery(graphql`
    query {
      content: markdownRemark(
        frontmatter: { title: { eq: "in-studio-group-training" } }
      ) {
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
