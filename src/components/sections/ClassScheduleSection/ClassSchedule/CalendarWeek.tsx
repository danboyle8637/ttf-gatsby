import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import { CalendarDay } from "./CalendarDay";
import { DaysOfTheWeek } from "./DaysOfTheWeek";
import { ClassTimesSection } from "./ClassTimesSection";
import {
  getFirstAndLastDayOfWeek,
  getLastDayOfMonthDate,
  getLastDayOfLastMonthDate,
} from "../../../../utils/calendarFunctions";
import { sizes } from "../../../../styles/sizes";

interface CalendarWeekProps {
  today: number;
  activeDay: number;
  handleDayClick: (dayOfWeek: number) => void;
}

const ScheduleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: center;
  width: 100%;
  height: 400px;
  ${sizes.aboveMobile} {
    height: 460px;
  }
`;

const WeekContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
  width: 100%;
  ${sizes.aboveMobile} {
    gap: 12px;
  }
`;

export const CalendarWeek: React.FC<CalendarWeekProps> = ({
  today,
  activeDay,
  handleDayClick,
}) => {
  const [daysArray, setDaysArray] = useState<number[]>([]);
  const [first, last] = getFirstAndLastDayOfWeek();
  const lastDayOfMonthDate = getLastDayOfMonthDate();
  const lastDayOfLastMonthDate = getLastDayOfLastMonthDate();

  useEffect(() => {
    let daysOfTheWeek = [];
    let daysOfNextMonth = [];
    let daysOfLastMonth = [];
    let numberOfDayInLastMonth = [];

    // i is going to be a date... NOT an index
    // This is blocking so the arrays will be filled first
    for (let i = first; i <= last; i++) {
      // The day is in the current month.
      if (i <= lastDayOfMonthDate && i > 0) {
        daysOfTheWeek.push(i);
      }

      /*
        If will be greater than the last day only during the last week of the month if...
        The last day of the month falls somewhere in the middle of the week.
      */
      if (i > lastDayOfMonthDate) {
        daysOfNextMonth.push(i);
      }

      /*
        If will be less than zero during the first week of the month if...
        The first day of the month falls somewhere in the middle of the week.
      */
      if (i <= 0) {
        numberOfDayInLastMonth.push(i);
      }
    }

    // Now it's time to check the arrays and construct the daysArray
    if (daysOfNextMonth.length > 0) {
      // If there are days in here... these are the days of next month
      for (let i = 1; i <= daysOfNextMonth.length; i++) {
        daysOfTheWeek.push(i);
      }
    }

    if (numberOfDayInLastMonth.length > 0) {
      // The first of this day is NOT Sunday
      // And you need to display some days from last month.
      for (let i = 0; i < numberOfDayInLastMonth.length; i++) {
        // This puts the days into the array backwards
        daysOfLastMonth.push(lastDayOfLastMonthDate - i);
      }

      for (let i = 0; i < daysOfLastMonth.length; i++) {
        // Treats daysOfLastMonth like a queue and adds each element to the beginning
        // of the daysOfTheWeek array
        daysOfTheWeek.unshift(daysOfLastMonth[i]);
      }
    }

    setDaysArray(daysOfTheWeek);
  }, [first, last, lastDayOfMonthDate, lastDayOfLastMonthDate]);

  const daysOfTheWeek = daysArray.map((day, i) => {
    const isToday = today === i;

    return (
      <CalendarDay
        key={i}
        dayOfWeek={i}
        activeDay={activeDay}
        isToday={isToday}
        handleDayClick={handleDayClick}
      >
        {day}
      </CalendarDay>
    );
  });

  return (
    <ScheduleContainer>
      <WeekContainer>
        <DaysOfTheWeek />
        <DaysContainer>{daysOfTheWeek}</DaysContainer>
      </WeekContainer>
      <ClassTimesSection activeDay={activeDay} />
    </ScheduleContainer>
  );
};
