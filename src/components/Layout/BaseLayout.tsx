import React from "react";
import styled from "styled-components";

import { GlobalStyles } from "../../styles/Global";

const BaseContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  isolation: isolate;
  overflow: hidden;
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <BaseContainer>{children}</BaseContainer>
    </>
  );
};
