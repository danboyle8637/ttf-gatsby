import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

interface SecondaryButtonProps {
  slug: string;
}

const ButtonContainer = styled.button`
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--button-label-color, var(--base-white));
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  background: var(
    --button-background,
    linear-gradient(to right, var(--medium-blue), hsl(227, 30%, 64%))
  );
  border-radius: 14px;
  border: none;
  width: fit-content;
  cursor: pointer;
  box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.4);
  transition: box-shadow 300ms ease-in-out;
  z-index: 1;
  &:hover {
    box-shadow: 0 0 0 3px var(--dark-blue), 0 0 0 6px var(--accent-blue);
  }
`;

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  slug,
  children,
}) => {
  return (
    <Link
      style={{
        textDecoration: "none",
        outlineWidth: "2px",
        outlineColor: "var(--accent-blue)",
        outlineOffset: "8px 4px",
        width: "fit-content",
      }}
      to={slug}
    >
      <ButtonContainer>{children}</ButtonContainer>
    </Link>
  );
};
