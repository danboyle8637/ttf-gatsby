import { IGatsbyImageData } from "gatsby-plugin-image";

interface SanityImage {
  string1: {
    asset: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

export interface HomePageData {
  data: {
    seo: {
      frontmatter: {
        pageTitle: string;
        description: string;
      };
    };
    socialShareInfo: {
      socialShareInformation: {
        headline1: string;
        string1: {
          current: string;
        };
        description1: string;
        standardImage1: {
          asset: {
            url: string;
          };
        };
      };
    };
    headerSection: {
      backgroundImage1: {
        string1: string;
        string2: string;
        mobileImage: SanityImage;
        laptopImage: SanityImage;
      };
    };
  };
}

export interface WhoWeAreCopy {
  whoWeAreCopy: {
    copyBlock1: {
      _rawContent: [];
    };
  };
}

export interface PostHeadlineImageData {
  pageImages: {
    standardImage1: {
      string1: string;
      string2: string;
      standardImage1: {
        string1: string;
        string2: string;
        standardImage1: {
          asset: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      };
      standardImage2: SanityImage;
      standardImage3: SanityImage;
    };
  };
  headlines: {
    frontmatter: {
      image1Headline: string;
      image2Headline: string;
    };
  };
}

export interface WhoWeAreSectionData {
  whoWeAreImage: {
    standardImage1: {
      standardImage4: SanityImage;
    };
  };
  headline: {
    frontmatter: {
      headline: string;
    };
  };
}

export interface InStudioTrainingSectionData {
  sectionImages: {
    standardImage2: {
      string1: string;
      string2: string;
      standardImage1: {
        string1: string;
        string2: string;
        standardImage1: {
          asset: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      };
    };
  };
  headline: {
    frontmatter: {
      headline1: string;
      headline2: string;
    };
  };
}

export interface InStudioTrainingCopyData {
  inStudioCopy: {
    copyBlock2: {
      _rawContent: [];
    };
  };
}

export interface OnlineWorkoutsSectionData {
  sectionImages: {
    standardImage2: {
      standardImage1: {
        string1: string;
        string2: string;
      };
      standardImage2: SanityImage;
    };
  };
  headline: {
    frontmatter: {
      headline1: string;
      headline2: string;
    };
  };
}

export interface OnlineWorkoutsCopyData {
  onlineWorkoutsCopy: {
    copyBlock3: {
      _rawContent: [];
    };
  };
}

export interface CallToActionCopyData {
  callToActionCopy: {
    copyBlock4: {
      headline: string;
      _rawContent: [];
    };
  };
}
