import * as React from "react";
import { CSSProperties } from "react";
import styled from "styled-components";

interface CharacterCountChipProps {
  count: number;
  maxCount: number;
}

const ChipContainer = styled.div`
  padding: 6px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--chip-container-background, hsl(227, 30%, 10%));
  border-radius: 60px;
  box-shadow: 0 0 0 4px hsla(240, 0%, 0%, 0.6);
  width: fit-content;
  height: 30px;
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
`;

const CountLabel = styled.p`
  padding: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--count-label-color, var(--accent-blue));
  letter-spacing: 0.18rem;
`;

export const CharacterCountChip: React.FC<CharacterCountChipProps> = ({
  count,
  maxCount,
}) => {
  const styles = {
    "--count-label-color":
      count < 300
        ? "var(--color-accent-blue-1)"
        : count > 300 && count < 350
        ? "hsl(30, 71%, 56%)"
        : "hsl(345, 64%, 56%)",
  } as CSSProperties;

  return (
    <ChipContainer>
      <CountContainer>
        <CountLabel style={styles}>{count}</CountLabel>
        <CountLabel>/</CountLabel>
        <CountLabel>{maxCount}</CountLabel>
      </CountContainer>
    </ChipContainer>
  );
};
