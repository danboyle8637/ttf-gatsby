import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { ContactInfoCard } from "../cards/ContactInfoCard";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { BoldLabel } from "../../styles/typography";
import { ContactContent } from "../../types/content";
import { sizes } from "../../styles/sizes";

const SectionContainer = styled.div`
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: center;
  width: 100%;
  ${sizes.aboveMobile} {
    padding-top: 80px;
  }
`;

const ContactInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  width: 100%;
  ${sizes.aboveMobile} {
    grid-template-columns: 1fr 1fr;
  }
`;

const PhoneAndEmailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  width: 100%;
`;

const ClickToCall = styled.a`
  font-size: 1.7rem;
  font-weight: 700;
  color: var(--accent-blue);
  text-decoration: none;
`;

export const ResponsiveContactInfo: React.FC = () => {
  const data: ContactContent = useStaticQuery(graphql`
    query {
      contactInfo: markdownRemark(
        frontmatter: { title: { eq: "contact-info" } }
      ) {
        frontmatter {
          addressLine1
          addressLine2
          addressLine3
          phoneNumber
          emailAddress
        }
      }
    }
  `);

  return (
    <SectionContainer>
      <ContactInfoContainer>
        <ContactInfoCard iconType="location">
          <BoldLabel>{data.contactInfo.frontmatter.addressLine1}</BoldLabel>
          <BoldLabel>{data.contactInfo.frontmatter.addressLine2}</BoldLabel>
          <BoldLabel>{data.contactInfo.frontmatter.addressLine3}</BoldLabel>
        </ContactInfoCard>
        <PhoneAndEmailContainer>
          <ContactInfoCard iconType="phone" alignItems="center">
            <ClickToCall href="tel:+1-843-437-6700">
              {data.contactInfo.frontmatter.phoneNumber}
            </ClickToCall>
          </ContactInfoCard>
          <ContactInfoCard iconType="email" alignItems="center">
            <p>{data.contactInfo.frontmatter.emailAddress}</p>
          </ContactInfoCard>
        </PhoneAndEmailContainer>
      </ContactInfoContainer>
      <PrimaryButton type="button" isDisabled={false}>
        FREE 14 Day Trial!
      </PrimaryButton>
    </SectionContainer>
  );
};
