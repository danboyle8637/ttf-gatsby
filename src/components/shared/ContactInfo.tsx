import * as React from "react";
import styled from "styled-components";

import { ContactInfoCard } from "../cards/ContactInfoCard";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { BoldLabel } from "../../styles/typography";

interface ContactInfoProps {
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  phoneNumber: string;
  emailAddress: string;
  showButton: boolean;
}

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  justify-items: center;
  width: 100%;
`;

const ClickToCall = styled.a`
  font-size: 1.7rem;
  font-weight: 700;
  color: var(--accent-blue);
  text-decoration: none;
`;

export const ContactInfo: React.FC<ContactInfoProps> = ({
  addressLine1,
  addressLine2,
  addressLine3,
  phoneNumber,
  emailAddress,
  showButton,
}) => {
  const styles = {
    "--label-font-size": "1.6rem",
  } as React.CSSProperties;

  return (
    <CardsContainer style={styles}>
      <ContactInfoCard iconType="location">
        <BoldLabel>{addressLine1}</BoldLabel>
        <BoldLabel>{addressLine2}</BoldLabel>
        <BoldLabel>{addressLine3}</BoldLabel>
      </ContactInfoCard>
      <ContactInfoCard iconType="phone" alignItems="center">
        <ClickToCall href="tel:+1-843-437-6700">{phoneNumber}</ClickToCall>
      </ContactInfoCard>
      <ContactInfoCard iconType="email" alignItems="center">
        <p>{emailAddress}</p>
      </ContactInfoCard>
      {showButton ? <PrimaryButton>FREE 14 Day Trial!</PrimaryButton> : null}
    </CardsContainer>
  );
};
