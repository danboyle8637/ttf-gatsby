import * as React from "react";
import { useEffect, useRef } from "react";

import { BaseSVGProps } from "../../../types/svgs";
import { formActiveIconAni } from "../../../animations/forms";

export const FormActiveIcon: React.FC<BaseSVGProps> = ({
  width,
  height,
  className,
}) => {
  const dot1Ref = useRef<SVGCircleElement | null>(null);
  const dot2Ref = useRef<SVGCircleElement | null>(null);
  const dot3Ref = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    const dot1 = dot1Ref.current;
    const dot2 = dot2Ref.current;
    const dot3 = dot3Ref.current;

    if (dot1 && dot2 && dot3) {
      formActiveIconAni([dot1, dot2, dot3], false);
    }

    return () => {
      if (dot1 && dot2 && dot3) {
        formActiveIconAni([dot1, dot2, dot3], true);
      }
    };
  }, []);

  return (
    <svg
      id="text-field-active-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 135 40.38"
    >
      <circle
        style={{ fill: "var(--form-active-fill, hsl(260, 100%, 79%))" }}
        ref={dot1Ref}
        id="left-dot"
        cx="20.19"
        cy="20.19"
        r="20.19"
      />
      <circle
        style={{ fill: "var(--form-active-fill, hsl(260, 100%, 79%))" }}
        ref={dot2Ref}
        id="middle-dot"
        cx="67.5"
        cy="20.19"
        r="20.19"
      />
      <circle
        style={{ fill: "var(--form-active-fill, hsl(260, 100%, 79%))" }}
        ref={dot3Ref}
        id="right-dot"
        cx="114.81"
        cy="20.19"
        r="20.19"
      />
    </svg>
  );
};
