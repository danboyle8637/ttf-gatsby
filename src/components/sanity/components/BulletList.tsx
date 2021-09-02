import * as React from "react";
import styled from "styled-components";

const List = styled.ul`
  padding: 0 0 30px 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 30px;
  list-style: none;
`;

export const BulletList: React.FC = ({ children }) => {
  return <List>{children}</List>;
};
