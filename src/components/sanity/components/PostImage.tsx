import * as React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import styled from "styled-components";

interface PostImageProps {
  imageData: IGatsbyImageData;
  altTag: string;
  titleTag: string;
}

const ImageContainer = styled.div`
  border-radius: 20px;
  width: 100%;
  box-shadow: 0 0 0 6px var(--accent-blue-dark);
  overflow: hidden;
`;

export const PostImage: React.FC<PostImageProps> = ({
  imageData,
  altTag,
  titleTag,
}) => {
  return (
    <ImageContainer>
      <GatsbyImage image={imageData} alt={altTag} title={titleTag} />
    </ImageContainer>
  );
};
