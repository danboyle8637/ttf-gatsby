import * as React from "react";
import { BaseSVGProps } from "../../types/svgs";

export const ClockIcon: React.FC<BaseSVGProps> = ({
  width,
  height,
  className,
}) => {
  return (
    <svg
      viewBox="0 0 189 189"
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
      <path id="clock-icon-container" fill="none" d="M0 0h188.28v188.713H0z" />
      <circle
        style={{ stroke: "var(--clock-stroke, var(--accent-blue))" }}
        id="clock-face"
        cx="94.051"
        cy="94.517"
        r="84.162"
        fill="none"
        strokeWidth="16.67"
      />
      <path
        style={{ stroke: "var(--clock-stroke, var(--accent-blue))" }}
        id="minute-hand"
        d="M94.051 34.707v59.81"
        fill="none"
        strokeWidth="16.67"
      />
      <path
        style={{ stroke: "var(--clock-stroke, var(--accent-blue))" }}
        id="hour-hand"
        d="M133.788 117.459L94.051 94.517"
        fill="none"
        strokeWidth="16.67"
      />
    </svg>
  );
};
