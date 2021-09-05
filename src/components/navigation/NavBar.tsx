import * as React from "react";
import { useState, useEffect, useCallback, CSSProperties } from "react";
import styled from "styled-components";

import { HamburgerMenu } from "../cssDrawings/HamburgerMenu";
import { Portal } from "../shared/Portal";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 18px 18px 0 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--accent-blue-dark);
  width: 100%;
  z-index: 998;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1440px;
`;

export const NavBar: React.FC = () => {
  return (
    <>
      <Header>
        <MenuContainer>
          <div />
          <HamburgerMenu />
        </MenuContainer>
      </Header>
    </>
  );
};
