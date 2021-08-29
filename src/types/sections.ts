import { GatsbyImage } from "./images";

export interface WhoAreWeSectionData {
  mobileImage: GatsbyImage;
  aboveMobileImage: GatsbyImage;
  headline: {
    frontmatter: {
      headline: string;
    };
  };
}
