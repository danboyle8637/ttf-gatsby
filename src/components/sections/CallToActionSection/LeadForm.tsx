import * as React from "react";
import styled from "styled-components";

import { TextInput } from "../../forms/inputs/TextInput";
import { useLeadForm } from "../../../hooks/useLeadForm";

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: center;
  width: 100%;
`;

export const LeadForm = () => {
  const {
    firstName,
    firstNameOptions,
    emailAddress,
    emailAddressOptions,
    updateInputValue,
    updateInputOptions,
    setClearInput,
  } = useLeadForm();

  return (
    <FormContainer>
      <TextInput
        inputType="text"
        inputName="firstName"
        labelName="First Name..."
        labelFor="firstName"
        value={firstName.value}
        valid={firstName.valid}
        initial={firstNameOptions.initial}
        touched={firstNameOptions.touched}
        onChange={updateInputValue}
        onFocus={updateInputOptions}
        onBlur={updateInputOptions}
      />
      <TextInput
        inputType="text"
        inputName="emailAddress"
        labelName="Email Address..."
        labelFor="emailAddress"
        value={emailAddress.value}
        valid={emailAddress.valid}
        initial={emailAddressOptions.initial}
        touched={emailAddressOptions.touched}
        onChange={updateInputValue}
        onFocus={updateInputOptions}
        onBlur={updateInputOptions}
      />
    </FormContainer>
  );
};
