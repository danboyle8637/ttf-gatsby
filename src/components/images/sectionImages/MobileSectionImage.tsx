import * as React from "react";
import styled from "styled-components";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import { ImageOverlay } from "../../../styles/images";
import { TriangleOverlay } from "../../svgs/overlays/TriangleOverlay";

interface SectionHeaderImageProps {
  mobileImage: IGatsbyImageData;
  altTag: string;
  titleTag: string;
}

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  z-index: -1;
  overflow: hidden;
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

export const MobileSectionImage: React.FC<SectionHeaderImageProps> = ({
  mobileImage,
  altTag,
  titleTag,
}) => {
  return (
    <ImageContainer>
      <HeaderImage>
        <GatsbyImage image={mobileImage} alt={altTag} title={titleTag} />
      </HeaderImage>
      <ImageOverlay />
      <Triangle location="top" height={26} />
    </ImageContainer>
  );
};
