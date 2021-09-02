import styled, { css } from "styled-components";
import { sizes } from "./sizes";

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
  line-height: 1.4;
  text-transform: capitalize;
  ${gradientHeadlineStyles}
  ${sizes.aboveMobile} {
    font-size: 3rem;
  }
  ${sizes.aboveTablet} {
    font-size: 3.4rem;
  }
  ${sizes.aboveIpadPro} {
    font-size: 3.8rem;
  }
`;

export const MainSectionHeadline = styled(MainPageHeadline)`
  font-size: 4rem;
  ${sizes.aboveIphone11Pro} {
    font-size: 4.4rem;
  }
  ${sizes.aboveMobile} {
    font-size: 5rem;
  }
`;

const commonCallOutHeadlineStyles = css`
  color: var(--call-out-color, var(--base-white));
  text-transform: uppercase;
  line-height: 1;
`;

export const CallOutHeadlineSmall = styled.h3`
  font-size: 5.3rem;
  ${commonCallOutHeadlineStyles}
  ${sizes.aboveTablet} {
    font-size: 6.3rem;
  }
`;

export const CallOutHeadlineLarge = styled.h3`
  font-size: 7rem;
  ${commonCallOutHeadlineStyles}
  ${sizes.aboveTablet} {
    font-size: 8rem;
  }
`;

export const TestimonialHeadline = styled.h4`
  font-size: 2.4rem;
  color: var(--headline-color, var(--base-white));
  text-transform: capitalize;
  line-height: 1.4;
`;

export const BoldLabel = styled.p`
  padding-bottom: 16px;
  font-size: var(--label-font-size, 1.3rem);
  font-weight: 700;
  color: var(--label-color, var(--base-white));
  text-transform: uppercase;
  line-height: 1;
  ${sizes.aboveMobile} {
    font-size: 1.6rem;
  }
`;
