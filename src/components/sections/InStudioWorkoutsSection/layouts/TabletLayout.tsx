import * as React from "react";
import styled from "styled-components";

import { AboveMobileSectionImage } from "../../../images/sectionImages/AboveMobileSectionImage";
import { AboveMobileSectionContentContainer } from "../../../content/AboveMobileSectionContentContainer";
import { ContentSection } from "../ContentSection";
import { InStudioWorkoutSectionProps } from "../index";

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

export const TabletLayout: React.FC<InStudioWorkoutSectionProps> = ({
  headline1,
  headline2,
  imageData,
  altTag,
  titleTag,
}) => {
  return (
    <SectionContainer>
      <AboveMobileSectionImage
        imageData={imageData}
        altTag={altTag}
        titleTag={titleTag}
      />
      <AboveMobileSectionContentContainer>
        <ContentSection />
      </AboveMobileSectionContentContainer>
    </SectionContainer>
  );
};
