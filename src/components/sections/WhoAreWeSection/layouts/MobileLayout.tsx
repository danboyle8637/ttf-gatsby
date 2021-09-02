import * as React from "react";

import { Headline } from "../Headline";
import { MobileSectionImage } from "../../../images/sectionImages/MobileSectionImage";
import { ContentSection } from "../ContentSection";
import { WhoWeAreSectionProps } from "../index";

export const MobileLayout: React.FC<WhoWeAreSectionProps> = ({
  headline,
  imageData,
  altTag,
  titleTag,
}) => {
  return (
    <>
      <Headline headline={headline} />
      <MobileSectionImage
        mobileImage={imageData}
        altTag={altTag}
        titleTag={titleTag}
      />
      <ContentSection />
    </>
  );
};
