import * as React from "react";
import styled from "styled-components";

import { sizes } from "../../styles/sizes";

interface CalendarDayProps {
  isToday: boolean;
  dayOfWeek: number;
  activeDay: number;
  handleDayClick: (dayOfWeek: number) => void;
}

const DaySquare = styled.button`
  position: relative;
  padding: 6px;
  padding-top: 100%;
  background-color: var(--background);
  border: none;
  border-radius: 12px;
  width: 100%;
  cursor: pointer;
  outline: none;
  box-shadow: var(--shadow);
  transition: background-color, box-shadow, 300ms ease-in-out;
  &:focus {
    box-shadow: var(--shadow-calendar-focus);
  }
`;

const DayLabel = styled.p`
  position: absolute;
  top: 2px;
  left: 8px;
  font-size: 1.4rem;
  color: var(--base-white);
  ${sizes.aboveMobile} {
    font-size: 18px;
  }
`;

export const CalendarDay: React.FC<CalendarDayProps> = ({
  isToday,
  dayOfWeek,
  activeDay,
  handleDayClick,
  children,
}) => {
  const isActive = dayOfWeek === activeDay;

  const daySquareStyle = {
    "--background": isActive ? "var(--accent-blue)" : "var(--medium-blue)",
    "--shadow": isToday ? "0 0 0 4px var(--accent-pink)" : "none",
  } as React.CSSProperties;

  return (
    <DaySquare
      style={daySquareStyle}
      type="button"
      aria-label={`${dayOfWeek} button`}
      onClick={() => handleDayClick(dayOfWeek)}
    >
      <DayLabel>{children}</DayLabel>
    </DaySquare>
  );
};
