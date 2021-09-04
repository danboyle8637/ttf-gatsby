import { ContactOption } from "../hooks/useContactForm";

export const capitalizeName = (name: string) => {
  const nameArray = name.split("");
  const firstChar = nameArray.shift()?.toUpperCase();

  if (firstChar) {
    nameArray.unshift(firstChar);
    const cappedName = nameArray.join("");

    return cappedName;
  } else {
    return "";
  }
};

export const updateOptions = (
  optionsArray: ContactOption[],
  value: string
): ContactOption[] => {
  return optionsArray.map((option) => {
    if (option.value === value) {
      option.isChecked = !option.isChecked;
      return option;
    } else if (option.isChecked) {
      option.isChecked = !option.isChecked;
      return option;
    }
    return option;
  });
};
