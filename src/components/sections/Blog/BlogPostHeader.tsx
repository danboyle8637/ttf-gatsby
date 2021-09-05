import * as React from "react";
import styled from "styled-components";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import { BlogHeadline } from "../../../styles/typography";
import { sizes } from "../../../styles/sizes";

interface FeatureImageProps {
  featureImage: IGatsbyImageData;
  altTag: string;
  titleTag: string;
  headline: string;
}

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: start;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  ${sizes.aboveLaptop} {
    border-radius: 20px;
  }
`;

export const BlogPostHeader: React.FC<FeatureImageProps> = ({
  featureImage,
  altTag,
  titleTag,
  headline,
}) => {
  return (
    <HeaderContainer>
      <ImageContainer>
        <GatsbyImage image={featureImage} alt={altTag} title={titleTag} />
      </ImageContainer>
      <BlogHeadline>{headline}</BlogHeadline>
    </HeaderContainer>
  );
};
