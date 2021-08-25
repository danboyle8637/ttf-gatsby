import * as React from "react";
import { OverlayProps } from "../../../types/svgs";

export const TriangleOverlay: React.FC<OverlayProps> = ({
  location,
  height,
  className,
}) => {
  const top = `
    M0 0
    h100
    L0 ${height - 1}
    0 0z
  `;

  const bottom = `
    M0 ${height}
    h100
    L100 0
    0 ${height}z
  `;

  return (
    <svg
      style={{ alignSelf: `${location === "top" ? "start" : "end"}` }}
      viewBox={`0 0 100 ${height}`}
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
      <path
        style={{ fill: "var(--divider-fill, var(--dark-blue))" }}
        id="triangle-divider"
        d={location === "top" ? top : bottom}
      />
    </svg>
  );
};
