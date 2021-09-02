import * as React from "react";
import styled from "styled-components";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface SmallCircleImageProps {
  image: IGatsbyImageData;
  altTag: string;
  titleTag: string;
}

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  background: var(--medium-blue);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  box-shadow: 0 0 0 4px var(--accent-blue, hsl(193, 91%, 56%)),
    0 0 20px 2px hsla(240, 0%, 0%, 0.3);
  overflow: hidden;

  transform: translate(-50%, -50%);
`;

export const SmallCircleImage: React.FC<SmallCircleImageProps> = ({
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
