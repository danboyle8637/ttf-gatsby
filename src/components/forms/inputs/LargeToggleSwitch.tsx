import * as React from "react";
import { useEffect, useRef, CSSProperties } from "react";
import styled from "styled-components";

import {
  largeToggleSwithWithWordsOnAni,
  largeToggleSwithWithWordsOffAni,
} from "../../../animations/forms";

interface LargeToggleSwitchProps {
  name: string;
  isOn: boolean;
  leftLabel: string;
  rightLabel: string;
  toggleSwitch: () => void;
  toggleSwitchWithKeyboard: (event: React.KeyboardEvent) => void;
}

const greyTheme = {
  "--switch-background-color": "var(--accent-blue-dark)",
  "--switch-knob-color": "var(--accent-blue)",
  "--switch-hover-focus-box-shadow":
    "0 4px 2px 0px hsl(0, 0%, 6%), 0 0 0 2px hsl(0, 0%, 20%)",
} as CSSProperties;

const Label = styled.label`
  --switch-width: 300px;
  position: relative;
  background-color: var(--switch-background-color);
  border-radius: 16px;
  width: var(--switch-width);
  height: calc(var(--switch-width) / 5);
  cursor: pointer;
  outline: none;
  transition: box-shadow 300ms ease-in-out;
  &:hover {
    box-shadow: 0 0 0 4px var(--dark-theme-background),
      0 0 0 6px hsla(256, 100%, 70%, 60%);
  }
  &:focus {
    box-shadow: 0 0 0 4px var(--dark-theme-background),
      0 0 0 6px hsla(256, 100%, 70%, 60%);
  }
`;

const Switch = styled.span`
  position: absolute;
  top: 50%;
  left: 8px;
  background: var(--switch-knob-color);
  border-radius: 10px;
  width: 150px;
  height: 44px;
  transform: translateY(-50%);
`;

const SwitchLabelContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  z-index: 1;
`;

const SwitchLabel = styled.p`
  padding: 0;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--switch-label-color);
  /* text-shadow: var(--switch-label-text-shadow); */
  transition: color, text-shadow, 240ms ease-in;
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const LargeToggleSwitch: React.FC<LargeToggleSwitchProps> = ({
  name,
  isOn,
  leftLabel,
  rightLabel,
  toggleSwitch,
  toggleSwitchWithKeyboard,
}) => {
  const knobRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const knob = knobRef.current;
    const xDistance = 150 - 16;

    if (knob && isOn) {
      largeToggleSwithWithWordsOnAni(knob, xDistance);
    }

    if (knob && !isOn) {
      largeToggleSwithWithWordsOffAni(knob);
    }
  }, [isOn]);

  const switchLabelOnStyles = {
    "--switch-label-color": "var(--base-white)",
    "--switch-label-text-shadow":
      "0 0 2px hsla(228, 100%, 70%, 100%), 0 0 4px hsla(228, 100%, 81%, 100%)",
  } as CSSProperties;

  const switchLabelOffStyles = {
    "--switch-label-color": "hsl(203, 0%, 23%)",
    "--switch-label-text-shadow":
      "0 0 2px hsla(228, 100%, 70%, 0%), 0 0 4px hsla(228, 100%, 81%, 0%)",
  } as CSSProperties;

  return (
    <Label
      style={greyTheme}
      htmlFor={name}
      tabIndex={0}
      onKeyDown={toggleSwitchWithKeyboard}
    >
      <SwitchLabelContainer>
        <SwitchLabel style={isOn ? switchLabelOffStyles : switchLabelOnStyles}>
          {leftLabel}
        </SwitchLabel>
        <SwitchLabel style={isOn ? switchLabelOnStyles : switchLabelOffStyles}>
          {rightLabel}
        </SwitchLabel>
      </SwitchLabelContainer>
      <Input
        type="checkbox"
        id={name}
        name={name}
        checked={isOn}
        onChange={toggleSwitch}
      />
      <Switch ref={knobRef} />
    </Label>
  );
};
