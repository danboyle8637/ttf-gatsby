import * as React from "react";
import { BaseSVGProps } from "../../types/svgs";

export const MapPinIcon: React.FC<BaseSVGProps> = ({
  width,
  height,
  className,
}) => {
  return (
    <svg
      viewBox="0 0 114 184"
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
        id="map-pin-icon-container"
        fill="none"
        d="M0 0h113.11v183.841H0z"
      />
      <path
        style={{ fill: "var(--map-pin-fill, var(--accent-blue))" }}
        id="map-pin-icon"
        d="M6.196 76.82a53.723 53.723 0 01-3.834-19.99c0-29.752 24.155-53.907 53.908-53.907 29.752 0 53.907 24.155 53.907 53.907 0 7.06-1.36 13.805-3.834 19.99l-37.994 95.828a12.994 12.994 0 01-12.079 8.205h-.002a12.991 12.991 0 01-12.077-8.204L6.196 76.82zM56.27 34.034c12.581 0 22.796 10.214 22.796 22.796 0 12.581-10.215 22.796-22.796 22.796-12.582 0-22.796-10.215-22.796-22.796 0-12.582 10.214-22.796 22.796-22.796z"
      />
    </svg>
  );
};
