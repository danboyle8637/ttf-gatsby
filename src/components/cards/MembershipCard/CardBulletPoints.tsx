import * as React from "react";
import styled from "styled-components";

import { KettlebellIcon } from "../../svgs/KettlebellIcon";

interface CardBulletPointsProps {
  bullet1: string;
  bullet2: string;
  bullet3: string;
}

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 140px;
  pointer-events: none;
`;

const PointsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 16px;
  justify-items: start;
  width: max-content;
`;

const BulletPoint = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 10px;
  justify-items: start;
  align-items: center;
  width: 100%;
`;

const Kettlebell = styled(KettlebellIcon)`
  width: 14px;
  transform: translateY(-4px);
`;

const ThePoint = styled.p`
  padding: 0;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--base-white);
  line-height: 1;
`;

export const CardBulletPoints: React.FC<CardBulletPointsProps> = ({
  bullet1,
  bullet2,
  bullet3,
}) => {
  return (
    <SectionContainer>
      <PointsContainer>
        <BulletPoint>
          <Kettlebell />
          <ThePoint>{bullet1}</ThePoint>
        </BulletPoint>
        <BulletPoint>
          <Kettlebell />
          <ThePoint>{bullet2}</ThePoint>
        </BulletPoint>
        <BulletPoint>
          <Kettlebell />
          <ThePoint>{bullet3}</ThePoint>
        </BulletPoint>
      </PointsContainer>
    </SectionContainer>
  );
};
