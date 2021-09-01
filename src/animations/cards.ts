import { gsap, Power2, Linear } from "gsap";

export const priceButtonHoverAni = (button: HTMLDivElement) => {
  gsap.to(button, {
    duration: 0.5,
    y: -7,
    scale: 1.06,
    ease: Power2.easeInOut,
  });
};

export const priceButtonNotHoverAni = (button: HTMLDivElement) => {
  gsap.to(button, { duration: 0.5, y: 0, scale: 1, ease: Power2.easeInOut });
};

export const priceCardsEnterStagger = (
  cards: HTMLDivElement[],
  direction: number
) => {
  gsap.fromTo(
    cards,
    {
      x: 120 * direction,
      autoAlpha: 0,
    },
    {
      x: 0,
      autoAlpha: 1,
      stagger: {
        each: 0.2,
        ease: Power2.easeOut,
      },
    }
  );
};

export const priceCardsLeaveStagger = (
  cards: HTMLDivElement[],
  direction: number,
  shouldReverse: boolean
) => {
  gsap.fromTo(
    cards,
    {
      x: 0,
      autoAlpha: 1,
    },
    {
      x: 120 * direction,
      autoAlpha: 0,
      stagger: {
        each: 0.2,
        ease: Power2.easeOut,
        from: shouldReverse ? 2 : 0,
      },
    }
  );
};
