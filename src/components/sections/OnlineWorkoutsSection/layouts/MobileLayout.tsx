import * as React from "react";

import { Headline } from "../Headline";
import { MobileSectionImage } from "../../../images/sectionImages/MobileSectionImage";
import { ContentSection } from "../ContentSection";
import { OnlineWorkoutsSectionProps } from "../index";

export const MobileLayout: React.FC<OnlineWorkoutsSectionProps> = ({
  headline1,
  headline2,
  imageData,
  altTag,
  titleTag,
}) => {
  return (
    <>
      <Headline headline1={headline1} headline2={headline2} />
      <MobileSectionImage
        mobileImage={imageData}
        altTag={altTag}
        titleTag={titleTag}
      />
      <ContentSection />
    </>
  );
};
