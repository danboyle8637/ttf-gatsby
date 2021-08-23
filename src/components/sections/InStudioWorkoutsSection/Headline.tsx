import * as React from "react";

import { MainPageHeadline } from "../../../styles/typography";
import { SectionHeadline } from "../../headlines/SectionHeadline";

interface HeadlineProps {
  headline1: string;
  headline2: string;
}

export const Headline: React.FC<HeadlineProps> = ({ headline1, headline2 }) => {
  return (
    <SectionHeadline>
      <MainPageHeadline>{headline1}</MainPageHeadline>
      <MainPageHeadline>{headline2}</MainPageHeadline>
    </SectionHeadline>
  );
};
