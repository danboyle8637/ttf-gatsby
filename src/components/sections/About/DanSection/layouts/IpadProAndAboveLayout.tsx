import * as React from "react";
import styled from "styled-components";

import { MainSectionHeadline } from "../../../../../styles/typography";
import { AboveMobileSectionImage } from "../../../../images/sectionImages/AboveMobileSectionImage";
import { AboveMobileSectionContentContainer } from "../../../../content/AboveMobileSectionContentContainer";
import { ContentSection } from "../ContentSection";
import { useMatchMedia } from "../../../../../hooks/useMatchMedia";
import { DanSectionProps } from "../index";

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

export const IpadProAndAboveLayout: React.FC<DanSectionProps> = ({
  headline,
  imageData,
  altTag,
  titleTag,
}) => {
  const isAboveIpadPro = useMatchMedia(1100);

  const ipadProStyles = {
    "--image-justify": "end",
    "--image-align": "center",
    "--image-width": "540px",
    "--image-transform": "translate(-40px, 0px)",
    "--content-justify": "start",
    "--content-align": "start",
    "--container-width": "540px",
    "--content-transform": "translate(40px, 40px)",
  } as React.CSSProperties;

  const laptopStyles = {
    "--image-justify": "end",
    "--image-align": "center",
    "--image-width": "600px",
    "--image-transform": "translateY(20px)",
    "--content-justify": "start",
    "--content-align": "start",
    "--container-width": "600px",
    "--content-transform": "translate(100px, -40px)",
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
          <MainSectionHeadline>{headline}</MainSectionHeadline>
          <ContentSection />
        </AboveMobileSectionContentContainer>
      </ContentStack>
    </SectionContainer>
  );
};
