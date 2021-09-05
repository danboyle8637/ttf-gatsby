import React from "react";
import styled from "styled-components";

import { NavBar } from "../navigation/NavBar";
import { Footer } from "../sections/Footer";
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
      <NavBar />
      <BaseContainer>{children}</BaseContainer>
      <Footer />
    </>
  );
};
