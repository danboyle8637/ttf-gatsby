import styled, { css } from "styled-components";

const commonHeadlineStyles = css``;

const gradientHeadlineStyles = css`
  background-clip: inherit;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const buttonLabel = css``;

export const inputLabel = css``;

export const LogoSubheadline = styled.h1`
  font-size: 1.8rem;
  color: var(--base-white);
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

export const MainPageHeadline = styled.h2`
  font-size: 2.8rem;
  background: linear-gradient(to right, var(--base-white), var(--accent-blue));
  line-height: 1.6;
  ${gradientHeadlineStyles}
`;

export const ShoutHeadline = styled.h3``;
