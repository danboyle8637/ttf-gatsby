import * as React from "react";
import styled from "styled-components";

import { PageNavigation } from "./PageNavigation";
import { ContactInfo } from "./ContactInfo";
import { LegalSection } from "./LegalSection";

const FooterContainer = styled.footer`
  padding: 80px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 80px;
  justify-items: center;
  background-color: var(--dark-purple);
  width: 100%;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <PageNavigation />
      <ContactInfo />
      <LegalSection />
    </FooterContainer>
  );
};
