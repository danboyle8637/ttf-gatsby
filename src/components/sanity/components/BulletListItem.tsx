import * as React from "react";
import styled from "styled-components";

import { KettlebellIcon } from "../../svgs/KettlebellIcon";
import { sizes } from "../../../styles/sizes";

interface BulletListItemProps {
  color?: string;
}

const ListItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 12px;
  align-items: start;
  color: var(--paragraph-color, var(--text-white));
  line-height: 1.95;
  ${sizes.aboveTablet} {
    gap: 16px;
  }
`;

const KettlebellBullet = styled(KettlebellIcon)`
  padding-top: 4px;
  width: 14px;
  ${sizes.aboveTablet} {
    padding-top: 7px;
    width: 16px;
  }
`;

export const BulletListItem: React.FC<BulletListItemProps> = ({
  children,
  color,
}) => {
  const styles = {
    "--kettlebell-fill": color ? color : "var(--accent-pink)",
  } as React.CSSProperties;

  return (
    <ListItem style={styles}>
      <KettlebellBullet />
      <div>{children}</div>
    </ListItem>
  );
};
