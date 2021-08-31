import { gsap, Power2 } from "gsap";

export const priceButtonHoverAni = (button: HTMLButtonElement) => {
  gsap.to(button, {
    duration: 0.5,
    y: -7,
    scale: 1.06,
    ease: Power2.easeInOut,
  });
};

export const priceButtonNotHoverAni = (button: HTMLButtonElement) => {
  gsap.to(button, { duration: 0.5, y: 0, scale: 1, ease: Power2.easeInOut });
};
