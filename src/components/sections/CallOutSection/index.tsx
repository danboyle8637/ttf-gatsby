import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { CallOutHeadline } from "./CallOutHeadline";
import { PrimaryButton } from "../../buttons/PrimaryButton";
import { ContactInfoCard } from "../../cards/ContactInfoCard";
import { ContactContent } from "../../../types/content";
import { sizes } from "../../../styles/sizes";

const SectionContainer = styled.section`
  padding: 80px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 80px;
  width: 100%;
  max-width: 1000px;
  ${sizes.aboveMobile} {
    padding: 80px 24px;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    justify-items: center;
    align-items: start;
  }
`;

const HeadlineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  justify-items: center;
  width: 100%; ;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  justify-items: center;
  width: 100%;
`;

export const CallOutSection = () => {
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
      <HeadlineContainer>
        <CallOutHeadline />
        <PrimaryButton>FREE 14 Day Trial!</PrimaryButton>
      </HeadlineContainer>
      <CardsContainer>
        <ContactInfoCard iconType="location">
          <p>{data.contactInfo.frontmatter.addressLine1}</p>
          <p>{data.contactInfo.frontmatter.addressLine2}</p>
          <p>{data.contactInfo.frontmatter.addressLine3}</p>
        </ContactInfoCard>
        <ContactInfoCard iconType="phone" alignItems="center">
          <p>{data.contactInfo.frontmatter.phoneNumber}</p>
        </ContactInfoCard>
        <ContactInfoCard iconType="email" alignItems="center">
          <p>{data.contactInfo.frontmatter.emailAddress}</p>
        </ContactInfoCard>
      </CardsContainer>
    </SectionContainer>
  );
};
