import { gsap, Power3, Linear, Back } from "gsap";

export const circleToggleSwitchOnAni = (toggle: HTMLSpanElement) => {
  gsap.to(toggle, { duration: 0.3, x: 45, ease: Power3.easeIn });
};

export const circleToggleSwitchOffAni = (toggle: HTMLSpanElement) => {
  gsap.to(toggle, { duration: 0.3, x: 0, ease: Power3.easeIn });
};

export const largeToggleSwithWithWordsOnAni = (
  knob: HTMLSpanElement,
  xDistance: number
) => {
  gsap.to(knob, { duration: 0.3, x: xDistance, ease: Power3.easeOut });
};

export const largeToggleSwithWithWordsOffAni = (knob: HTMLSpanElement) => {
  gsap.to(knob, { duration: 0.3, x: 0, ease: Power3.easeOut });
};

// Form active animation
export const formActiveIconAni = (
  iconArray: SVGCircleElement[],
  kill: boolean
) => {
  const tl = gsap.timeline({ repeat: -1 });

  if (kill) {
    tl.kill();
  }

  tl.to(iconArray, {
    duration: 0.5,
    autoAlpha: 0,
    ease: Linear.easeNone,
    stagger: 0.3,
  }).to(iconArray, {
    duration: 0.5,
    autoAlpha: 1,
    ease: Linear.easeNone,
    stagger: 0.3,
  });
};

// Error in a form input... animates the X
export const setErrorAni = (left: SVGPathElement, right: SVGPathElement) => {
  gsap.set(left, { drawSVG: "0% 0%" });
  gsap.set(right, { drawSVG: "0% 0%" });
};

export const crossErrorAni = (
  left: SVGPathElement,
  right: SVGPathElement,
  kill: boolean
) => {
  const tl = gsap.timeline();

  if (kill) {
    tl.kill();
  }

  tl.to(right, {
    duration: 0.4,
    drawSVG: "100% 0%",
    ease: Power3.easeIn,
    reversed: false,
  }).to(
    left,
    {
      duration: 0.4,
      drawSVG: "100% 0%",
      ease: Power3.easeIn,
      reversed: false,
    },
    "-=0.2"
  );
};

// Circle checkmark
export const circleCheckAni = (path: SVGPathElement) => {
  gsap.fromTo(
    path,
    {
      drawSVG: "100% 100%",
    },
    {
      duration: 0.6,
      drawSVG: "0% 100%",
      ease: Linear.easeNone,
      delay: 0.4,
    }
  );
};

// Normal checkmark icon
export const setCheckmarkAni = (check: SVGPathElement) => {
  gsap.set(check, { drawSVG: "100% 0%", autoAlpha: 0 });
};

export const checkmarkAni = (check: SVGPathElement, kill: boolean) => {
  const tl = gsap.timeline();

  if (kill) {
    tl.kill();
  }

  tl.fromTo(
    check,
    { drawSVG: "100% 0%", autoAlpha: 1 },
    {
      duration: 0.6,
      drawSVG: "100% 100%",
      ease: Power3.easeIn,
      autoAlpha: 1,
      reversed: true,
    }
  );
};

export const unCheckmarkAni = (check: SVGPathElement, kill: boolean) => {
  const tl = gsap.timeline();

  if (kill) {
    tl.kill();
  }

  tl.fromTo(
    check,
    {
      drawSVG: "100% 100%",
    },
    {
      duration: 0.6,
      drawSVG: "0% 100%",
      ease: Power3.easeOut,
      reversed: true,
    }
  );
};

export const moveLabelAboveInputAni = (
  label: HTMLLabelElement,
  reverse: boolean
) => {
  const tl = gsap.timeline();

  tl.fromTo(
    label,
    {
      x: 20,
      y: "100%",
      fontSize: "2rem",
      fontWeight: 700,
    },
    {
      duration: 0.2,
      x: "20%",
      y: "-140%",
      fontSize: "1.4rem",
      fontWeight: 500,
      ease: Power3.easeOut,
      reversed: reverse,
    }
  );
};

export const moveLabelAboveTextareaAni = (
  label: HTMLLabelElement,
  reverse: boolean
) => {
  const tl = gsap.timeline();

  tl.fromTo(
    label,
    {
      x: 20,
      y: "100%",
      fontSize: "2rem",
      fontWeight: 700,
    },
    {
      duration: 0.2,
      x: "20%",
      y: "-140%",
      fontSize: "1.4rem",
      fontWeight: 500,
      ease: Power3.easeOut,
      reversed: reverse,
    }
  );
};

// Basic Radio Input

export const basicRadioIsChecked = (dot: HTMLDivElement) => {
  gsap.to(dot, { duration: 0.2, scale: 1, autoAlpha: 1, ease: Back.easeIn });
};

export const basicRadioIsNotChecked = (dot: HTMLDivElement) => {
  gsap.to(dot, { duration: 0.2, scale: 0, autoAlpha: 0, ease: Power3.easeIn });
};
