import * as React from "react";
import styled from "styled-components";

import { MapPinIcon } from "../../svgs/MapPinIcon";

const Icon = styled(MapPinIcon)`
  align-self: start;
  width: 24px;
`;

export const LocationIcon = () => {
  return <Icon />;
};
