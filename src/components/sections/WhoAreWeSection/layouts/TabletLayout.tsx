import * as React from "react";
import styled from "styled-components";

import { MainPageHeadline } from "../../../../styles/typography";
import { AboveMobileSectionImage } from "../../../images/sectionImages/AboveMobileSectionImage";
import { AboveMobileSectionContentContainer } from "../../../content/AboveMobileSectionContentContainer";
import { ContentSection } from "../ContentSection";
import { WhoWeAreSectionProps } from "../index";

const SectionContainer = styled.section`
  padding: 0 12px;
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

export const TabletLayout: React.FC<WhoWeAreSectionProps> = ({
  headline,
  imageData,
  altTag,
  titleTag,
}) => {
  const layoutStyles = {
    "--image-justify": "end",
    "--image-align": "center",
    "--image-width": "440px",
    "--image-transform": "translateY(40px)",
    "--content-justify": "start",
    "--content-align": "start",
    "--container-width": "400px",
    "--content-transform": "translateY(-20px)",
  } as React.CSSProperties;

  return (
    <SectionContainer>
      <HeadlineContainer>
        <MainPageHeadline>{headline}</MainPageHeadline>
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
