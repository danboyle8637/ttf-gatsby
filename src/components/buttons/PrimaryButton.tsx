import * as React from "react";
import styled from "styled-components";

import { useIsHovering } from "../../hooks/useIsHovering";

type ButtonType = "button" | "submit";

interface PrimaryButtonProps {
  type: ButtonType;
  isDisabled: boolean;
  handleClick?: () => void;
}

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 64px;
`;

const TopLayerButton = styled.button`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--button-label-color, var(--base-white));
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  background: var(--button-background, var(--accent-pink));
  border-radius: 20px;
  border: none;
  width: 100%;
  height: 100%;
  cursor: var(--button-cursor, pointer);
  box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.4);
  transition: box-shadow 300ms ease-in-out;
  z-index: 1;
`;

const BottomLayer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  background: var(--bottom-layer-background, var(--accent-blue));
  border-radius: var(--button-border-radius);
  width: 100%;
  height: 100%;
  transition: transform 300ms ease-in-out;
  transform: var(--button-transform);
  pointer-events: none;
`;

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  type,
  isDisabled,
  handleClick,
  children,
}) => {
  const { isHovering, toggleIsHovering } = useIsHovering();

  const bottomStyles = {
    "--button-background": isDisabled
      ? "var(--accent-blue-dark)"
      : "var(--accent-pink)",
    "--button-cursor": isDisabled ? "not-allowed" : "pointer",
    "--button-transform": isHovering
      ? "translateY(0) scale(1.025, 1.15)"
      : "translateY(4px) scale(1, 1)",
    "--button-border-radius": isHovering ? "22px" : "20px",
    "--bottom-layer-background": isDisabled
      ? "var(--accent-purple)"
      : "var(--accent-blue)",
  } as React.CSSProperties;

  return (
    <ButtonContainer style={bottomStyles}>
      <BottomLayer />
      <TopLayerButton
        type={type}
        onClick={handleClick}
        disabled={isDisabled}
        onMouseOver={toggleIsHovering}
        onMouseLeave={toggleIsHovering}
      >
        {children}
      </TopLayerButton>
    </ButtonContainer>
  );
};
