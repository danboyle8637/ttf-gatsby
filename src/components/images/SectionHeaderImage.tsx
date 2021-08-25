import * as React from "react";
import styled from "styled-components";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import { ImageOverlay } from "../../styles/images";
import { TriangleOverlay } from "../svgs/overlays/TriangleOverlay";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import { sizes } from "../../styles/sizes";

interface SectionHeaderImageProps {
  mobileImage: IGatsbyImageData;
  aboveMobileImage: IGatsbyImageData;
  altTag: string;
  titleTag: string;
}

const ImageContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  isolation: isolate;
  z-index: -1;
  overflow: hidden;
  ${sizes.aboveLaptop} {
    border-radius: 0 20px 20px 20px;
  }
`;

const HeaderImage = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
`;

const Triangle = styled(TriangleOverlay)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  z-index: 2;
`;

export const SectionHeaderImage: React.FC<SectionHeaderImageProps> = ({
  mobileImage,
  aboveMobileImage,
  altTag,
  titleTag,
}) => {
  const isAboveMobile = useMatchMedia();

  const imageData = isAboveMobile ? aboveMobileImage : mobileImage;

  const triangleHeight = isAboveMobile ? 11 : 26;

  return (
    <ImageContainer>
      <HeaderImage>
        <GatsbyImage image={imageData} alt={altTag} title={titleTag} />
      </HeaderImage>
      <ImageOverlay />
      <Triangle location="top" height={triangleHeight} />
    </ImageContainer>
  );
};
