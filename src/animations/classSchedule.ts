import { gsap, Power3 } from "gsap";

export const classTimesSetAni = (classTimesArray: HTMLDivElement[]) => {
  gsap.set(classTimesArray, { autoAlpha: 0 });
};

export const classTimesAni = (classTimesArray: HTMLDivElement[]) => {
  gsap.fromTo(
    classTimesArray,
    {
      y: -40,
      autoAlpha: 0,
      scale: 0.8,
    },
    {
      y: 0,
      autoAlpha: 1,
      scale: 1,
      stagger: {
        each: 0.2,
        ease: Power3.easeInOut,
      },
      delay: 0.2,
    }
  );
};
