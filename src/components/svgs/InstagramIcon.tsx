import * as React from "react";
import { GradientSVGProps } from "../../types/svgs";

export const InstagramIcon: React.FC<GradientSVGProps> = ({
  width,
  height,
  className,
  gradientId,
}) => {
  return (
    <svg
      viewBox="0 0 200 200"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeMiterlimit="10"
    >
      <path id="instagram-icon-container" fill="none" d="M0 0h200v200H0z" />
      <clipPath id="instagram_icon_clip1">
        <path id="instagram-icon-container1" d="M0 0h200v200H0z" />
      </clipPath>
      <g clipPath="url(#instagram_icon_clip1)">
        <path
          id="base-icon"
          d="M145.523 190.305H54.478c-24.733 0-44.783-20.05-44.783-44.782V54.477c0-24.732 20.05-44.782 44.783-44.782h91.045c24.732 0 44.782 20.05 44.782 44.782v91.046c0 24.732-20.05 44.782-44.782 44.782z"
          fill="none"
          fillRule="nonzero"
        />
        <clipPath id="instagram_icon_clip2">
          <path
            d="M145.523 190.305H54.478c-24.733 0-44.783-20.05-44.783-44.782V54.477c0-24.732 20.05-44.782 44.783-44.782h91.045c24.732 0 44.782 20.05 44.782 44.782v91.046c0 24.732-20.05 44.782-44.782 44.782z"
            clipRule="nonzero"
          />
        </clipPath>
        <g clipPath="url(#instagram_icon_clip2)">
          <path
            d="M174.149 176.129c-27.802 25.01-70.679 22.743-95.689-5.059-25.01-27.802-22.743-70.679 5.059-95.689 27.802-25.01 70.679-22.743 95.689 5.059 25.01 27.802 22.743 70.679-5.059 95.689z"
            fill={`url(#${gradientId}3)`}
          />
          <path
            d="M194.144 54.203c9.995 36.035-11.147 73.406-47.182 83.401-36.036 9.995-73.406-11.147-83.401-47.182-9.995-36.036 11.147-73.407 47.182-83.402 36.036-9.994 73.407 11.147 83.401 47.183z"
            fill={`url(#${gradientId}4)`}
          />
          <path
            d="M144.221 118.775c6.39 36.846-18.336 71.948-55.182 78.338-36.846 6.39-71.948-18.337-78.338-55.183-6.39-36.846 18.336-71.948 55.182-78.338 36.846-6.39 71.948 18.337 78.338 55.183z"
            fill={`url(#${gradientId}5)`}
          />
          <circle
            cx="61.096"
            cy="62.586"
            r="67.757"
            fill={`url(#${gradientId}6)`}
          />
        </g>
        <path
          d="M145.523 190.305H54.478c-24.733 0-44.783-20.05-44.783-44.782V54.477c0-24.732 20.05-44.782 44.783-44.782h91.045c24.732 0 44.782 20.05 44.782 44.782v91.046c0 24.732-20.05 44.782-44.782 44.782z"
          fill="none"
          stroke="#fff"
          strokeWidth="12.5"
        />
        <path
          id="lens"
          d="M142.023 100.447c0-22.947-18.629-41.576-41.576-41.576-22.946 0-41.576 18.629-41.576 41.576 0 22.946 18.63 41.576 41.576 41.576 22.947 0 41.576-18.63 41.576-41.576z"
          fill="none"
          stroke="#fff"
          strokeWidth="11.44"
        />
        <path
          id="flash"
          d="M163.929 47.918c0 6.79-5.504 12.294-12.294 12.294-6.789 0-12.295-5.504-12.295-12.294 0-6.79 5.506-12.293 12.295-12.293 6.79 0 12.294 5.503 12.294 12.293"
          fill="#fff"
          fillRule="nonzero"
        />
      </g>
      <defs>
        <linearGradient
          id={`${gradientId}3`}
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-165.832 105.399 63.715) scale(134.6407)"
        >
          <stop offset="0" stopColor="#cd00a5" />
          <stop offset="1" stopColor="#ffd700" />
        </linearGradient>
        <linearGradient
          id={`${gradientId}4`}
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="scale(-134.6403) rotate(-49.36 -.887 1.353)"
        >
          <stop offset="0" stopColor="#cd00a5" />
          <stop offset="1" stopColor="#ffd700" />
        </linearGradient>
        <linearGradient
          id={`${gradientId}5`}
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(136.304 48.208 71.825) scale(134.6403)"
        >
          <stop offset="0" stopColor="#cd00a5" />
          <stop offset="1" stopColor="#ffd700" />
        </linearGradient>
        <linearGradient
          id={`${gradientId}6`}
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(49.809 -1.034 25.11) scale(135.4549)"
        >
          <stop offset="0" stopColor="#1c5cc9" />
          <stop offset="1" stopColor="#cd00a5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
