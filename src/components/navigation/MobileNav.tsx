import * as React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import styled from "styled-components";

import { NavigationLinks } from "../../types/components";
import { commonNavLabelStyles } from "../../styles/typography";

interface MobileNavProps {
  toggleNavDrawer: () => void;
}

const NavigationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: center;
`;

const NavButton = styled.button`
  ${commonNavLabelStyles}
  padding: 18px;
  background: none;
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: box-shadow 300ms ease-in-out;
  &:focus {
    box-shadow: 0 0 0 4px hsl(193, 91%, 56%);
  }
  &:hover {
    box-shadow: 0 0 0 4px hsl(193, 91%, 56%);
  }
`;

export const MobileNav: React.FC<MobileNavProps> = ({ toggleNavDrawer }) => {
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

  const handleNavClick = (slug: string) => {
    toggleNavDrawer();
    navigate(slug);
  };

  const navList = data.navigation.frontmatter.nav.map((link, i) => {
    return (
      <NavButton
        key={i}
        type="button"
        onClick={() => handleNavClick(link.node.slug)}
      >
        {link.node.label}
      </NavButton>
    );
  });

  const styles = {
    "--label-font-size": "2.2rem",
  } as React.CSSProperties;

  return <NavigationContainer style={styles}>{navList}</NavigationContainer>;
};
