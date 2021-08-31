import * as React from "react";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import { baseButtonStyles } from "../../../styles/buttons";
import {
  priceButtonHoverAni,
  priceButtonNotHoverAni,
} from "../../../animations/cards";

interface DummyButtonProps {
  isHovering: boolean;
}

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  pointer-events: none;
`;

const BackButton = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 96%;
  max-width: 380px;
  height: 100%;
  background: var(--back-button);
  border-radius: 20px;
`;

const FrontButton = styled.button`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  ${baseButtonStyles}
  z-index: 1;
  transition: box-shadow 300ms ease-in-out;
  &:focus {
    outline: 2px solid var(--color-blue-3);
    outline-offset: 4px;
  }
`;

export const FloatingDummyButton: React.FC<DummyButtonProps> = ({
  isHovering,
  children,
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const button = buttonRef.current;

    if (button && isHovering) {
      priceButtonHoverAni(button);
    }

    if (button && !isHovering) {
      priceButtonNotHoverAni(button);
    }
  }, [isHovering]);

  return (
    <ButtonContainer>
      <BackButton />
      <FrontButton ref={buttonRef} type="button">
        {children}
      </FrontButton>
    </ButtonContainer>
  );
};
