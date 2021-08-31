import { css } from 'styled-components'

export const baseButtonStyles = css`
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--button-label);
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  background: var(--button-background);
  border: none;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  height: 50px;
  cursor: pointer;
  box-shadow: 0 4px 2px 0px rgba(0, 0, 0, 0.4);
  transition: box-shadow 300ms ease-in-out;
  &:hover {
    box-shadow: 0 4px 2px 0px rgba(0, 0, 0, 0.4), var(--button-hover);
  }
`;