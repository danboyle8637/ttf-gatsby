import * as React from "react";
import styled from "styled-components";

import { CloseIcon } from "../cssDrawings/CloseIcon";

interface OverlayCloseButtonProps {
  isOpen: boolean;
  toggleOverlay: () => void;
}

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  background: none;
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  &:focus {
    outline: 2px solid var(--accent-pink);
    outline-offset: 4px;
  }
`;

export const OverlayCloseButton: React.FC<OverlayCloseButtonProps> = ({
  isOpen,
  toggleOverlay,
}) => {
  return (
    <CloseButton
      aria-label="Close overlay button"
      type="button"
      onClick={toggleOverlay}
    >
      <CloseIcon isOpen={isOpen} />
    </CloseButton>
  );
};
