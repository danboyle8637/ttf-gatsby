import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import { MobileLayout } from "./layouts/MobileLayout";
import { TabletLayout } from "./layouts/TabletLayout";
import { IpadProAndAboveLayout } from "./layouts/IpadProAndAboveLayout";
import { useMatchMedia } from "../../../hooks/useMatchMedia";
import { OnlineWorkoutsSectionData } from "../../../types/sections";

export interface OnlineWorkoutsSectionProps {
  headline1: string;
  headline2: string;
  imageData: IGatsbyImageData;
  altTag: string;
  titleTag: string;
}

export const OnlineWorkoutsSection = () => {
  const data: OnlineWorkoutsSectionData = useStaticQuery(graphql`
    query {
      sectionImage: file(relativePath: { eq: "online-workouts-720x720.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      headline: markdownRemark(
        frontmatter: { title: { eq: "online-workouts" } }
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
      imageData={data.sectionImage.childImageSharp.gatsbyImageData}
      altTag="Group of members after outdoor workout"
      titleTag="Smiling After Outdoor Workout"
    />
  ) : isAboveMobile && !isAboveTablet ? (
    <TabletLayout
      headline1={data.headline.frontmatter.headline1}
      headline2={data.headline.frontmatter.headline2}
      imageData={data.sectionImage.childImageSharp.gatsbyImageData}
      altTag="Group of members after outdoor workout"
      titleTag="Smiling After Outdoor Workout"
    />
  ) : (
    <MobileLayout
      headline1={data.headline.frontmatter.headline1}
      headline2={data.headline.frontmatter.headline2}
      imageData={data.sectionImage.childImageSharp.gatsbyImageData}
      altTag="Group of members after outdoor workout"
      titleTag="Smiling After Outdoor Workout"
    />
  );

  return <>{activeLayout}</>;
};
