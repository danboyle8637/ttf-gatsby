import * as React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark-purple);
  width: 100%;
`;

export const TestimonialSection = () => {
  return (
    <SectionContainer>
      <div style={{ width: "100%", height: "500px" }} />
    </SectionContainer>
  );
};
