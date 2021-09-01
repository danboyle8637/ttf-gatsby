export type PricingType = "membership" | "pass";

export type MembershipPlan = "fit" | "hardcore" | "rockstar";

export type NumberOfClasses = "5" | "8" | "10" | "12" | "15" | "Unlimited";

export type Price = 87 | 127 | 150 | 60 | 120 | 167;

export interface PricingCards {
  allMarkdownRemark: {
    nodes: [
      {
        frontmatter: {
          order: number;
          type: PricingType;
          planTitle: MembershipPlan;
          price: Price;
          numberOfClasses: NumberOfClasses;
          bullet1: string;
          bullet2: string;
          bullet3: string;
          buttonText: string;
          link: string;
        };
      }
    ];
  };
}
