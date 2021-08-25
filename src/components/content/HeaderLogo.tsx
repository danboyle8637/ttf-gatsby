import React from "react";
import styled from "styled-components";

import { TTFLogo } from "../svgs/TTFLogo";
import { LogoSubheadline } from "../../styles/typography";
import { sizes } from "../../styles/sizes";

interface HeaderLogoProps {
  tagline: string;
}

const LogoContainer = styled.div`
  width: 100%;
`;

const LogoStack = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 8px;
  justify-items: center;
  width: fit-content;
  transform: translate(-10px, 40px) rotate(-16grad);
  ${sizes.aboveMobile} {
    transform: translate(10px, 50px) rotate(-6grad);
  }
  ${sizes.aboveIpadPro} {
    transform: translate(240px, 60px) rotate(-5.5grad);
  }
  ${sizes.aboveLaptop} {
    transform: translate(240px, 80px) rotate(-5.5grad);
  }
`;

const Logo = styled(TTFLogo)`
  width: 318px;
`;

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ tagline }) => {
  return (
    <LogoContainer>
      <LogoStack>
        <Logo gradientId="headerLogo" />
        <LogoSubheadline>{tagline}</LogoSubheadline>
      </LogoStack>
    </LogoContainer>
  );
};
