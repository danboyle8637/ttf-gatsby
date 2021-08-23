export interface HeadlineContent {
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
