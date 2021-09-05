import * as React from "react";
import styled from "styled-components";

import { MainPageHeadline } from "../../../styles/typography";
import { ClassSchedule } from "./ClassSchedule";
import { ResponsiveContactInfo } from "../../shared/ResponsiveContactInfo";
import { sizes } from "../../../styles/sizes";

const SectionContainer = styled.section`
  padding: 80px 12px;
  display: flex;
  justify-content: center;
  background: var(--accent-blue-dark);
  width: 100%;
  ${sizes.aboveMobile} {
    padding: 120px 24px;
  }
  ${sizes.aboveTablet} {
    padding: 120px 0;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: start;
  width: 100%;
  max-width: 800px;
`;

export const ClassScheduleSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <MainPageHeadline>Full Schedule Limited Spots!</MainPageHeadline>
        <ClassSchedule />
        <ResponsiveContactInfo />
      </ContentContainer>
    </SectionContainer>
  );
};

/*

*/
