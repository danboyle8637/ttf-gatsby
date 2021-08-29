import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import { MobileLayout } from "./layouts/MobileLayout";
import { TabletLayout } from "./layouts/TabletLayout";
import { IpadProAndAboveLayout } from "./layouts/IpadProAndAboveLayout";
import { useMatchMedia } from "../../../hooks/useMatchMedia";
import { WhoAreWeSectionData } from "../../../types/sections";

export interface WhoWeAreSectionProps {
  headline: string;
  imageData: IGatsbyImageData;
  altTag: string;
  titleTag: string;
}

export const WhoAreWeSection = () => {
  const data: WhoAreWeSectionData = useStaticQuery(graphql`
    query {
      mobileImage: file(
        relativePath: { eq: "train-like-athlete-group-720x720.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      aboveMobileImage: file(
        relativePath: { eq: "train-like-athlete-group-1440x700.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      headline: markdownRemark(frontmatter: { title: { eq: "who-are-we" } }) {
        frontmatter {
          headline
        }
      }
    }
  `);

  const isAboveMobile = useMatchMedia();
  const isAboveTablet = useMatchMedia(960);

  const activeLayout = isAboveTablet ? (
    <IpadProAndAboveLayout
      headline={data.headline.frontmatter.headline}
      imageData={data.mobileImage.childImageSharp.gatsbyImageData}
      altTag="Group of members after outdoor workout"
      titleTag="Smiling After Outdoor Workout"
    />
  ) : isAboveMobile && !isAboveTablet ? (
    <TabletLayout
      headline={data.headline.frontmatter.headline}
      imageData={data.mobileImage.childImageSharp.gatsbyImageData}
      altTag="Group of members after outdoor workout"
      titleTag="Smiling After Outdoor Workout"
    />
  ) : (
    <MobileLayout
      headline={data.headline.frontmatter.headline}
      imageData={data.mobileImage.childImageSharp.gatsbyImageData}
      altTag="Group of members after outdoor workout"
      titleTag="Smiling After Outdoor Workout"
    />
  );

  return <>{activeLayout}</>;
};
