import React from "react";
import styled from "styled-components";

import { TTFLogo } from "../svgs/TTFLogo";
import { LogoSubheadline } from "../../styles/typography";
import { sizes } from "../../styles/sizes";

interface HeaderLogoProps {
  tagline: string;
}

const LogoContainer = styled.div`
  margin-top: -30px;
  width: 100%;
  ${sizes.aboveMobile} {
    margin-top: -50px;
  }
  ${sizes.aboveTablet} {
    margin-top: -70px;
  }
  ${sizes.aboveIpadPro} {
    margin-top: -90px;
  }
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
  ${sizes.aboveTablet} {
    transform: translate(10px, 70px) rotate(-6grad);
  }
  ${sizes.aboveIpadPro} {
    transform: translate(180px, 80px) rotate(-6.3grad);
  }
  ${sizes.aboveLaptop} {
    transform: translate(240px, 100px) rotate(-6.3grad);
  }
`;

const Logo = styled(TTFLogo)`
  width: 340px;
  ${sizes.aboveMobile} {
    width: 400px;
  }
  ${sizes.aboveTablet} {
    width: 460px;
  }
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
