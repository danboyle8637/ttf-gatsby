import * as React from "react";
import styled from "styled-components";

import { MainPageHeadline } from "../../../styles/typography";
import { TriangleOverlay } from "../../svgs/overlays/TriangleOverlay";
import { TestimonialCard } from "../../cards/Testimonial";
import { Testimonial } from "../../../types/content";

interface TestimonialSectionProps {
  headline: string;
  testimonials: Testimonial[];
}

const SectionContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  background: var(--dark-purple);
  width: 100%;
`;

const ContentContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  padding: 100px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 60px;
  justify-items: start;
  width: 100%;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  width: 100%;
`;

const Triangle = styled(TriangleOverlay)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
`;

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  headline,
  testimonials,
}) => {
  const cards = testimonials.map((card) => {
    const id = card.id;
    const testimonial = card.html;
    const headline = card.frontmatter.headline;
    const image = card.frontmatter.image.childImageSharp.gatsbyImageData;

    return (
      <TestimonialCard
        key={id}
        headline={headline}
        image={image}
        testimonial={testimonial}
        altTag="alt tag"
        titleTag="title tag"
      />
    );
  });

  return (
    <SectionContainer>
      <Triangle location="top" height={26} />
      <Triangle location="bottom" height={26} />
      <ContentContainer>
        <MainPageHeadline>{headline}</MainPageHeadline>
        <CardsContainer>{cards}</CardsContainer>
      </ContentContainer>
    </SectionContainer>
  );
};
