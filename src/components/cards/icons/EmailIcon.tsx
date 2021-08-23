import * as React from "react";
import styled from "styled-components";

import { EmailIcon as Email } from "../../svgs/EmailIcon";

const Icon = styled(Email)`
  width: 32px;
`;

export const EmailIcon = () => {
  return <Icon />;
};
