import * as React from "react";
import styled from "styled-components";

import { MembershipPlan } from "../../../types/components";

interface CardHeaderProps {
  planTitle: MembershipPlan;
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  overflow: hidden;
  pointer-events: none;
`;

const PlanTitleContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 12px;
  align-items: center;
  width: fit-content;
`;

const AccentBar = styled.div`
  background-color: var(--primary-color);
  border-radius: 2px;
  width: 10px;
  height: 36px;
`;

const PlanTitle = styled.h4`
  font-family: inherit;
  font-size: 3rem;
  font-weight: 600;
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 0.06rem;
`;

export const CardHeader: React.FC<CardHeaderProps> = ({ planTitle }) => {
  return (
    <HeaderContainer>
      <PlanTitleContainer>
        <AccentBar />
        <PlanTitle>{planTitle}</PlanTitle>
      </PlanTitleContainer>
    </HeaderContainer>
  );
};
