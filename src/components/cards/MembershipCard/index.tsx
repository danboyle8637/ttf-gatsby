import * as React from "react";
import { CSSProperties } from "react";
import styled from "styled-components";

import { CardHeader } from "./CardHeader";
import { PriceSubCard } from "./PriceSubCard";
import { CardBulletPoints } from "./CardBulletPoints";
import { FloatingDummyButton } from "../../buttons/dummyButtons/FloatingDummyButton";
import { useIsHovering } from "../../../hooks/useIsHovering";
import {
  MembershipPlan,
  Price,
  NumberOfClasses,
} from "../../../types/components";

interface MembershipCardProps {
  plan: MembershipPlan;
}

const CardStack = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: end;
  width: 100%;
  max-width: 350px;
  isolation: isolate;
  cursor: pointer;
`;

const CardGlow = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  background-color: var(--primary-color);
  width: 100%;
  height: 70%;
  opacity: var(--glow-opacity);
  filter: blur(20px);
  transition: opacity 300ms ease-in-out;
`;

const CardContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 20px;
  background-color: var(--accent-blue-dark);
  border-radius: 20px;
  width: 100%;
  box-shadow: var(--card-shadow);
  transform: var(--card-transform);
  transition: box-shadow, transform, 300ms ease-in-out;
  z-index: 1;
`;

export const MembershipCard: React.FC<MembershipCardProps> = ({ plan }) => {
  const { isHovering, toggleIsHovering } = useIsHovering();

  const styles = {
    "--primary-color":
      plan === "fit plan"
        ? "var(--accent-blue)"
        : plan === "hardcore plan"
        ? "var(--accent-purple)"
        : "var(--accent-pink)",
    "--back-button":
      plan === "hardcore plan" ? "var(--accent-purple)" : "var(--accent-blue)",
    "--button-label": "var(--base-white)",
    "--button-background": "var(--accent-pink)",
    "--glow-opacity": isHovering ? "0.5" : "0",
    "--card-shadow": isHovering ? "0 4px 8px 1px hsla(0, 0%, 0%, 0.4)" : "none",
    "--card-transform": isHovering
      ? "translateY(-6px) scale(1.02)"
      : "translateY(0px) scale(1)",
  } as CSSProperties;

  const price: Price =
    plan === "fit plan"
      ? "87"
      : plan === "hardcore plan"
      ? "127"
      : plan === "rockstar plan"
      ? "150"
      : plan === "fit-classes"
      ? "60"
      : plan === "hardcore-classes"
      ? "120"
      : "167";

  const numberOfClasses: NumberOfClasses =
    plan === "fit plan"
      ? "8"
      : plan === "hardcore plan"
      ? "12"
      : plan === "rockstar plan"
      ? "Unlimited"
      : plan === "fit-classes"
      ? "5"
      : plan === "hardcore-classes"
      ? "10"
      : "15";

  return (
    <CardStack style={styles}>
      <CardGlow />
      <CardContainer
        onMouseOver={toggleIsHovering}
        onMouseLeave={toggleIsHovering}
      >
        <CardHeader planTitle={plan} />
        <PriceSubCard price={price} numberOfClasses={numberOfClasses} />
        <CardBulletPoints />
        <FloatingDummyButton isHovering={isHovering}>
          Choose This Plan
        </FloatingDummyButton>
      </CardContainer>
    </CardStack>
  );
};
