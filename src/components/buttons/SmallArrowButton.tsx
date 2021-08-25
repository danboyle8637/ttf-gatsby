import * as React from "react";
import styled from "styled-components";

import { CarrotArrow } from "../svgs/CarrotArrow";

interface SmallArrowButtonProps {
  handleClick: () => void;
}

const Button = styled.button`
  padding: 6px 10px;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--base-white);
  text-transform: capitalize;
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 6px;
  justify-items: center;
  align-items: center;
  background: var(--button-background, hsla(300, 89%, 64%, 0.4));
  border-radius: 80px;
  border: none;
  outline: none;
  box-shadow: 0 0 0 3px var(--button-border, var(--accent-pink));
  transition: box-shadow 300ms ease-in-out;
  &:focus {
    box-shadow: 0 0 0 3px var(--button-hover-border, var(--accent-blue));
  }
  &:hover {
    box-shadow: 0 0 0 3px var(--button-hover-border, var(--accent-blue));
  }
`;

const Arrow = styled(CarrotArrow)`
  width: 14px;
`;

export const SmallArrowButton: React.FC<SmallArrowButtonProps> = ({
  handleClick,
  children,
}) => {
  return (
    <Button type="button" onClick={handleClick}>
      <Arrow />
      {children}
    </Button>
  );
};
