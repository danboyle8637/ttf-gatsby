import * as React from "react";
import styled from "styled-components";

import { CalendarWeek } from "./CalendarWeek";
import { useCalendarWeek } from "../../hooks/useCalendarWeek";

const CalendarContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 30px;
  width: 100%;
  max-width: 800px;
  isolation: isolate;
`;

export const ClassSchedule = () => {
  const { today, activeDay, handleDayClick } = useCalendarWeek();

  return (
    <CalendarContainer>
      <CalendarWeek
        activeDay={activeDay}
        today={today}
        handleDayClick={handleDayClick}
      />
    </CalendarContainer>
  );
};
