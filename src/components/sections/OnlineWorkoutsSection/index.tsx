import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import { MobileLayout } from "./layouts/MobileLayout";
import { TabletLayout } from "./layouts/TabletLayout";
import { IpadProAndAboveLayout } from "./layouts/IpadProAndAboveLayout";
import { useMatchMedia } from "../../../hooks/useMatchMedia";
import { OnlineWorkoutsSectionData } from "../../../types/pages";

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
      sectionImages: sanityMarketingPage(headline1: { eq: "Home Page" }) {
        standardImage2 {
          standardImage1 {
            string1
            string2
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
      imageData={
        data.sectionImages.standardImage2.standardImage2.string1.asset
          .gatsbyImageData
      }
      altTag={data.sectionImages.standardImage2.standardImage1.string2}
      titleTag={data.sectionImages.standardImage2.standardImage1.string1}
    />
  ) : isAboveMobile && !isAboveTablet ? (
    <TabletLayout
      headline1={data.headline.frontmatter.headline1}
      headline2={data.headline.frontmatter.headline2}
      imageData={
        data.sectionImages.standardImage2.standardImage2.string1.asset
          .gatsbyImageData
      }
      altTag={data.sectionImages.standardImage2.standardImage1.string2}
      titleTag={data.sectionImages.standardImage2.standardImage1.string1}
    />
  ) : (
    <MobileLayout
      headline1={data.headline.frontmatter.headline1}
      headline2={data.headline.frontmatter.headline2}
      imageData={
        data.sectionImages.standardImage2.standardImage2.string1.asset
          .gatsbyImageData
      }
      altTag={data.sectionImages.standardImage2.standardImage1.string2}
      titleTag={data.sectionImages.standardImage2.standardImage1.string1}
    />
  );

  return <>{activeLayout}</>;
};
