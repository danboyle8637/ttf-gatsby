import * as React from "react";
import { CSSProperties } from "react";
import styled from "styled-components";

import { BasicRadioOption } from "./RadioOption";
import { ContactOption } from "../../../../hooks/useContactForm";

interface RadioInputProps {
  labelName: string;
  options: ContactOption[];
  updateInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 30px;
  justify-items: start;
  width: 100%;
  max-width: 500px;
`;

const InputQuestion = styled.p`
  padding: 0;
  font-size: 2rem;
  font-weight: 600;
  color: var(--input-label);
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  width: 100%;
`;

export const RadioInput: React.FC<RadioInputProps> = ({
  labelName,
  options,
  updateInputValue,
}) => {
  const radioOptions = options.map((option) => {
    const id = option.id;
    const name = option.name;
    const label = option.label;
    const value = option.value;
    const isChecked = option.isChecked;

    return (
      <BasicRadioOption
        key={id}
        id={value}
        name={name}
        value={value}
        label={label}
        isChecked={isChecked}
        updateInputValue={updateInputValue}
      />
    );
  });

  const inputStyles = {
    "--input-label": "var(--text-white)",
    "--input-text": "var(--text-white)",
  } as CSSProperties;

  return (
    <>
      <InputContainer style={inputStyles}>
        <InputQuestion>{labelName}</InputQuestion>
        <OptionsContainer>{radioOptions}</OptionsContainer>
      </InputContainer>
    </>
  );
};
