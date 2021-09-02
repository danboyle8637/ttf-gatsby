import * as React from "react";
import styled from "styled-components";

import { sizes } from "../../../styles/sizes";

const H3 = styled.h3`
  padding: 40px 0 20px 0;
  font-size: 32px;
  color: var(--accent-purple);
  line-height: 1.3;
  ${sizes.aboveMobile} {
    font-size: 48px;
  }
  ${sizes.aboveTablet} {
    padding: 80px 0 40px 0;
    font-size: 58px;
    line-height: 1.3;
  }
`;

export const BlogH3: React.FC = ({ children }) => {
  return <H3>{children}</H3>;
};
