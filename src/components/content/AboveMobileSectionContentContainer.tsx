import * as React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  background: var(--container-background, hsla(226, 41%, 10%, 0.9));
  border-radius: 20px;
  backdrop-filter: blur(6px);
  width: var(--container-width, 500px);
  box-shadow: 0 0 0 6px hsla(0, 0%, 0%, 0.35);
  z-index: 1;
`;

export const AboveMobileSectionContentContainer: React.FC = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};
