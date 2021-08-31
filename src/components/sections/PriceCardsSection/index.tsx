import * as React from "react";
import styled from "styled-components";

import { MembershipCard } from "../../cards/MembershipCard";

const SectionContainer = styled.section`
  padding: 80px 12px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 1130px;
`;

export const PriceCardSection = () => {
  return (
    <SectionContainer>
      <MembershipCard plan="fit plan" />
      <MembershipCard plan="hardcore plan" />
      <MembershipCard plan="rockstar plan" />
    </SectionContainer>
  );
};
