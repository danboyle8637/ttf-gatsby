import * as React from "react";
import styled from "styled-components";

import { Headline } from "../Headline";
import { MobileSectionImage } from "../../../../images/sectionImages/MobileSectionImage";
import { ContentSection } from "../ContentSection";
import { KindalSectionProps } from "../index";

const ContentContainer = styled.div`
  padding: 60px 12px 0 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: center;
  width: 100%;
`;

export const MobileLayout: React.FC<KindalSectionProps> = ({
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
      <ContentContainer>
        <ContentSection />
      </ContentContainer>
    </>
  );
};
