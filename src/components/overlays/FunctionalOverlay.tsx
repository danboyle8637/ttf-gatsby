import * as React from "react";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import { OverlayCloseButton } from "../buttons/OverlayCloseButton";
import { FunctionalOverlayTransition } from "../../animations/transitions/FunctionalOverlayTransition";
import {
  drawerOpenFromRightAni,
  drawerClosedToRightAni,
} from "../../animations/overlays";
import { sizes } from "../../styles/sizes";

interface FunctionalOverlayProps {
  isOpen: boolean;
  toggleOverlay: () => void;
}

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: transparent;
`;

const ClickLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(6px);
  transition: backdrop-filter 300ms ease-in-out;
`;

const DrawerContainer = styled.nav`
  position: absolute;
  top: 12px;
  left: 100px;
  right: 12px;
  bottom: 12px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(258, 41%, 34%);
  border-radius: 20px;
  box-shadow: 0 0 0 8px hsla(240, 100%, 0%, 0.4);
  outline: none;
  overflow: hidden;
  backdrop-filter: blur(4px);
  transform: translateX(108%);
  transition: background-color 300ms ease-in-out;
  isolation: isolate;
  &:focus {
    box-shadow: 0 0 0 8px rgba(125, 131, 255, 0.4);
  }
  ${sizes.aboveMobile} {
    left: unset;
    width: 300px;
  }
  ${sizes.aboveTablet} {
    width: 360px;
  }
`;

export const FunctionalOverlay: React.FC<FunctionalOverlayProps> = ({
  isOpen,
  toggleOverlay,
  children,
}) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const drawer = drawerRef.current;

    if (drawer && isOpen) {
      drawerOpenFromRightAni(drawer);
    }

    if (drawer && !isOpen) {
      drawerClosedToRightAni(drawer);
    }
  }, [isOpen]);

  return (
    <FunctionalOverlayTransition isOpen={isOpen}>
      <BackgroundOverlay>
        <ClickLayer onClick={toggleOverlay} />
        <DrawerContainer ref={drawerRef} tabIndex={0}>
          <OverlayCloseButton isOpen={isOpen} toggleOverlay={toggleOverlay} />
          {children}
        </DrawerContainer>
      </BackgroundOverlay>
    </FunctionalOverlayTransition>
  );
};
