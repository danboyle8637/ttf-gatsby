import * as React from "react";
import styled from "styled-components";

import { FacebookIcon } from "../../svgs/FacebookIcon";
import { InstagramIcon } from "../../svgs/InstagramIcon";

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  align-items: center;
  width: fit-content;
`;

const Facebook = styled(FacebookIcon)`
  width: 30px;
`;

const Instagram = styled(InstagramIcon)`
  width: 30px;
`;

export const SocialIcons = () => {
  return (
    <IconContainer>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Facebook gradientId="facebookFooterIcon" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Instagram gradientId="instagramFooterIcon" />
      </a>
    </IconContainer>
  );
};
