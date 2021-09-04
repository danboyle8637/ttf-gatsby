import * as React from "react";
import { useState, useEffect } from "react";

import {
  formValidator,
  isRequiredValidationRules,
  emailValidationRules,
} from "../utils/validation/forms";
import { capitalizeName, updateOptions } from "../utils/utilityFunctions";

export type CallToActionInputName =
  | "firstName"
  | "emailAddress"
  | "reason"
  | "message";

interface InputValue {
  value: string;
  valid: boolean;
}

interface InputOptions {
  initial: boolean;
  touched: boolean;
}

export interface ContactOption {
  id: number;
  name: string;
  label: string;
  value: string;
  isChecked: boolean;
}

interface RadioInputValue {
  value: string;
  options: ContactOption[];
}

const contactOptions: ContactOption[] = [
  {
    id: 0,
    name: "reason",
    label: "Joining the In Studio Classes",
    value: "joining in studio classes",
    isChecked: true,
  },
  {
    id: 1,
    name: "reason",
    label: "Joining the Online Classes",
    value: "joining online classes",
    isChecked: false,
  },
  {
    id: 2,
    name: "reason",
    label: "Private Nutrition Coaching",
    value: "private nutrition coaching",
    isChecked: false,
  },
  {
    id: 3,
    name: "reason",
    label: "Private Personal Training",
    value: "private personal training",
    isChecked: false,
  },
  {
    id: 4,
    name: "reason",
    label: "Other",
    value: "other",
    isChecked: false,
  },
];

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

  const [contactReason, setContactReason] = useState<RadioInputValue>({
    value: "",
    options: contactOptions,
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
      setContactReason({ value: "", options: contactOptions });
    }

    setClearInput(false);
  }, [clearInput]);

  const updateInputValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      case "reason": {
        const newOptions = updateOptions(contactOptions, value);
        setContactReason({
          value: value,
          options: [...newOptions],
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

  const updateInputOptions = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    contactReason,
    message,
    messageOptions,
    updateInputValue,
    updateInputOptions,
    setClearInput,
  };
};
