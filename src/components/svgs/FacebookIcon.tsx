import * as React from "react";
import { GradientSVGProps } from "../../types/svgs";

export const FacebookIcon: React.FC<GradientSVGProps> = ({
  width,
  height,
  className,
  gradientId,
}) => {
  return (
    <svg
      viewBox="0 0 115 115"
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
        id="facebook-login-container"
        fill="none"
        d="M0 0h114.557v114.615H0z"
      />
      <circle
        id="facebook-logo"
        cx="57.286"
        cy="57.435"
        r="55.958"
        fill={`url(#${gradientId})`}
      />
      <clipPath id="facebook_icon_clip2">
        <circle cx="57.286" cy="57.435" r="55.958" />
      </clipPath>
      <g clipPath="url(#facebook_icon_clip2)">
        <path
          style={{ fill: "var(--facebook-fill, var(--base-white))" }}
          id="facebook-f"
          d="M48.016 54.616v-.002H35.163v17.348h5.393v.009h8.034l.015 47.979h19.416l.058-47.979h13.552l2.892-17.355H68.325v-8.678c0-1.553 0-2.313 1.157-3.471 1.158-1.157 2.892-1.157 2.892-1.157h12.149V27.426s-20.826-4.049-26.611-1.157c-6.316 3.158-9.256 8.677-9.256 14.463v13.884h-.64z"
          fillRule="nonzero"
        />
      </g>
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="scale(114.8999) rotate(-76.916 .794 .276)"
        >
          <stop offset="0" stopColor="#2565d9" />
          <stop offset="1" stopColor="#4fabf8" />
        </linearGradient>
      </defs>
    </svg>
  );
};
