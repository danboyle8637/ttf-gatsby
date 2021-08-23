import React from "react";
import styled from "styled-components";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import { MainPageHeadline } from "../../styles/typography";
import { ImageOverlay } from "../../styles/images";
import { sizes } from "../../styles/sizes";

type TextAlignHeadline = "start" | "end";

interface ImageHeadlineOverlyProps {
  image: IGatsbyImageData;
  altTag: string;
  titleTag: string;
  headline: string;
  textAlignHeadline?: TextAlignHeadline;
  headlineWidth?: number;
}

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  max-width: 680px;
  isolation: isolate;
  overflow: hidden;
  ${sizes.aboveMobile} {
    border-radius: 20px;
    box-shadow: 0 2px 40px 8px hsla(240, 0%, 0%, 0.2);
  }
`;

const Image = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
`;

const HeadlineContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: start;
  align-self: end;
  padding: 20px;
  text-align: var(--text-align-headline, start);
  width: var(--headline-width, 100%);
  z-index: 2;
`;

export const ImageHeadlineOverlay: React.FC<ImageHeadlineOverlyProps> = ({
  image,
  altTag,
  titleTag,
  headline,
  textAlignHeadline,
  headlineWidth,
}) => {
  const styles = {
    "--text-align-headline": textAlignHeadline === "end" ? "end" : "start",
    "--headline-width": headlineWidth ? `${headlineWidth}%` : "100%",
  } as React.CSSProperties;

  return (
    <ImageContainer>
      <Image>
        <GatsbyImage image={image} alt={altTag} title={titleTag} />
      </Image>
      <ImageOverlay />
      <HeadlineContainer style={styles}>
        <MainPageHeadline>{headline}</MainPageHeadline>
      </HeadlineContainer>
    </ImageContainer>
  );
};
