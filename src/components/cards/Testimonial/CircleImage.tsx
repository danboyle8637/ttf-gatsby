import * as React from "react";
import styled from "styled-components";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface CircleImageProps {
  image: IGatsbyImageData;
  altTag: string;
  titleTag: string;
}

const ImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  background: var(--medium-blue);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  box-shadow: 0 0 0 4px var(--accent-blue);
  overflow: hidden;
  transform: translateY(-50%);
`;

export const CircleImage: React.FC<CircleImageProps> = ({
  image,
  altTag,
  titleTag,
}) => {
  return (
    <ImageContainer>
      <GatsbyImage image={image} alt={altTag} title={titleTag} />
    </ImageContainer>
  );
};
