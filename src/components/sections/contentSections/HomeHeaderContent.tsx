import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { MainPageHeadline } from "../../../styles/typography";
import { PrimaryButton } from "../../buttons/PrimaryButton";
import { HeaderSectionHeadlineContent } from "../../../types/content";
import { sizes } from "../../../styles/sizes";

const SectionContainer = styled.div`
  padding: 80px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: start;
  width: 100%;
  max-width: 800px;
  ${sizes.aboveMobile} {
    justify-items: center;
  }
`;

export const HomeHeaderContentSection = () => {
  const data: HeaderSectionHeadlineContent = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "home-header-sequence" } }) {
        frontmatter {
          headline1
        }
      }
    }
  `);

  return (
    <SectionContainer>
      <MainPageHeadline>
        {data.markdownRemark.frontmatter.headline1}
      </MainPageHeadline>
      <PrimaryButton>FREE 14 Day Trial!</PrimaryButton>
    </SectionContainer>
  );
};
