import * as React from "react";
import styled from "styled-components";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import { ImageOverlay } from "../../../styles/images";

interface AboveMobileSectionImageProps {
  imageData: IGatsbyImageData;
  altTag: string;
  titleTag: string;
}

const ImageContainer = styled.div`
  justify-self: var(--image-justify, unset);
  align-self: var(--image-align, unset);
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  border-radius: 20px;
  width: var(--image-width);
  max-width: 680px;
  transform: var(--image-transform, unset);
  box-shadow: 0 1px 40px 8px hsla(0, 0%, 0%, 0.25);
  overflow: hidden;
`;

const Image = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
`;

export const AboveMobileSectionImage: React.FC<AboveMobileSectionImageProps> =
  ({ imageData, altTag, titleTag }) => {
    return (
      <ImageContainer>
        <Image>
          <GatsbyImage image={imageData} alt={altTag} title={titleTag} />
        </Image>
        <ImageOverlay />
      </ImageContainer>
    );
  };
