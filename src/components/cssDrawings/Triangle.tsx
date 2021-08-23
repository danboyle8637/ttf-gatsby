import React from "react";
import styled from "styled-components";

import { sizes } from "../../styles/sizes";

const TriangleTopLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 100px solid var(--triangle-color, var(--dark-blue));
  border-right: 400px solid transparent;
  ${sizes.aboveMobile} {
    border-top: 80px solid var(--triangle-color, var(--dark-blue));
    border-right: 900px solid transparent;
  }
  ${sizes.aboveIpadPro} {
    border-top: 120px solid var(--triangle-color, var(--dark-blue));
    border-right: 1400px solid transparent;
  }
`;

const TriangleTopRight = styled.div`
  width: 0;
  height: 0;
  border-top: 100px solid red;
  border-left: 100px solid transparent;
`;

const TriangleBottomLeft = styled.div`
  width: 0;
  height: 0;
  border-bottom: 100px solid red;
  border-right: 100px solid transparent;
`;

const triangleBottomRight = styled.div`
  width: 0;
  height: 0;
  border-bottom: 100px solid red;
  border-left: 100px solid transparent;
`;

export const Triangle = () => {
  return <TriangleTopLeft />;
};
