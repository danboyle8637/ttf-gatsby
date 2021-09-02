import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { CallOutHeadline } from "./CallOutHeadline";
import { PrimaryButton } from "../../buttons/PrimaryButton";
import { ContactInfo } from "../../shared/ContactInfo";
import { ContactContent } from "../../../types/content";
import { sizes } from "../../../styles/sizes";

const SectionContainer = styled.section`
  padding: 40px 12px 80px 12px;
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
    align-items: center;
  }
  ${sizes.aboveTablet} {
    padding: 120px 0 80px 0;
    width: fit-content;
  }
  ${sizes.aboveIpadPro} {
    padding: 180px 0 80px 0;
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
      <ContactInfo
        addressLine1={data.contactInfo.frontmatter.addressLine1}
        addressLine2={data.contactInfo.frontmatter.addressLine2}
        addressLine3={data.contactInfo.frontmatter.addressLine3}
        phoneNumber={data.contactInfo.frontmatter.phoneNumber}
        emailAddress={data.contactInfo.frontmatter.emailAddress}
        showButton={false}
      />
    </SectionContainer>
  );
};
