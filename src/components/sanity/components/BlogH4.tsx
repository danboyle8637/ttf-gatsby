import * as React from "react";
import styled from "styled-components";

import { sizes } from "../../../styles/sizes";

const H4 = styled.h4`
  padding: 40px 0 20px 0;
  font-size: 2.8rem;
  color: var(--accent-blue);
  line-height: 1.3;
  ${sizes.aboveMobile} {
    font-size: 3.8rem;
  }
  ${sizes.aboveTablet} {
    padding: 80px 0 40px 0;
    font-size: 4.4rem;
    line-height: 1.3;
  }
`;

export const BlogH4: React.FC = ({ children }) => {
  return <H4>{children}</H4>;
};
