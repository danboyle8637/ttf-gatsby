import * as React from "react";
import styled from "styled-components";

import {
  MainPageHeadline,
  MainSectionHeadline,
} from "../../../../styles/typography";
import { AboveMobileSectionImage } from "../../../images/sectionImages/AboveMobileSectionImage";
import { AboveMobileSectionContentContainer } from "../../../content/AboveMobileSectionContentContainer";
import { ContentSection } from "../ContentSection";
import { InStudioWorkoutSectionProps } from "../index";

const SectionContainer = styled.section`
  padding: 120px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  width: 100%;
`;

const ContentStack = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
`;

const HeadlineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  justify-items: start;
  width: 100%;
`;

export const TabletLayout: React.FC<InStudioWorkoutSectionProps> = ({
  headline1,
  headline2,
  imageData,
  altTag,
  titleTag,
}) => {
  const layoutStyles = {
    "--image-justify": "start",
    "--image-align": "start",
    "--image-width": "440px",
    "--content-justify": "end",
    "--container-width": "400px",
    "--content-transform": "translateY(60px)",
  } as React.CSSProperties;

  return (
    <SectionContainer>
      <HeadlineContainer>
        <MainPageHeadline>{headline1}</MainPageHeadline>
        <MainSectionHeadline>{headline2}</MainSectionHeadline>
      </HeadlineContainer>
      <ContentStack style={layoutStyles}>
        <AboveMobileSectionImage
          imageData={imageData}
          altTag={altTag}
          titleTag={titleTag}
        />
        <AboveMobileSectionContentContainer>
          <ContentSection />
        </AboveMobileSectionContentContainer>
      </ContentStack>
    </SectionContainer>
  );
};
