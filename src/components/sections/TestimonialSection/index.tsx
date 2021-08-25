import * as React from "react";
import styled from "styled-components";

import { TriangleOverlay } from "../../svgs/overlays/TriangleOverlay";
import { TestimonialCard } from "../../cards/Testimonial";
import { Testimonial } from "../../../types/content";

interface TestimonialSectionProps {
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
  height: 800px;
`;

const CardsContainer = styled.div`
  padding: 0 12px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
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
      <CardsContainer>{cards}</CardsContainer>
      <Triangle location="top" height={26} />
      <Triangle location="bottom" height={26} />
    </SectionContainer>
  );
};
