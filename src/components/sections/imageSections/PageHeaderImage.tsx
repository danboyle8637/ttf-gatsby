import React from "react";
import styled from "styled-components";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import { HeaderLogo } from "./HeaderLogo";
import { ImageOverlay } from "../../../styles/images";
import { Triangle } from "../../cssDrawings/Triangle";
import { useMatchMedia } from "../../../hooks/useMatchMedia";
import { sizes } from "../../../styles/sizes";

interface HomeHeaderProps {
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

const TriangleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;

export const HomeHeader: React.FC<HomeHeaderProps> = ({
  mobileImage,
  aboveMobileImage,
  altTag,
  titleTag,
}) => {
  const isAboveMobile = useMatchMedia();

  const imageData = isAboveMobile ? aboveMobileImage : mobileImage;

  return (
    <>
      <HeaderLogo />
      <ImageContainer>
        <HeaderImage>
          <GatsbyImage image={imageData} alt={altTag} title={titleTag} />
        </HeaderImage>
        <ImageOverlay />
        <TriangleContainer>
          <Triangle />
        </TriangleContainer>
      </ImageContainer>
    </>
  );
};
