import * as React from "react";
import styled from "styled-components";

import { MainPageHeadline } from "../../styles/typography";

interface FullWidthHeadlineProps {
  headline: string;
}

export const FullWidthHeadline: React.FC<FullWidthHeadlineProps> = ({
  headline,
}) => {
  return <MainPageHeadline>{headline}</MainPageHeadline>;
};
