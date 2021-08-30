import * as React from "react";
import styled from "styled-components";

import { useMatchMedia } from "../../../../hooks/useMatchMedia";
import { daysOfTheWeek } from "./data";
import { sizes } from "../../../../styles/sizes";

const DayOfTheWeekContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0;
  width: 100%;
  ${sizes.aboveMobile} {
    gap: 6px;
  }
`;

const DayOfTheWeekLabel = styled.p`
  padding-left: 8px;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--base-white);
  line-height: 1;
  ${sizes.aboveMobile} {
    padding-left: 12px;
  }
`;

export const DaysOfTheWeek = () => {
  const isAboveMobile = useMatchMedia();

  const days = daysOfTheWeek.map((day, i) => {
    const dayToShow = isAboveMobile ? day[1] : day[0];

    return <DayOfTheWeekLabel key={i}>{dayToShow}</DayOfTheWeekLabel>;
  });

  return <DayOfTheWeekContainer>{days}</DayOfTheWeekContainer>;
};
