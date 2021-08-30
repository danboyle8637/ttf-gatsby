import * as React from "react";

import { BaseSVGProps } from "../../types/svgs";

export const EmailIcon: React.FC<BaseSVGProps> = ({
  width,
  height,
  className,
}) => {
  return (
    <svg
      id="email-logo"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 251.22"
    >
      <title>Email Logo</title>
      <rect
        style={{ fill: "var(--email-fill, var(--accent-blue))" }}
        width="400"
        height="251.22"
        rx="16.98"
      />
      <path
        style={{ stroke: "var(--email-stroke, var(--medium-blue))" }}
        d="M383.47 29.52L206.14 173.08a9.78 9.78 0 01-12.28 0L16.53 29.52M16.53 221.69l118.69-96.08M264.78 125.61l118.69 96.09"
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="25.09"
      />
    </svg>
  );
};
