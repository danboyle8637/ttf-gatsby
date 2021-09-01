import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

import { MembershipCards } from "./MembershipCards";
import { ClassPassCards } from "./ClassPassCards";
import { LargeToggleSwitch } from "../../forms/inputs/LargeToggleSwitch";

const SectionContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 100%;
  max-width: 1300px;
`;

const CardsContainer = styled.div`
  padding: 80px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
`;

export const PriceCardSection = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleToggleSwitch = () => {
    console.log("Toggle the Switch");
    setIsActive((prevValue) => !prevValue);
  };

  const handleToggleSwithWithKeyboard = (event: React.KeyboardEvent) => {
    console.log(event.key);
    setIsActive((prevValue) => !prevValue);
  };

  return (
    <>
      <LargeToggleSwitch
        isOn={isActive}
        name="togglePrice"
        leftLabel="Memberships"
        rightLabel="Class Passes"
        toggleSwitch={handleToggleSwitch}
        toggleSwitchWithKeyboard={handleToggleSwithWithKeyboard}
      />
      <CardsContainer>
        <MembershipCards isActive={!isActive} />
        <ClassPassCards isActive={isActive} />
      </CardsContainer>
    </>
  );
};
