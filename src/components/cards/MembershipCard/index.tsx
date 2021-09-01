import * as React from "react";
import { forwardRef, CSSProperties } from "react";
import styled from "styled-components";

import { CardHeader } from "./CardHeader";
import { PriceSubCard } from "./PriceSubCard";
import { CardBulletPoints } from "./CardBulletPoints";
import { FloatingDummyButton } from "../../buttons/dummyButtons/FloatingDummyButton";
import { useIsHovering } from "../../../hooks/useIsHovering";
import {
  PricingType,
  MembershipPlan,
  Price,
  NumberOfClasses,
} from "../../../types/components";

interface MembershipCardProps {
  type: PricingType;
  planTitle: MembershipPlan;
  price: Price;
  numberOfClasses: NumberOfClasses;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  buttonText: string;
  link: string;
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

const CardContainer = styled.a`
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
  text-decoration: none;
  box-shadow: var(--card-shadow);
  outline: none;
  transform: var(--card-transform);
  transition: box-shadow, transform, 300ms ease-in-out;
  z-index: 1;
  &:focus {
    box-shadow: 0 0 0 3px var(--dark-blue), 0 0 0 6px var(--accent-blue);
  }
`;

export const MembershipCard = forwardRef<HTMLDivElement, MembershipCardProps>(
  (
    {
      type,
      planTitle,
      price,
      numberOfClasses,
      bullet1,
      bullet2,
      bullet3,
      buttonText,
      link,
    },
    ref
  ) => {
    const { isHovering, toggleIsHovering } = useIsHovering();

    const styles = {
      "--primary-color":
        planTitle === "fit"
          ? "var(--accent-blue)"
          : planTitle === "hardcore"
          ? "var(--accent-purple)"
          : "var(--accent-pink)",
      "--back-button":
        planTitle === "hardcore"
          ? "var(--accent-purple)"
          : "var(--accent-blue)",
      "--button-label": "var(--base-white)",
      "--button-background": "var(--accent-pink)",
      "--glow-opacity": isHovering ? "0.5" : "0",
      "--card-shadow": isHovering
        ? "0 4px 8px 1px hsla(0, 0%, 0%, 0.4)"
        : "none",
      "--card-transform": isHovering
        ? "translateY(-6px) scale(1.02)"
        : "translateY(0px) scale(1)",
    } as CSSProperties;

    return (
      <CardStack ref={ref} style={styles}>
        <CardGlow />
        <CardContainer
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={toggleIsHovering}
          onMouseLeave={toggleIsHovering}
        >
          <CardHeader planTitle={planTitle} type={type} />
          <PriceSubCard price={price} numberOfClasses={numberOfClasses} />
          <CardBulletPoints
            bullet1={bullet1}
            bullet2={bullet2}
            bullet3={bullet3}
          />
          <FloatingDummyButton isHovering={isHovering}>
            {buttonText}
          </FloatingDummyButton>
        </CardContainer>
      </CardStack>
    );
  }
);
