import * as React from "react";
import styled from "styled-components";

import { MainSectionHeadline } from "../../../../styles/typography";
import { AboveMobileSectionImage } from "../../../images/sectionImages/AboveMobileSectionImage";
import { AboveMobileSectionContentContainer } from "../../../content/AboveMobileSectionContentContainer";
import { ContentSection } from "../ContentSection";
import { SecondaryButton } from "../../../buttons/SecondaryButton";
import { useMatchMedia } from "../../../../hooks/useMatchMedia";
import { WhoWeAreSectionProps } from "../index";
import { sizes } from "../../../../styles/sizes";

const SectionContainer = styled.section`
  padding: 120px 12px;
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

export const IpadProAndAboveLayout: React.FC<WhoWeAreSectionProps> = ({
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
    "--content-justify": "start",
    "--content-align": "start",
    "--container-width": "540px",
    "--content-transform": "translateY(40px)",
  } as React.CSSProperties;

  const laptopStyles = {
    "--image-justify": "end",
    "--image-align": "center",
    "--image-width": "600px",
    "--content-justify": "start",
    "--content-align": "start",
    "--container-width": "600px",
    "--content-transform": "translate(80px, 60px)",
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
            <MainSectionHeadline>{headline}</MainSectionHeadline>
          </HeadlineContainer>
          <ContentSection />
          <SecondaryButton slug={"/about"}>Learn More About Us</SecondaryButton>
        </AboveMobileSectionContentContainer>
      </ContentStack>
    </SectionContainer>
  );
};
