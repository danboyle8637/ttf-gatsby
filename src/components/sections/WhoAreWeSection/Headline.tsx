import * as React from "react";

import { MainSectionHeadline } from "../../../styles/typography";
import { DiagonalSectionHeadline } from "../../content/DiagonalSectionHeadline";

interface HeadlineProps {
  headline: string;
}

export const Headline: React.FC<HeadlineProps> = ({ headline }) => {
  return (
    <DiagonalSectionHeadline>
      <MainSectionHeadline>{headline}</MainSectionHeadline>
    </DiagonalSectionHeadline>
  );
};
