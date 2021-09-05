import React from "react";
import { GradientSVGProps } from "../../types/svgs";

export const TTFLogo: React.FC<GradientSVGProps> = ({
  width,
  height,
  className,
  gradientId,
}) => {
  return (
    <svg
      viewBox="0 0 380 145"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
    >
      <path id="ttf-logo-container" fill="none" d="M0 0h379.462v144.184H0z" />
      <path
        style={{ fill: "var(--logo-t-fill, #f552f2)" }}
        id="t-letter"
        d="M43.634 39.39H3.036V2.881h128.243V39.39H90.457v102.282H43.634V39.39z"
      />
      <path
        id="tf-letters"
        d="M177.983 39.39h-40.69V2.881h239.611V39.39h-66.09v22.582h57.966v35.262h-57.966v44.438h-46.823V39.39h-39.185v102.282h-46.823V39.39z"
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="scale(208.2026) rotate(28.409 .302 1.31)"
        >
          <stop
            style={{ stopColor: "var(--logo-stop-color-1, #29c9f5)" }}
            offset="0"
          />
          <stop
            style={{ stopColor: "var(--logo-stop-color-2, #4394f8)" }}
            offset=".48"
          />
          <stop
            style={{ stopColor: "var(--logo-stop-color-2, #8c00ff)" }}
            offset="1"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
