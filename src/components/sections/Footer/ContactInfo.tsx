import * as React from "react";
import styled from "styled-components";

import { TTFLogo } from "../../svgs/TTFLogo";
import { SocialIcons } from "./SocialIcons";
import { ResponsiveContactInfo } from "../../shared/ResponsiveContactInfo";
import { sizes } from "../../../styles/sizes";

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 0;
  justify-items: center;
  width: 100%;
  max-width: 800px;
`;

const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 12px;
  justify-items: center;
  width: 100%;
`;

const Logo = styled(TTFLogo)`
  width: 120px;
`;

export const ContactInfo = () => {
  const styles = {
    "--logo-t-fill": "var(--accent-purple)",
    "--logo-stop-color-1": "hsl(258, 67%, 60%)",
    "--logo-stop-color-2": "hsl(258, 67%, 50%)",
    "--logo-stop-color-3": "hsl(258, 67%, 40%)",
  } as React.CSSProperties;

  return (
    <ContactContainer style={styles}>
      <LogoContainer>
        <Logo gradientId="footerLogo" />
        <SocialIcons />
      </LogoContainer>
      <ResponsiveContactInfo />
    </ContactContainer>
  );
};
