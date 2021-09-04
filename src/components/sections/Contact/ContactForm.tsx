import * as React from "react";
import styled from "styled-components";

import { TextInput } from "../../forms/inputs/TextInput";
import { Textarea } from "../../forms/inputs/TextArea";
import { RadioInput } from "../../forms/inputs/RadioInput";
import { PrimaryButton } from "../../buttons/PrimaryButton";
import { useContactForm } from "../../../hooks/useContactForm";
import { sizes } from "../../../styles/sizes";

const FormContainer = styled.form`
  padding: 0 12px 120px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 80px;
  justify-items: center;
  width: 100%;
  ${sizes.aboveMobile} {
    padding: 0 0 200px 0;
  }
`;

const SubFormContainer = styled.div`
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
    contactReason,
    message,
    messageOptions,
    updateInputValue,
    updateInputOptions,
    setClearInput,
  } = useContactForm();

  const handleContactFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const body = {
      firstName: firstName.value,
      emailAddress: emailAddress.value,
      contactReason: contactReason.value,
      message: message.value,
    };

    console.log(body);
  };

  const isDisabled = !firstName.valid || !emailAddress.valid || !message.valid;

  return (
    <FormContainer onSubmit={handleContactFormSubmit}>
      <SubFormContainer>
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
      </SubFormContainer>
      <RadioInput
        labelName="How can I help you?"
        options={contactReason.options}
        updateInputValue={updateInputValue}
      />
      <SubFormContainer>
        <Textarea
          name="message"
          labelName="Tell me the details..."
          labelFor="message"
          maxLength={600}
          rows={5}
          value={message.value}
          valid={message.valid}
          initial={messageOptions.initial}
          touched={messageOptions.touched}
          onChange={updateInputValue}
          onFocus={updateInputOptions}
          onBlur={updateInputOptions}
        />
        <PrimaryButton type="submit" isDisabled={isDisabled}>
          {isDisabled ? "Fill Out Entire Form" : "Get Back To Me!"}
        </PrimaryButton>
      </SubFormContainer>
    </FormContainer>
  );
};
