import * as React from "react";
import { graphql } from "gatsby";

import { HomeHeader } from "../components/sections/imageSections/PageHeaderImage";
import { HomeHeaderContentSection } from "../components/sections/contentSections/HomeHeaderContent";
import { GatsbyImage } from "../types/images";

interface HomeData {
  data: {
    mobileHeaderImage: GatsbyImage;
    aboveMobileHeaderImage: GatsbyImage;
  };
}

const IndexPage: React.FC<HomeData> = ({ data }) => {
  return (
    <main>
      <HomeHeader
        mobileImage={data.mobileHeaderImage.childImageSharp.gatsbyImageData}
        aboveMobileImage={
          data.aboveMobileHeaderImage.childImageSharp.gatsbyImageData
        }
        altTag="Group of women flexing after a tough workout"
        titleTag="This Time Fitness"
      />
      <HomeHeaderContentSection />
    </main>
  );
};

export default IndexPage;

export const homeData = graphql`
  query {
    mobileHeaderImage: file(
      relativePath: { eq: "ttf-group-flex-600x600.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    aboveMobileHeaderImage: file(
      relativePath: { eq: "ttf-group-flex-1440x700.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;
