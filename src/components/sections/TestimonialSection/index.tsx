import * as React from "react";
import styled from "styled-components";

import { MainPageHeadline } from "../../../styles/typography";
import { TriangleOverlay } from "../../svgs/overlays/TriangleOverlay";
import { TestimonialCard } from "../../cards/Testimonial";
import { useMatchMedia } from "../../../hooks/useMatchMedia";
import { SanityTestimonial } from "../../../types/pages";
import { sizes } from "../../../styles/sizes";

interface TestimonialSectionProps {
  headline: string;
  testimonials: SanityTestimonial[];
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
  max-width: 1000px;
  ${sizes.aboveMobile} {
    padding: 100px 24px;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  width: 100%;
  ${sizes.aboveMobile} {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min-content;
    column-gap: 20px;
    row-gap: 40px;
    justify-items: center;
  }
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
  const isAboveMobile = useMatchMedia();
  const isAboveTablet = useMatchMedia(960);
  const isAboveIpadPro = useMatchMedia(1100);

  const cards = testimonials.map((card) => {
    const id = card.id;
    const testimonial = card._rawTestimonialBody;
    const headline = card.testimonialHeadline;
    const image = card.customerPicture.asset.gatsbyImageData;

    return (
      <TestimonialCard
        key={id}
        headline={headline}
        image={image}
        testimonial={testimonial}
        altTag="A picture of a happy customer and member"
        titleTag="This Time Fitness Member"
      />
    );
  });

  const triangleHeight = isAboveIpadPro
    ? 6
    : isAboveTablet && !isAboveIpadPro
    ? 10
    : isAboveMobile && !isAboveTablet
    ? 16
    : 26;

  return (
    <SectionContainer>
      <Triangle location="top" height={triangleHeight} />
      <Triangle location="bottom" height={triangleHeight} />
      <ContentContainer>
        <MainPageHeadline>{headline}</MainPageHeadline>
        <CardsContainer>{cards}</CardsContainer>
      </ContentContainer>
    </SectionContainer>
  );
};
