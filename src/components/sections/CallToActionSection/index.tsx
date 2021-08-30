import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { MainPageHeadline } from "../../../styles/typography";
import { LeadForm } from "./LeadForm";
import { FreeClassPassCard } from "../../svgs/FreeClassPassCard";
import { CallToActionData } from "../../../types/content";

const SectionContainer = styled.section`
  position: relative;
  padding: 140px 12px;
  display: flex;
  justify-content: center;
  background-color: var(--accent-blue-dark);
  width: 100%;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  width: 100%;
  max-width: 1000px;
`;

const CardTest = styled(FreeClassPassCard)`
  position: absolute;
  top: 0;
  right: 0;
  width: 240px;
  transform: translate(0px, -40px) rotate(14grad);
`;

const CardShadow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: hsla(0, 0%, 0%, 0.4);
  width: 240px;
  height: 180px;
  filter: blur(20px);
  transform: translate(0px, -40px) rotate(14grad);
`;

export const CallToActionSection = () => {
  const data: CallToActionData = useStaticQuery(graphql`
    query {
      ctaCopy: markdownRemark(
        frontmatter: { title: { eq: "call-to-action-long" } }
      ) {
        html
        frontmatter {
          headline
        }
      }
    }
  `);

  return (
    <SectionContainer>
      <ContentContainer>
        <MainPageHeadline>{data.ctaCopy.frontmatter.headline}</MainPageHeadline>
        <div dangerouslySetInnerHTML={{ __html: data.ctaCopy.html }} />
        <LeadForm />
        <CardShadow />
        <CardTest gradientId="shortCallToActionSection" />
      </ContentContainer>
    </SectionContainer>
  );
};
