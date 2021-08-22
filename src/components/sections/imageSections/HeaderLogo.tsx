import React from "react";
import styled from "styled-components";

import { TTFLogo } from "../../svgs/TTFLogo";
import { LogoSubheadline } from "../../../styles/typography";

const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 8px;
  justify-items: center;
  width: fit-content;
  transform: translate(-10px, 40px) rotate(-16grad);
`;

const Logo = styled(TTFLogo)`
  width: 318px;
`;

export const HeaderLogo = () => {
  return (
    <LogoContainer>
      <Logo gradientId="headerLogo" />
      <LogoSubheadline>Strength Training for Women</LogoSubheadline>
    </LogoContainer>
  );
};
