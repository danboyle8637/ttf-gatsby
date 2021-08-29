import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import { MobileLayout } from "./layouts/MobileLayout";
import { TabletLayout } from "./layouts/TabletLayout";
import { IpadProAndAboveLayout } from "./layouts/IpadProAndAboveLayout";
import { useMatchMedia } from "../../../hooks/useMatchMedia";
import { HeaderImage } from "../../../types/images";

export interface InStudioWorkoutSectionProps {
  headline1: string;
  headline2: string;
  imageData: IGatsbyImageData;
  altTag: string;
  titleTag: string;
}

export const InStudioWorkoutSection = () => {
  const data: HeaderImage = useStaticQuery(graphql`
    query {
      mobileImage: file(
        relativePath: { eq: "small-group-training-720x720.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      aboveMobileImage: file(
        relativePath: { eq: "small-group-training-1440x700.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      headline: markdownRemark(
        frontmatter: { title: { eq: "in-studio-group-training" } }
      ) {
        frontmatter {
          headline1
          headline2
        }
      }
    }
  `);

  const isAboveMobile = useMatchMedia();
  const isAboveTablet = useMatchMedia(960);

  const activeLayout = isAboveTablet ? (
    <IpadProAndAboveLayout
      headline1={data.headline.frontmatter.headline1}
      headline2={data.headline.frontmatter.headline2}
      imageData={data.mobileImage.childImageSharp.gatsbyImageData}
      altTag="Group of members doing step ups on a box"
      titleTag="Steps Ups On a Box"
    />
  ) : isAboveMobile && !isAboveTablet ? (
    <TabletLayout
      headline1={data.headline.frontmatter.headline1}
      headline2={data.headline.frontmatter.headline2}
      imageData={data.mobileImage.childImageSharp.gatsbyImageData}
      altTag="Group of members doing step ups on a box"
      titleTag="Steps Ups On a Box"
    />
  ) : (
    <MobileLayout
      headline1={data.headline.frontmatter.headline1}
      headline2={data.headline.frontmatter.headline2}
      imageData={data.mobileImage.childImageSharp.gatsbyImageData}
      altTag="Group of members doing step ups on a box"
      titleTag="Steps Ups On a Box"
    />
  );

  return <>{activeLayout}</>;
};
