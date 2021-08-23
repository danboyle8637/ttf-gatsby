import { IGatsbyImageData } from "gatsby-plugin-image";

export interface GatsbyImage {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
}

export interface DoubleImageSectionData {
  image1: GatsbyImage;
  image2: GatsbyImage;
  headlines: {
    frontmatter: {
      image1Headline: string;
      image2Headline: string;
    };
  };
}

export interface HeaderImage {
  mobileImage: GatsbyImage;
  aboveMobileImage: GatsbyImage;
  headline: {
    frontmatter: {
      headline1: string;
      headline2: string;
    };
  };
}
