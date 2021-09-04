import * as React from "react";
import styled from "styled-components";

import { TTFLogo } from "../../svgs/TTFLogo";
import { LogoSubheadline } from "../../../styles/typography";
import { sizes } from "../../../styles/sizes";

const HeaderContainer = styled.div`
  padding: 80px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 12px;
  justify-items: center;
  width: 100%;
  ${sizes.aboveMobile} {
    padding: 80px 0;
  }
`;

const Logo = styled(TTFLogo)`
  width: 300px;
`;

export const HeaderSection = () => {
  return (
    <HeaderContainer>
      <Logo gradientId="contactPageLogo" />
      <LogoSubheadline>Contact Us Anytime!</LogoSubheadline>
    </HeaderContainer>
  );
};
