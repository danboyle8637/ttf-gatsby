import * as React from "react";

import { BaseSVGProps } from "../../types/svgs";

export const PhoneCallIcon: React.FC<BaseSVGProps> = ({
  width,
  height,
  className,
}) => {
  return (
    <svg
      viewBox="0 0 137 137"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
    >
      <path id="phone-icon-container" fill="none" d="M0 0h136.489v136.531H0z" />
      <path
        style={{ fill: "var(--phone-fill, var(--accent-blue))" }}
        id="phone"
        d="M15.735 5.207L5.532 15.41C-4.804 25.747 4.14 55.381 42.662 93.903c38.522 38.522 68.156 47.466 78.493 37.129l10.203-10.203a11.999 11.999 0 000-16.97l-16.209-16.208a11.996 11.996 0 00-16.97 0l-12.678 12.678c-7.196-6.735-15.52-14.76-25.013-24.253-9.407-9.407-17.442-17.763-24.226-25.038l12.652-12.652a12 12 0 000-16.971L32.706 5.207a12.003 12.003 0 00-16.971 0z"
      />
    </svg>
  );
};
