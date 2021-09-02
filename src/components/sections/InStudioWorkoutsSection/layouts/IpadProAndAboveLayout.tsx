import * as React from "react";
import styled from "styled-components";

import {
  MainPageHeadline,
  MainSectionHeadline,
} from "../../../../styles/typography";
import { AboveMobileSectionImage } from "../../../images/sectionImages/AboveMobileSectionImage";
import { AboveMobileSectionContentContainer } from "../../../content/AboveMobileSectionContentContainer";
import { ContentSection } from "../ContentSection";
import { useMatchMedia } from "../../../../hooks/useMatchMedia";
import { InStudioWorkoutSectionProps } from "../index";
import { sizes } from "../../../../styles/sizes";

const SectionContainer = styled.section`
  padding: 120px 12px 180px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
`;

const ContentStack = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

const HeadlineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  justify-items: start;
  width: 100%;
`;

export const IpadProAndAboveLayout: React.FC<InStudioWorkoutSectionProps> = ({
  headline1,
  headline2,
  imageData,
  altTag,
  titleTag,
}) => {
  const isAboveIpadPro = useMatchMedia(1100);

  const ipadProStyles = {
    "--image-justify": "start",
    "--image-align": "center",
    "--image-width": "540px",
    "--image-transform": "translateY(120px)",
    "--content-justify": "end",
    "--content-align": "start",
    "--container-width": "540px",
    "--content-transform": "translateX(-20px)",
  } as React.CSSProperties;

  const laptopStyles = {
    "--image-justify": "start",
    "--image-align": "center",
    "--image-width": "600px",
    "--image-transform": "translateY(120px)",
    "--content-justify": "end",
    "--content-align": "start",
    "--container-width": "600px",
    "--content-transform": "translateX(-20px)",
  } as React.CSSProperties;

  const activeStyles = isAboveIpadPro ? laptopStyles : ipadProStyles;

  return (
    <SectionContainer>
      <ContentStack style={activeStyles}>
        <AboveMobileSectionImage
          imageData={imageData}
          altTag={altTag}
          titleTag={titleTag}
        />
        <AboveMobileSectionContentContainer>
          <HeadlineContainer>
            <MainPageHeadline>{headline1}</MainPageHeadline>
            <MainSectionHeadline>{headline2}</MainSectionHeadline>
          </HeadlineContainer>
          <ContentSection />
        </AboveMobileSectionContentContainer>
      </ContentStack>
    </SectionContainer>
  );
};
