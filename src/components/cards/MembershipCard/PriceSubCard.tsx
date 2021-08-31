import * as React from "react";
import styled from "styled-components";

import { Price, NumberOfClasses } from "../../../types/components";

interface PriceSubCardProps {
  price: Price;
  numberOfClasses: NumberOfClasses;
}

interface PriceDetailsProps {
  numberOfClasses: NumberOfClasses;
}

const SubCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
  pointer-events: none;
`;

const CardContainer = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--sub-card-background);
  border-radius: 10px;
  height: 105px;
`;

const PriceNumber = styled.p`
  position: relative;
  font-family: inherit;
  font-size: 5rem;
  font-weight: 700;
  color: var(--base-white);
  width: fit-content;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "$";
    font-size: 1.4rem;
    font-weight: 500;
    color: inherit;
    transform: translate(-10px, 20px);
  }
`;

const PriceDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 6px;
  justify-items: center;
  width: 100%;
  height: min-content;
`;

const PriceDetail = styled.p`
  padding: 0;
  font-family: inherit;
  font-size: var(--price-detail-font-size);
  font-weight: 600;
  color: var(--base-white);
  text-transform: uppercase;
  line-height: 1;
`;

const PriceDetails: React.FC<PriceDetailsProps> = ({ numberOfClasses }) => {
  const bigStyle = {
    "--price-detail-font-size": "2rem",
  } as React.CSSProperties;

  const smallStyle = {
    "--price-detail-font-size": "1.4rem",
  } as React.CSSProperties;

  return (
    <PriceDetailsContainer>
      {numberOfClasses === "Unlimited" ? (
        <>
          <PriceDetail style={bigStyle}>{numberOfClasses}</PriceDetail>
          <PriceDetail style={bigStyle}>classes</PriceDetail>
          <PriceDetail style={smallStyle}>per month</PriceDetail>
        </>
      ) : (
        <>
          <PriceDetail style={bigStyle}>{numberOfClasses} classes</PriceDetail>
          <PriceDetail style={smallStyle}>per month</PriceDetail>
        </>
      )}
    </PriceDetailsContainer>
  );
};

export const PriceSubCard: React.FC<PriceSubCardProps> = ({
  price,
  numberOfClasses,
}) => {
  const priceStyles = {
    "--sub-card-background": "var(--primary-color)",
  } as React.CSSProperties;

  const numberOfClassesSyltes = {
    "--sub-card-background": "var(--medium-blue)",
  } as React.CSSProperties;

  return (
    <SubCardsContainer>
      <CardContainer style={priceStyles}>
        <PriceNumber>{price}</PriceNumber>
      </CardContainer>
      <CardContainer style={numberOfClassesSyltes}>
        <PriceDetails numberOfClasses={numberOfClasses} />
      </CardContainer>
    </SubCardsContainer>
  );
};
