import * as React from "react";

import {
  MainPageHeadline,
  MainSectionHeadline,
} from "../../../styles/typography";
import { DiagonalSectionHeadline } from "../../content/DiagonalSectionHeadline";

interface HeadlineProps {
  headline1: string;
  headline2: string;
}

export const Headline: React.FC<HeadlineProps> = ({ headline1, headline2 }) => {
  return (
    <DiagonalSectionHeadline>
      <MainPageHeadline>{headline1}</MainPageHeadline>
      <MainSectionHeadline>{headline2}</MainSectionHeadline>
    </DiagonalSectionHeadline>
  );
};
