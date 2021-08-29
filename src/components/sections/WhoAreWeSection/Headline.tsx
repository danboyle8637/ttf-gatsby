import * as React from "react";

import { MainPageHeadline } from "../../../styles/typography";
import { DiagonalSectionHeadline } from "../../content/DiagonalSectionHeadline";

interface HeadlineProps {
  headline: string;
}

export const Headline: React.FC<HeadlineProps> = ({ headline }) => {
  return (
    <DiagonalSectionHeadline>
      <MainPageHeadline>{headline}</MainPageHeadline>
    </DiagonalSectionHeadline>
  );
};
