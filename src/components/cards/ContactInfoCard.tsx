import * as React from "react";
import styled from "styled-components";

import { RenderIcon } from "./icons/RenderIcon";
import { IconType } from "../../types/svgs";

type AlignItems = "start" | "center";

interface SmallIconTextCardProps {
  iconType: IconType;
  alignItems?: AlignItems;
}

const CardContainer = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 12px;
  justify-items: start;
  align-items: center;
  background: linear-gradient(to right, hsl(227, 30%, 34%), hsl(227, 30%, 54%));
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 2px 12px 2px hsla(240, 0%, 0%, 0.4);
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 4px;
  justify-items: start;
`;

export const ContactInfoCard: React.FC<SmallIconTextCardProps> = ({
  iconType,
  alignItems,
  children,
}) => {
  const styles = {
    "--align-items": alignItems === "center" ? "center" : "start",
  } as React.CSSProperties;

  return (
    <CardContainer style={styles}>
      <RenderIcon iconType={iconType} />
      <ContentContainer>{children}</ContentContainer>
    </CardContainer>
  );
};
