import * as React from "react";
import styled from "styled-components";

import { ClockIcon as Clock } from "../../svgs/ClockIcon";

const Icon = styled(Clock)`
  width: 27px;
`;

export const ClockIcon = () => {
  return <Icon />;
};
