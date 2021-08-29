import * as React from "react";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import { ClassTimeRow } from "./ClassTimeRow";

import {
  classTimesAni,
  classTimesSetAni,
} from "../../animations/classSchedule";
import { ClassTime } from "./data";

interface ClassRowSectionProps {
  classTimesArray: ClassTime[];
  showClassTimes: boolean;
}

const SectionContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 12px;
  width: 100%;
`;

export const TodaysClassSchedule: React.FC<ClassRowSectionProps> = ({
  classTimesArray,
  showClassTimes,
}) => {
  const classTimesArrayRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const classTimesArray = classTimesArrayRef.current;

    if (classTimesArray && classTimesArray[0] !== null) {
      classTimesSetAni(classTimesArray);
    }
  }, []);

  useEffect(() => {
    const classTimesArray = classTimesArrayRef.current;

    if (classTimesArray && classTimesArray[0] !== null && showClassTimes) {
      classTimesAni(classTimesArray);
    }

    classTimesArrayRef.current = [];
  }, [showClassTimes]);

  const classes = classTimesArray.map((classTime) => {
    const id = classTime.id;
    const time = classTime.time;
    const location = classTime.location;

    return (
      <ClassTimeRow
        ref={(ref: HTMLDivElement) => (classTimesArrayRef.current[id] = ref)}
        key={id}
        time={time}
        location={location}
      />
    );
  });

  return <SectionContainer>{classes}</SectionContainer>;
};
