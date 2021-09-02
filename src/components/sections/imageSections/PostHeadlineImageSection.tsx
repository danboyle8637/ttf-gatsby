import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { ImageHeadlineOverlay } from "../../images/ImageHeadlineOverlay";
import { PostHeadlineImageData } from "../../../types/pages";
import { useMatchMedia } from "../../../hooks/useMatchMedia";
import { sizes } from "../../../styles/sizes";

const SectionContainer = styled.section`
  padding: 40px 0 80px 0;
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
  const data: PostHeadlineImageData = useStaticQuery(graphql`
    query {
      pageImages: sanityMarketingPage(headline1: { eq: "Home Page" }) {
        standardImage1 {
          string1
          string2
          standardImage1 {
            string1
            string2
            standardImage1 {
              asset {
                gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              }
            }
          }
          standardImage2 {
            string1 {
              asset {
                gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              }
            }
          }
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
          image={
            data.pageImages.standardImage1.standardImage1.standardImage1.asset
              .gatsbyImageData
          }
          altTag={data.pageImages.standardImage1.string2}
          titleTag={data.pageImages.standardImage1.string1}
          headline={data.headlines.frontmatter.image1Headline}
          headlineWidth={isAboveMobile ? 80 : 100}
        />
      </ImageContainer>
      <ImageContainer style={image2Styles}>
        <ImageHeadlineOverlay
          image={
            data.pageImages.standardImage1.standardImage2.string1.asset
              .gatsbyImageData
          }
          altTag={data.pageImages.standardImage1.standardImage1.string2}
          titleTag={data.pageImages.standardImage1.standardImage1.string1}
          headline={data.headlines.frontmatter.image2Headline}
          textAlignHeadline="end"
        />
      </ImageContainer>
    </SectionContainer>
  );
};
