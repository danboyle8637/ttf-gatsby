import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { ImageHeadlineOverlay } from "../../images/ImageHeadlineOverlay";
import { DoubleImageSectionData } from "../../../types/images";
import { useMatchMedia } from "../../../hooks/useMatchMedia";
import { sizes } from "../../../styles/sizes";

const SectionContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  ${sizes.aboveMobile} {
    padding: 0 24px;
    grid-template-rows: 1fr;
    height: 500px;
  }
  ${sizes.aboveTablet} {
    width: 960px;
    height: 600px;
  }
`;

const ImageContainer = styled.div`
  justify-self: var(--justify-image, center);
  align-self: var(--align-image, start);
  z-index: var(--image-z-index, unset);
  ${sizes.aboveMobile} {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    width: 400px;
  }
  ${sizes.aboveTablet} {
    width: 500px;
  }
`;

export const PostHeadlineImageSection = () => {
  const data: DoubleImageSectionData = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "lisa-battle-ropes-720x720.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      image2: file(relativePath: { eq: "jessica-flex-720x720.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      headlines: markdownRemark(
        frontmatter: { title: { eq: "home-header-sequence" } }
      ) {
        frontmatter {
          image1Headline
          image2Headline
        }
      }
    }
  `);

  const isAboveMobile = useMatchMedia();

  const image1Styles = {
    "--justify-image": isAboveMobile ? "start" : "center",
    "--align-image": isAboveMobile ? "start" : "start",
  } as React.CSSProperties;

  const image2Styles = {
    "--justify-image": isAboveMobile ? "end" : "center",
    "--align-image": isAboveMobile ? "end" : "start",
  } as React.CSSProperties;

  return (
    <SectionContainer>
      <ImageContainer style={image1Styles}>
        <ImageHeadlineOverlay
          image={data.image1.childImageSharp.gatsbyImageData}
          altTag="Lisa rocking out battle ropes"
          titleTag="Battle Ropes for Cardio"
          headline={data.headlines.frontmatter.image1Headline}
          headlineWidth={isAboveMobile ? 80 : 100}
        />
      </ImageContainer>
      <ImageContainer style={image2Styles}>
        <ImageHeadlineOverlay
          image={data.image2.childImageSharp.gatsbyImageData}
          altTag="Jessica flexing during a tough workout"
          titleTag="Flexing And Feeling Strong"
          headline={data.headlines.frontmatter.image2Headline}
          textAlignHeadline="end"
        />
      </ImageContainer>
    </SectionContainer>
  );
};
