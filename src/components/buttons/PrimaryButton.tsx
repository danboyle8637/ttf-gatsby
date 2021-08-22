import * as React from "react";
import styled from "styled-components";

import { useIsHovering } from "../../hooks/useIsHovering";

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
  cursor: pointer;
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

export const PrimaryButton: React.FC = ({ children }) => {
  const { isHovering, toggleIsHovering } = useIsHovering();

  const bottomStyles = {
    "--button-transform": isHovering
      ? "translateY(0) scale(1.025, 1.15)"
      : "translateY(4px) scale(1, 1)",
    "--button-border-radius": isHovering ? "22px" : "20px",
  } as React.CSSProperties;

  return (
    <ButtonContainer>
      <BottomLayer style={bottomStyles} />
      <TopLayerButton
        onMouseOver={toggleIsHovering}
        onMouseLeave={toggleIsHovering}
      >
        {children}
      </TopLayerButton>
    </ButtonContainer>
  );
};
