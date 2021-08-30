import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

import { TodaysClassSchedule } from "./TodaysClassSchedule";
import { ClassScheduleTransition } from "../../../../animations/transitions/ClassScheduleTransition";
import { classTimes } from "./data";
import { sizes } from "../../../../styles/sizes";

interface ClassTimesSectionProps {
  activeDay: number;
}

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

export const ClassTimesSection: React.FC<ClassTimesSectionProps> = ({
  activeDay,
}) => {
  const [showClassTimes, setShowClassTimes] = useState<boolean>(false);

  const toggleShowClasses = () => {
    setShowClassTimes(true);
  };

  const sundaySchedule = classTimes.filter(
    (day) => day.dayOfWeek === activeDay
  )[0].classTimes;
  const mondaySchedule = classTimes.filter(
    (day) => day.dayOfWeek === activeDay
  )[0].classTimes;
  const tuesdaySchedule = classTimes.filter(
    (day) => day.dayOfWeek === activeDay
  )[0].classTimes;
  const wednesdaySchedule = classTimes.filter(
    (day) => day.dayOfWeek === activeDay
  )[0].classTimes;
  const thursdaySchedule = classTimes.filter(
    (day) => day.dayOfWeek === activeDay
  )[0].classTimes;
  const fridaySchedule = classTimes.filter(
    (day) => day.dayOfWeek === activeDay
  )[0].classTimes;
  const saturdaySchedule = classTimes.filter(
    (day) => day.dayOfWeek === activeDay
  )[0].classTimes;

  return (
    <SectionContainer>
      <ClassScheduleTransition
        isOpen={activeDay === 0}
        toggleShowClasses={toggleShowClasses}
      >
        <TodaysClassSchedule
          classTimesArray={sundaySchedule}
          showClassTimes={showClassTimes}
        />
      </ClassScheduleTransition>
      <ClassScheduleTransition
        isOpen={activeDay === 1}
        toggleShowClasses={toggleShowClasses}
      >
        <TodaysClassSchedule
          classTimesArray={mondaySchedule}
          showClassTimes={showClassTimes}
        />
      </ClassScheduleTransition>
      <ClassScheduleTransition
        isOpen={activeDay === 2}
        toggleShowClasses={toggleShowClasses}
      >
        <TodaysClassSchedule
          classTimesArray={tuesdaySchedule}
          showClassTimes={showClassTimes}
        />
      </ClassScheduleTransition>
      <ClassScheduleTransition
        isOpen={activeDay === 3}
        toggleShowClasses={toggleShowClasses}
      >
        <TodaysClassSchedule
          classTimesArray={wednesdaySchedule}
          showClassTimes={showClassTimes}
        />
      </ClassScheduleTransition>
      <ClassScheduleTransition
        isOpen={activeDay === 4}
        toggleShowClasses={toggleShowClasses}
      >
        <TodaysClassSchedule
          classTimesArray={thursdaySchedule}
          showClassTimes={showClassTimes}
        />
      </ClassScheduleTransition>
      <ClassScheduleTransition
        isOpen={activeDay === 5}
        toggleShowClasses={toggleShowClasses}
      >
        <TodaysClassSchedule
          classTimesArray={fridaySchedule}
          showClassTimes={showClassTimes}
        />
      </ClassScheduleTransition>
      <ClassScheduleTransition
        isOpen={activeDay === 6}
        toggleShowClasses={toggleShowClasses}
      >
        <TodaysClassSchedule
          classTimesArray={saturdaySchedule}
          showClassTimes={showClassTimes}
        />
      </ClassScheduleTransition>
    </SectionContainer>
  );
};
