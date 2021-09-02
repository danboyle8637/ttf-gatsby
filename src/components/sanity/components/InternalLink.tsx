import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { InternalLinkIcon } from "../../svgs/InternalLinkIcon";

interface InternalLinkProps {
  url: string;
}

const Container = styled.a`
  display: inline;
  gap: 4px;
  &:hover {
    color: var(--color-purple-7);
  }
`;

const LinkIcon = styled(InternalLinkIcon)`
  margin: 0 6px 0 4px;
  width: 16px;
`;

export const InternalLink: React.FC<InternalLinkProps> = ({
  children,
  url,
}) => {
  return (
    <Link to={url}>
      <Container>
        {children} <LinkIcon />
      </Container>
    </Link>
  );
};
