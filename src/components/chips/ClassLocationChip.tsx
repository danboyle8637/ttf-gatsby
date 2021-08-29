import * as React from "react";
import styled from "styled-components";

import { BoldLabel } from "../../styles/typography";

const ChipContainer = styled.div`
  padding: 6px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--chip-background, var(--accent-blue));
  border-radius: 6px;
  width: 80px;
`;

export const ClassLocationChip: React.FC = ({ children }) => {
  return (
    <ChipContainer>
      <BoldLabel>{children}</BoldLabel>
    </ChipContainer>
  );
};
