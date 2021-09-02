import * as React from "react";
import { BaseSVGProps } from "../../types/svgs";

export const InternalLinkIcon: React.FC<BaseSVGProps> = ({
  width,
  height,
  className,
}) => {
  return (
    <svg
      id="internal-link-icon"
      data-name="internal-link-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 72.66 72.24"
    >
      <path
        style={{ stroke: "var(--internal-link-stroke, var(--accent-blue))" }}
        d="M35.04 57l-7.14 7.12a14 14 0 01-19.8 0h0a14 14 0 010-19.8L22.24 30.2a14 14 0 0119.8 0h0"
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="8"
      />
      <path
        style={{ stroke: "var(--internal-link-stroke, var(--accent-blue))" }}
        d="M36.81 16.06l8-8a14 14 0 0119.8 0h0a14 14 0 010 19.8L50.42 42.04a14 14 0 01-19.8 0h0"
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="8"
      />
    </svg>
  );
};
