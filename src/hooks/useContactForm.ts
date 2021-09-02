import * as React from "react";
import { useState, useEffect } from "react";

import {
  formValidator,
  isRequiredValidationRules,
  emailValidationRules,
} from "../utils/validation/forms";
import { capitalizeName } from "../utils/utilityFunctions";

export type CallToActionInputName = "firstName" | "emailAddress" | "message";

interface InputValue {
  value: string;
  valid: boolean;
}

interface InputOptions {
  initial: boolean;
  touched: boolean;
}

export const useContactForm = () => {
  const [firstName, setFirstNameValue] = useState<InputValue>({
    value: "",
    valid: false,
  });

  const [firstNameOptions, setFirstNameOptions] = useState<InputOptions>({
    initial: true,
    touched: false,
  });

  const [emailAddress, setEmailAddressValue] = useState<InputValue>({
    value: "",
    valid: false,
  });

  const [emailAddressOptions, setEmailAddressOptions] = useState<InputOptions>({
    initial: true,
    touched: false,
  });

  const [message, setMessage] = useState({
    value: "",
    valid: false,
  });

  const [messageOptions, setMessageOptions] = useState({
    initial: true,
    touched: false,
  });

  const [clearInput, setClearInput] = useState<boolean>(false);

  useEffect(() => {
    if (clearInput) {
      setFirstNameValue({ value: "", valid: false });
      setFirstNameOptions({ initial: true, touched: false });
      setEmailAddressValue({ value: "", valid: false });
      setEmailAddressOptions({ initial: true, touched: false });
      setMessage({ value: "", valid: false });
      setMessageOptions({ initial: true, touched: false });
    }

    setClearInput(false);
  }, [clearInput]);

  const updateInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name as CallToActionInputName;

    switch (name) {
      case "firstName": {
        const data = capitalizeName(value);
        const valid = formValidator(value, isRequiredValidationRules);
        setFirstNameValue({
          value: data,
          valid: valid,
        });
        break;
      }
      case "emailAddress": {
        const data = value.toLowerCase();
        const valid = formValidator(data, emailValidationRules);
        setEmailAddressValue({
          value: data,
          valid: valid,
        });
        break;
      }
      case "message": {
        const valid = formValidator(value, isRequiredValidationRules);
        setMessage({
          value: value,
          valid: valid,
        });
        break;
      }
      default: {
        throw new Error("You did not handle all of your lead inputs");
      }
    }
  };

  const updateInputOptions = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name as CallToActionInputName;

    switch (name) {
      case "firstName": {
        setFirstNameOptions(({ touched }) => ({
          initial: false,
          touched: !touched,
        }));
        break;
      }
      case "emailAddress": {
        setEmailAddressOptions(({ touched }) => ({
          initial: false,
          touched: !touched,
        }));
        break;
      }
      case "message": {
        setMessageOptions(({ touched }) => ({
          initial: false,
          touched: !touched,
        }));
        break;
      }
      default: {
        throw new Error("You did not handle all of your lead inputs");
      }
    }
  };

  return {
    firstName,
    firstNameOptions,
    emailAddress,
    emailAddressOptions,
    message,
    messageOptions,
    updateInputValue,
    updateInputOptions,
    setClearInput,
  };
};
