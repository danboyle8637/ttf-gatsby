import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { MainPageHeadline } from "../../../styles/typography";
import { ClassSchedule } from "./ClassSchedule";
import { ContactInfo } from "../../shared/ContactInfo";
import { ShortCallToAction } from "../../sections/CallToActionSection/ShortCallToAction";
import { ContactContent } from "../../../types/content";

const SectionContainer = styled.section`
  padding: 80px 12px;
  display: flex;
  justify-content: center;
  background: var(--accent-blue-dark);
  width: 100%;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: start;
  width: 100%;
  max-width: 800px;
`;

export const ClassScheduleSection = () => {
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
      <ContentContainer>
        <MainPageHeadline>Full Schedule Limited Spots!</MainPageHeadline>
        <ClassSchedule />
        <ContactInfo
          addressLine1={data.contactInfo.frontmatter.addressLine1}
          addressLine2={data.contactInfo.frontmatter.addressLine2}
          addressLine3={data.contactInfo.frontmatter.addressLine3}
          phoneNumber={data.contactInfo.frontmatter.phoneNumber}
          emailAddress={data.contactInfo.frontmatter.emailAddress}
          showButton={true}
        />
      </ContentContainer>
    </SectionContainer>
  );
};

/*

*/
