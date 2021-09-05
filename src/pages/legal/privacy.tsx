import * as React from "react";
import { graphql } from "gatsby";

import { LegaPage } from "../../components/sections/LegalPage";
import { LegalPageData } from "../../types/pages";

const PrivacyPage: React.FC<LegalPageData> = ({ data }) => {
  return (
    <LegaPage
      headline={data.markdownRemark.frontmatter.headline}
      bodyCopy={data.markdownRemark.html}
    />
  );
};

export default PrivacyPage;

export const privacyData = graphql`
  query {
    markdownRemark(frontmatter: { headline: { eq: "Privacy Policy" } }) {
      html
      frontmatter {
        headline
      }
    }
  }
`;
