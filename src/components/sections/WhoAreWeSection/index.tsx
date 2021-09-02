import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import { MobileLayout } from "./layouts/MobileLayout";
import { TabletLayout } from "./layouts/TabletLayout";
import { IpadProAndAboveLayout } from "./layouts/IpadProAndAboveLayout";
import { useMatchMedia } from "../../../hooks/useMatchMedia";
import { WhoWeAreSectionData } from "../../../types/pages";

export interface WhoWeAreSectionProps {
  headline: string;
  imageData: IGatsbyImageData;
  altTag: string;
  titleTag: string;
}

export const WhoAreWeSection = () => {
  const data: WhoWeAreSectionData = useStaticQuery(graphql`
    query {
      whoWeAreImage: sanityMarketingPage(headline1: { eq: "Home Page" }) {
        standardImage1 {
          standardImage4 {
            string1 {
              asset {
                gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              }
            }
          }
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
      imageData={
        data.whoWeAreImage.standardImage1.standardImage4.string1.asset
          .gatsbyImageData
      }
      altTag="Group of members after outdoor workout"
      titleTag="Smiling After Outdoor Workout"
    />
  ) : isAboveMobile && !isAboveTablet ? (
    <TabletLayout
      headline={data.headline.frontmatter.headline}
      imageData={
        data.whoWeAreImage.standardImage1.standardImage4.string1.asset
          .gatsbyImageData
      }
      altTag="Group of members after outdoor workout"
      titleTag="Smiling After Outdoor Workout"
    />
  ) : (
    <MobileLayout
      headline={data.headline.frontmatter.headline}
      imageData={
        data.whoWeAreImage.standardImage1.standardImage4.string1.asset
          .gatsbyImageData
      }
      altTag="Group of members after outdoor workout"
      titleTag="Smiling After Outdoor Workout"
    />
  );

  return <>{activeLayout}</>;
};
