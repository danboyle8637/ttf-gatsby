import { IGatsbyImageData } from "gatsby-plugin-image";

export interface GatsbyImage {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
}
