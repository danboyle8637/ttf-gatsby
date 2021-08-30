import { GatsbyImage } from "./images";

export interface HeaderSectionHeadlineContent {
  markdownRemark: {
    frontmatter: {
      headline1: string;
    };
  };
}

export interface ContactContent {
  contactInfo: {
    frontmatter: {
      addressLine1: string;
      addressLine2: string;
      addressLine3: string;
      phoneNumber: string;
      emailAddress: string;
    };
  };
}

// export interface HeadlineContent {}

export interface MarkdownContent {
  content: {
    html: string;
  };
}

export interface Testimonial {
  id: string;
  html: string;
  frontmatter: {
    headline: string;
    image: GatsbyImage;
  };
}

export interface CallToActionData {
  ctaCopy: {
    html: string;
    frontmatter: {
      headline: string;
    };
  };
}
