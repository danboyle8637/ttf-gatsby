import * as React from "react";
import { Link } from "gatsby";

import { NavigationLabel } from "../../../styles/typography";

interface FooterNavItemProps {
  label: string;
  slug: string;
}

export const FooterNavItem: React.FC<FooterNavItemProps> = ({
  label,
  slug,
}) => {
  return (
    <NavigationLabel>
      <Link
        to={slug}
        style={{ textDecoration: "none" }}
        activeStyle={{ color: "var(--accent-blue)" }}
      >
        {label}
      </Link>
    </NavigationLabel>
  );
};
