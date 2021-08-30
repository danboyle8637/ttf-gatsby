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

export interface OnlineWorkoutsSectionData {
  sectionImage: GatsbyImage;
  headline: {
    frontmatter: {
      headline1: string;
      headline2: string;
    };
  };
}
