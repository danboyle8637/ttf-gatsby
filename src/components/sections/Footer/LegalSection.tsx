import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { FooterNavItem } from "./FooterNavItem";
import { BoldLabel } from "../../../styles/typography";
import { LegalLinks } from "../../../types/pages";

const LegalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 8px;
  justify-items: center;
  width: fit-content;
`;

const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  justify-items: center;
`;

export const LegalSection = () => {
  const data: LegalLinks = useStaticQuery(graphql`
    query {
      legalLinks: allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "legal" } } }
      ) {
        nodes {
          frontmatter {
            headline
            slug
          }
        }
      }
    }
  `);

  const legalLinks = data.legalLinks.nodes.map((link, i) => {
    return (
      <FooterNavItem
        key={i}
        label={link.frontmatter.headline}
        slug={`/legal${link.frontmatter.slug}`}
      />
    );
  });

  const styles = {
    "--label-font-size": "1.4rem",
    // "--label-color": ""
  } as React.CSSProperties;

  return (
    <LegalContainer>
      <LinksContainer style={styles}>{legalLinks}</LinksContainer>
      <BoldLabel>2021 - This Time Fitness</BoldLabel>
    </LegalContainer>
  );
};
