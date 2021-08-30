import * as React from "react";
import { useEffect, useRef } from "react";

import { BaseSVGProps } from "../../../types/svgs";
import {
  setCheckmarkAni,
  checkmarkAni,
  unCheckmarkAni,
} from "../../../animations/forms";

interface CheckmarkIconProps extends BaseSVGProps {
  runAction: boolean;
}

export const CheckmarkIcon: React.FC<CheckmarkIconProps> = ({
  width,
  height,
  className,
  runAction,
}) => {
  const checkRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const check = checkRef.current;

    if (check) {
      setCheckmarkAni(check);
    }

    return () => {
      if (check) {
        checkmarkAni(check, true);
        unCheckmarkAni(check, true);
      }
    };
  }, []);

  useEffect(() => {
    const check = checkRef.current;

    if (check && runAction) {
      checkmarkAni(check, false);
    }

    if (check && !runAction) {
      unCheckmarkAni(check, false);
    }
  }, [runAction]);

  return (
    <svg
      id="form-check"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 164.85 127.53"
    >
      <path
        style={{
          stroke: "var(--check-stroke-color, hsl(136, 68%, 61%))",
        }}
        ref={checkRef}
        id="check"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="34"
        d="M147.85 17l-93.52 93.53L17 73.2"
      />
    </svg>
  );
};
