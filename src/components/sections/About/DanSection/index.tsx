import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import { MobileLayout } from "./layouts/MobileLayout";
import { TabletLayout } from "./layouts/TabletLayout";
import { IpadProAndAboveLayout } from "./layouts/IpadProAndAboveLayout";
import { useMatchMedia } from "../../../../hooks/useMatchMedia";
import { DanSectionData } from "../../../../types/pages";

export interface DanSectionProps {
  headline: string;
  imageData: IGatsbyImageData;
  altTag: string;
  titleTag: string;
}

export const DanSection = () => {
  const data: DanSectionData = useStaticQuery(graphql`
    query {
      danImage: sanityMarketingPage(headline1: { eq: "About Page" }) {
        standardImage1 {
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
      danHeadline: sanityMarketingPage(headline1: { eq: "About Page" }) {
        copyBlock3 {
          headline
        }
      }
    }
  `);

  const isAboveMobile = useMatchMedia();
  const isAboveTablet = useMatchMedia(960);

  const activeLayout = isAboveTablet ? (
    <IpadProAndAboveLayout
      headline={data.danHeadline.copyBlock3.headline}
      imageData={
        data.danImage.standardImage1.standardImage2.string1.asset
          .gatsbyImageData
      }
      altTag={data.danImage.standardImage1.standardImage1.string2}
      titleTag={data.danImage.standardImage1.standardImage1.string1}
    />
  ) : isAboveMobile && !isAboveTablet ? (
    <TabletLayout
      headline={data.danHeadline.copyBlock3.headline}
      imageData={
        data.danImage.standardImage1.standardImage2.string1.asset
          .gatsbyImageData
      }
      altTag={data.danImage.standardImage1.standardImage1.string2}
      titleTag={data.danImage.standardImage1.standardImage1.string1}
    />
  ) : (
    <MobileLayout
      headline={data.danHeadline.copyBlock3.headline}
      imageData={
        data.danImage.standardImage1.standardImage2.string1.asset
          .gatsbyImageData
      }
      altTag={data.danImage.standardImage1.standardImage1.string2}
      titleTag={data.danImage.standardImage1.standardImage1.string1}
    />
  );

  return <>{activeLayout}</>;
};
