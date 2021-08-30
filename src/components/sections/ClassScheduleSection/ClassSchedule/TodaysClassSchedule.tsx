import * as React from "react";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import { ClassTimeRow } from "./ClassTimeRow";
import { TestimonialHeadline } from "../../../../styles/typography";
import { classTimesAni } from "../../../../animations/classSchedule";
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

const NoClassesContainer = styled.div`
  align-self: center;
  text-align: center;
  width: 100%;
`;

export const TodaysClassSchedule: React.FC<ClassRowSectionProps> = ({
  classTimesArray,
  showClassTimes,
}) => {
  const classTimesArrayRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const classTimesArray = classTimesArrayRef.current;

    if (classTimesArray && showClassTimes) {
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

  const noClassesStyles = {
    "--headline-color": "var(--accent-blue-dark)",
  } as React.CSSProperties;

  return (
    <SectionContainer style={noClassesStyles}>
      {classes.length === 0 ? (
        <NoClassesContainer>
          <TestimonialHeadline>No Classes Today</TestimonialHeadline>
        </NoClassesContainer>
      ) : (
        classes
      )}
    </SectionContainer>
  );
};
