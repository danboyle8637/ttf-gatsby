import * as React from "react";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import { overlayCloseButtonAni } from "../../animations/overlays";

interface CloseIconProps {
  isOpen: boolean;
}

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 34px;
  height: 34px;
`;

const XCross = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  background: var(--base-white);
  border-radius: 20px;
  width: 5px;
  height: 100%;
  opacity: 0;
`;

export const CloseIcon: React.FC<CloseIconProps> = ({ isOpen }) => {
  const leftCrossRef = useRef<HTMLDivElement | null>(null);
  const rightCrossRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const leftCross = leftCrossRef.current;
    const rightCross = rightCrossRef.current;

    if (leftCross && rightCross && isOpen) {
      overlayCloseButtonAni(leftCross, rightCross);
    }
  }, [isOpen]);

  return (
    <IconContainer>
      <XCross ref={leftCrossRef} />
      <XCross ref={rightCrossRef} />
    </IconContainer>
  );
};
