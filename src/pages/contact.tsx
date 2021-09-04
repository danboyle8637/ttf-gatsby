import * as React from "react";
import { graphql } from "gatsby";

import { HeaderSection } from "../components/sections/Contact/HeaderSection";
import { ContactForm } from "../components/sections/Contact/ContactForm";
import { CallToActionSection } from "../components/sections/CallToActionSection";
import { Seo } from "../components/content/Seo";
import { ContactPageData } from "../types/pages";

const ContactPage: React.FC<ContactPageData> = ({ data }) => {
  return (
    <>
      <Seo
        title={data.seo.frontmatter.pageTitle}
        description={data.seo.frontmatter.description}
      />
      <HeaderSection />
      <ContactForm />
      <CallToActionSection />
    </>
  );
};

export default ContactPage;

export const contactData = graphql`
  query {
    seo: markdownRemark(frontmatter: { title: { eq: "seo-contact" } }) {
      frontmatter {
        pageTitle
        description
      }
    }
  }
`;
