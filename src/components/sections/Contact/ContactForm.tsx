import * as React from "react";
import styled from "styled-components";

import { TextInput } from "../../forms/inputs/TextInput";
import {} from "../../forms/inputs/";
import { PrimaryButton } from "../../buttons/PrimaryButton";
import { useContactForm } from "../../../hooks/useContactForm";

const FormContainer = styled.form`
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: center;
  width: 100%;
`;

export const ContactForm = () => {
  const {
    firstName,
    firstNameOptions,
    emailAddress,
    emailAddressOptions,
    message,
    messageOptions,
    updateInputValue,
    updateInputOptions,
    setClearInput,
  } = useContactForm();

  return (
    <FormContainer onSubmit={handleLeadFormSubmit}>
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
      <PrimaryButton>I Want To Try TTF!</PrimaryButton>
    </FormContainer>
  );
};
