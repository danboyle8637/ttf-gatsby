import * as React from "react";
import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import {
  toggleHamburgerMenuOpen,
  toggleHamburgerMenuClosed,
} from "../../animations/navigation";

const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  background: none;
  border: none;
  outline: none;
  width: 50px;
  height: 40px;
`;

const commonBarStyles = css`
  background-color: var(--accent-blue);
  border-radius: 40px;
  width: 100%;
  height: 7px;
`;

const TopBar = styled.div`
  ${commonBarStyles}
`;

const MiddleBar = styled.div`
  ${commonBarStyles}
  width: 70%;
`;

const BottomBar = styled.div`
  ${commonBarStyles}
  width: 80%;
`;

export const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const topBarRef = useRef<HTMLDivElement | null>(null);
  const middleBarRef = useRef<HTMLDivElement | null>(null);
  const bottomBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const topBar = topBarRef.current;
    const middleBar = middleBarRef.current;
    const bottomBar = bottomBarRef.current;

    if (topBar && middleBar && bottomBar && isMenuOpen) {
      toggleHamburgerMenuOpen(topBar, middleBar, bottomBar);
    }

    if (topBar && middleBar && bottomBar && !isMenuOpen) {
      toggleHamburgerMenuClosed(topBar, middleBar, bottomBar);
    }
  }, [isMenuOpen]);

  const toggleNavDrawer = () => {
    setIsMenuOpen((prevValue) => !prevValue);
  };

  return (
    <MenuButton onClick={toggleNavDrawer}>
      <TopBar ref={topBarRef} />
      <MiddleBar ref={middleBarRef} />
      <BottomBar ref={bottomBarRef} />
    </MenuButton>
  );
};
