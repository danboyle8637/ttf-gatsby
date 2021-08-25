import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { IGatsbyImageData } from "gatsby-plugin-image";

import { CircleImage } from "./CircleImage";
import { SmallArrowButton } from "../../buttons/SmallArrowButton";
import { TestimonialHeadline } from "../../../styles/typography";
import { Portal } from "../../shared/Portal";
import { ToastOverlay } from "../../overlays/ToastOverlay";
import { FullTestimonial } from "./FullTestimonial";

interface TestimonialCardProps {
  image: IGatsbyImageData;
  altTag: string;
  titleTag: string;
  headline: string;
  testimonial: string;
}

const CardContainer = styled.div`
  position: relative;
  padding-left: 50px;
  width: 100%;
  max-width: 360px;
`;

const ContentContainer = styled.div`
  position: relative;
  padding: 20px 12px 20px 80px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 12px;
  justify-items: center;
  background-color: var(--accent-blue-dark);
  border-radius: 12px;
  width: 100%;
`;

const HeadlineContainer = styled.div`
  justify-self: start;
  width: 100%;
`;

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  altTag,
  titleTag,
  headline,
  testimonial,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleTestimonial = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <>
      <CardContainer>
        <ContentContainer>
          <HeadlineContainer>
            <TestimonialHeadline>{headline}</TestimonialHeadline>
          </HeadlineContainer>
          <SmallArrowButton handleClick={handleToggleTestimonial}>
            Read More
          </SmallArrowButton>
        </ContentContainer>
        <CircleImage image={image} altTag={altTag} titleTag={titleTag} />
      </CardContainer>
      <Portal>
        <ToastOverlay isOpen={isOpen} toggleOverlay={handleToggleTestimonial}>
          <FullTestimonial
            image={image}
            altTag={altTag}
            titleTag={titleTag}
            headline={headline}
            testimonial={testimonial}
          />
        </ToastOverlay>
      </Portal>
    </>
  );
};
