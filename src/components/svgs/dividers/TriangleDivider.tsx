import * as React from "react";
import { BaseSVGProps } from "../../../types/svgs";

export const TriangleDivider: React.FC<BaseSVGProps> = ({
  width,
  height,
  className,
}) => {
  return (
    <svg
      viewBox="0 0 200 59"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
    >
      <path
        id="traiangle-divider-container"
        fill="none"
        d="M0 0h200v58.961H0z"
      />
      <clipPath id="_clip1">
        <path d="M0 0h200v58.961H0z" />
      </clipPath>
      <g clip-path="url(#_clip1)">
        <path
          style={{ fill: "var(--divider-fill, var(--dark-blue))" }}
          id="triangle-divider"
          d="M0 0h200L.057 57.156 0 0z"
        />
      </g>
    </svg>
  );
};
