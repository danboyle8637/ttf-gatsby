import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import { MobileLayout } from "./layouts/MobileLayout";
import { TabletLayout } from "./layouts/TabletLayout";
import { IpadProAndAboveLayout } from "./layouts/IpadProAndAboveLayout";
import { useMatchMedia } from "../../../../hooks/useMatchMedia";
import { KindalSectionData } from "../../../../types/pages";

export interface KindalSectionProps {
  headline: string;
  imageData: IGatsbyImageData;
  altTag: string;
  titleTag: string;
}

export const KindalSection = () => {
  const data: KindalSectionData = useStaticQuery(graphql`
    query {
      kindalImage: sanityMarketingPage(headline1: { eq: "About Page" }) {
        standardImage1 {
          string1
          string2
          standardImage1 {
            standardImage1 {
              asset {
                gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              }
            }
          }
        }
      }
      kindalHeadline: sanityMarketingPage(headline1: { eq: "About Page" }) {
        copyBlock2 {
          headline
        }
      }
    }
  `);

  const isAboveMobile = useMatchMedia();
  const isAboveTablet = useMatchMedia(960);

  const activeLayout = isAboveTablet ? (
    <IpadProAndAboveLayout
      headline={data.kindalHeadline.copyBlock2.headline}
      imageData={
        data.kindalImage.standardImage1.standardImage1.standardImage1.asset
          .gatsbyImageData
      }
      altTag={data.kindalImage.standardImage1.string2}
      titleTag={data.kindalImage.standardImage1.string1}
    />
  ) : isAboveMobile && !isAboveTablet ? (
    <TabletLayout
      headline={data.kindalHeadline.copyBlock2.headline}
      imageData={
        data.kindalImage.standardImage1.standardImage1.standardImage1.asset
          .gatsbyImageData
      }
      altTag={data.kindalImage.standardImage1.string2}
      titleTag={data.kindalImage.standardImage1.string1}
    />
  ) : (
    <MobileLayout
      headline={data.kindalHeadline.copyBlock2.headline}
      imageData={
        data.kindalImage.standardImage1.standardImage1.standardImage1.asset
          .gatsbyImageData
      }
      altTag={data.kindalImage.standardImage1.string2}
      titleTag={data.kindalImage.standardImage1.string1}
    />
  );

  return <>{activeLayout}</>;
};
