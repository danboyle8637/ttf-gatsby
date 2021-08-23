import * as React from "react";
import styled from "styled-components";

import {
  CallOutHeadlineSmall,
  CallOutHeadlineLarge,
} from "../../../styles/typography";

const HeadlineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 8px;
  justify-items: center;
  width: 100%;
`;

export const CallOutHeadline = () => {
  const line1Styles = {
    "--call-out-font-size": "5.3rem",
  } as React.CSSProperties;

  const line2Styles = {
    "--call-out-color": "var(--accent-blue)",
  } as React.CSSProperties;

  return (
    <HeadlineContainer>
      <CallOutHeadlineSmall>You Have To</CallOutHeadlineSmall>
      <CallOutHeadlineLarge style={line2Styles}>Workout</CallOutHeadlineLarge>
      <CallOutHeadlineLarge>With Us!</CallOutHeadlineLarge>
    </HeadlineContainer>
  );
};
