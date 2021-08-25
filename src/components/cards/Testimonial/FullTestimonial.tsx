import * as React from "react";
import styled from "styled-components";
import { IGatsbyImageData } from "gatsby-plugin-image";

import { SmallCircleImage } from "./SmallCircleImage";
import { MainPageHeadline } from "../../../styles/typography";

interface FullTestimonailProps {
  image: IGatsbyImageData;
  altTag: string;
  titleTag: string;
  headline: string;
  testimonial: string;
}

const TestimonialContainer = styled.div`
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  justify-items: start;
  width: 100%;
`;

export const FullTestimonial: React.FC<FullTestimonailProps> = ({
  image,
  altTag,
  titleTag,
  headline,
  testimonial,
}) => {
  return (
    <TestimonialContainer>
      <SmallCircleImage image={image} altTag={altTag} titleTag={titleTag} />
      <MainPageHeadline>{headline}</MainPageHeadline>
      <div dangerouslySetInnerHTML={{ __html: testimonial }} />
    </TestimonialContainer>
  );
};
