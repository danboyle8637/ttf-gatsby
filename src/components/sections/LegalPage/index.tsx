import * as React from "react";
import styled from "styled-components";

import { TTFLogo } from "../../svgs/TTFLogo";
import { MainPageHeadline } from "../../../styles/typography";
import { sizes } from "../../../styles/sizes";

interface LegalPageProps {
  headline: string;
  bodyCopy: string;
}

const PageContainer = styled.section`
  padding: 80px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 60px;
  justify-items: center;
  width: 100%;
  max-width: 660px;
`;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  justify-items: center;
`;

const Logo = styled(TTFLogo)`
  width: 220px;
`;

export const LegaPage: React.FC<LegalPageProps> = ({ headline, bodyCopy }) => {
  return (
    <PageContainer>
      <HeaderContainer>
        <Logo gradientId="legalLogo" />
        <MainPageHeadline>{headline}</MainPageHeadline>
      </HeaderContainer>
      <div dangerouslySetInnerHTML={{ __html: bodyCopy }} />
    </PageContainer>
  );
};
