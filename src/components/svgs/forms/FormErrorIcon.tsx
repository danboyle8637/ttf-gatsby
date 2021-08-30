import * as React from "react";
import { useEffect, useRef } from "react";

import { BaseSVGProps } from "../../../types/svgs";
import { setErrorAni, crossErrorAni } from "../../../animations/forms";

interface FormErrorProps extends BaseSVGProps {
  isError: boolean;
}

export const FormErrorIcon: React.FC<FormErrorProps> = ({
  width,
  height,
  className,
  isError,
}) => {
  const rightCrossRef = useRef<SVGPathElement | null>(null);
  const leftCrossRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const rightCross = rightCrossRef.current;
    const leftCross = leftCrossRef.current;

    if (rightCross && leftCross) {
      setErrorAni(leftCross, rightCross);
    }

    return () => {
      if (leftCross && rightCross) {
        crossErrorAni(leftCross, rightCross, true);
      }
    };
  }, []);

  useEffect(() => {
    const rightCross = rightCrossRef.current;
    const leftCross = leftCrossRef.current;

    if (rightCross && leftCross && isError) {
      crossErrorAni(leftCross, rightCross, false);
    }
  }, [isError]);

  return (
    <svg
      id="form-error-icon"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 129.51 129.51"
    >
      <path
        ref={rightCrossRef}
        style={{ stroke: "var(--error-stroke, hsl(0, 100%, 60%))" }}
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="34"
        d="M17 112.51L112.51 17"
        id="right-cross"
      />
      <path
        ref={leftCrossRef}
        style={{ stroke: "var(--error-stroke, hsl(0, 100%, 60%))" }}
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="34"
        d="M112.51 112.51L17 17"
        id="left-cross"
      />
    </svg>
  );
};
