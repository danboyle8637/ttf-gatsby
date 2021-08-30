import * as React from "react";
import { forwardRef } from "react";
import styled from "styled-components";

import { ClockIcon } from "../../../svgs/ClockIcon";
import { ClassLocationChip } from "../../../chips/ClassLocationChip";
import { ClassLocation } from "./data";

interface ClassTimeRowProps {
  time: string;
  location: ClassLocation;
}

const RowContainer = styled.div`
  padding: 8px;
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  gap: 12px;
  justify-items: start;
  align-items: center;
  background: linear-gradient(to right, var(--medium-blue), hsl(227, 30%, 54%));
  border-radius: 16px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 2px 2px 0 hsla(0, 0%, 0%, 0.3);
`;

const TimeIcon = styled(ClockIcon)`
  width: 30px;
`;

const ClassTime = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  color: var(--base-white);
  font-weight: 600;
  line-height: 1;
`;

export const ClassTimeRow = forwardRef<HTMLDivElement, ClassTimeRowProps>(
  ({ time, location }, ref) => {
    const chipStyles = {
      "--chip-background":
        location === "studio" ? "var(--accent-blue)" : "var(--accent-pink)",
    } as React.CSSProperties;

    return (
      <RowContainer ref={ref} style={chipStyles}>
        <TimeIcon />
        <ClassTime>{time}</ClassTime>
        <ClassLocationChip>{location}</ClassLocationChip>
      </RowContainer>
    );
  }
);
