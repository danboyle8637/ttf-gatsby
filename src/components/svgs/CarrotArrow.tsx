import * as React from "react";
import { BaseSVGProps } from "../../types/svgs";

export const CarrotArrow: React.FC<BaseSVGProps> = ({
  width,
  height,
  className,
}) => {
  return (
    <svg
      viewBox="0 0 187 111"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
    >
      <path
        id="carrot-arrow-container"
        fill="none"
        d="M0 0h186.796v110.946H0z"
      />
      <g style={{ stroke: "var(--arrow-stroke, var(--base-white))" }}>
        <path
          id="left-arrow"
          d="M16.031 16.465l77.321 77.321"
          fill="none"
          strokeWidth="29.17"
        />
        <path
          id="right-arrow"
          d="M170.673 16.465L93.352 93.786"
          fill="none"
          strokeWidth="29.17"
        />
      </g>
    </svg>
  );
};
