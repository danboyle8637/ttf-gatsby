import * as React from "react";
import { useEffect, useRef, CSSProperties } from "react";
import styled from "styled-components";

import { BaseOverlayTransition } from "../../animations/transitions/BaseOverlayTransition";
import { OverlayCloseButton } from "../buttons/OverlayCloseButton";
import {
  toastOverlayEnterAni,
  toastOverlayExitAni,
} from "../../animations/overlays";
import { sizes } from "../../styles/sizes";

interface ToastOverlayProps {
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
`;

const ClickLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(240, 0%, 0%, 0.3);
  backdrop-filter: blur(4px);
`;

const ToastContainer = styled.div`
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 40px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark-purple);
  border-radius: 20px 20px 12px 12px;
  backdrop-filter: blur(4px);
  opacity: 0;
  box-shadow: 0 0 0 6px hsla(240, 0%, 0%, 0.6);
  transform: translateY(100%) scale(0.8);
  ${sizes.aboveMobile} {
    left: unset;
    width: 400px;
  }
  ${sizes.aboveIpadPro} {
    right: 100px;
  }
`;

export const ToastOverlay: React.FC<ToastOverlayProps> = ({
  isOpen,
  toggleOverlay,
  children,
}) => {
  const toasterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const toaster = toasterRef.current;

    if (toaster && isOpen) {
      toastOverlayEnterAni(toaster);
    }

    if (toaster && !isOpen) {
      toastOverlayExitAni(toaster);
    }
  }, [isOpen]);

  return (
    <BaseOverlayTransition isOpen={isOpen}>
      <BackgroundOverlay>
        <ClickLayer onClick={toggleOverlay} />
        <ToastContainer ref={toasterRef}>
          {children}
          <OverlayCloseButton isOpen={isOpen} toggleOverlay={toggleOverlay} />
        </ToastContainer>
      </BackgroundOverlay>
    </BaseOverlayTransition>
  );
};
