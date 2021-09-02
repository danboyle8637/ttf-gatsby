import * as React from "react";
import styled from "styled-components";

import { ExternalLinkIcon } from "../../svgs/ExternalLink";

interface ExternalLinkProps {
  url: string;
}

const LinkContainer = styled.span`
  display: inline-flex;
  align-items: center;
`;

const Link = styled.a`
  color: var(--color-blue-6);
  transition: color 300ms ease-in-out;
  &:hover {
    color: var(--color-purple-7);
  }
`;

const LinkIcon = styled(ExternalLinkIcon)`
  margin: 0 6px 0 4px;
  width: 16px;
`;

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  children,
  url,
}) => {
  return (
    <LinkContainer>
      <Link href={url} rel="noreferrer noopener" target="_blank">
        {children}
      </Link>
      <LinkIcon />
    </LinkContainer>
  );
};
