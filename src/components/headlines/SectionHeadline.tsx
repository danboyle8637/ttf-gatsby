import React from "react";
import styled from "styled-components";

import { sizes } from "../../styles/sizes";

const LogoContainer = styled.div`
  width: 100%;
`;

const HeadlineStack = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  justify-items: start;
  width: fit-content;
  transform: translate(20px, 50px) rotate(-16grad);
  ${sizes.aboveMobile} {
    transform: translate(60px, 50px) rotate(-6grad);
  }
  ${sizes.aboveIpadPro} {
    transform: translate(240px, 60px) rotate(-5.5grad);
  }
  ${sizes.aboveLaptop} {
    transform: translate(240px, 80px) rotate(-5.5grad);
  }
`;

export const SectionHeadline: React.FC = ({ children }) => {
  return (
    <LogoContainer>
      <HeadlineStack>{children}</HeadlineStack>
    </LogoContainer>
  );
};
