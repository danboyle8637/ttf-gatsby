import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";

import { FooterNavItem } from "./FooterNavItem";
import { NavigationLinks } from "../../../types/components";
import { sizes } from "../../../styles/sizes";

const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  column-gap: 40px;
  row-gap: 20px;
  justify-items: start;
  width: fit-content;
  ${sizes.aboveMobile} {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 40px;
  }
  ${sizes.aboveTablet} {
    grid-template-columns: repeat(6, 1fr);
    justify-items: center;
  }
`;

export const PageNavigation = () => {
  const data: NavigationLinks = useStaticQuery(graphql`
    query {
      navigation: markdownRemark(frontmatter: { title: { eq: "navigation" } }) {
        frontmatter {
          nav {
            node {
              label
              slug
            }
          }
        }
      }
    }
  `);

  const navigation = data.navigation.frontmatter.nav.map((link, i) => {
    const label = link.node.label;
    const slug = link.node.slug;

    return <FooterNavItem key={i} label={label} slug={slug} />;
  });

  return <NavContainer>{navigation}</NavContainer>;
};
