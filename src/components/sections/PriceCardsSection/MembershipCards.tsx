import * as React from "react";
import { useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { MembershipCard } from "../../cards/MembershipCard";
import { PricingCards } from "../../../types/components";
import {
  priceCardsEnterStagger,
  priceCardsLeaveStagger,
} from "../../../animations/cards";
import { MultiDirectionalScale } from "../../../animations/transitions/MultiDirectionTransition";
import { sizes } from "../../../styles/sizes";

interface MembershipCardsProps {
  isActive: boolean;
}

const SectionContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  width: 100%;
  ${sizes.aboveMobile} {
    padding-bottom: 120px;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 40px;
  }
  ${sizes.aboveTablet} {
    padding-bottom: 160px;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  ${sizes.aboveIpadPro} {
    width: 1200px;
  }
`;

export const MembershipCards: React.FC<MembershipCardsProps> = ({
  isActive,
}) => {
  const data: PricingCards = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "membership-pricing" } } }
        sort: { fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            order
            type
            planTitle
            price
            numberOfClasses
            bullet1
            bullet2
            bullet3
            buttonText
            link
          }
        }
      }
    }
  `);

  const cardsArray = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsArray.current;
    if (cards && isActive) {
      console.log("Card stagger should run");
      priceCardsEnterStagger(cards, -1);
    }

    if (cards && !isActive) {
      priceCardsLeaveStagger(cards, -1, false);
    }
  }, [isActive]);

  const membershipCards = data.allMarkdownRemark.nodes.map(
    ({ frontmatter }, i) => {
      const id = frontmatter.order;
      const type = frontmatter.type;
      const planTitle = frontmatter.planTitle;
      const price = frontmatter.price;
      const numberOfClasses = frontmatter.numberOfClasses;
      const bullet1 = frontmatter.bullet1;
      const bullet2 = frontmatter.bullet2;
      const bullet3 = frontmatter.bullet3;
      const buttonText = frontmatter.buttonText;
      const link = frontmatter.link;

      return (
        <MembershipCard
          ref={(el: HTMLDivElement) => (cardsArray.current[i] = el)}
          key={id}
          type={type}
          planTitle={planTitle}
          price={price}
          numberOfClasses={numberOfClasses}
          bullet1={bullet1}
          bullet2={bullet2}
          bullet3={bullet3}
          buttonText={buttonText}
          link={link}
        />
      );
    }
  );

  return (
    <MultiDirectionalScale
      isActive={isActive}
      enterDirection="from_left"
      exitDirection="to_left"
    >
      <SectionContainer>{membershipCards}</SectionContainer>
    </MultiDirectionalScale>
  );
};
