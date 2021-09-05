import * as React from "react";
import { graphql } from "gatsby";

import { LegaPage } from "../../components/sections/LegalPage";
import { LegalPageData } from "../../types/pages";

const DisclaimerPage: React.FC<LegalPageData> = ({ data }) => {
  return (
    <LegaPage
      headline={data.markdownRemark.frontmatter.headline}
      bodyCopy={data.markdownRemark.html}
    />
  );
};

export default DisclaimerPage;

export const privacyData = graphql`
  query {
    markdownRemark(frontmatter: { headline: { eq: "Disclaimer" } }) {
      html
      frontmatter {
        headline
      }
    }
  }
`;
