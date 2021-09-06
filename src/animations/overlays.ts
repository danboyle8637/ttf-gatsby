import { gsap, Power2, Power3, Back } from "gsap";

export const overlayCloseButtonAni = (
  leftCross: HTMLDivElement,
  rightCross: HTMLDivElement
) => {
  const tl = gsap.timeline();

  tl.to(leftCross, {
    duration: 0.3,
    rotate: -45,
    autoAlpha: 1,
    ease: Power3.easeInOut,
    delay: 0.8,
  }).to(
    rightCross,
    {
      duration: 0.3,
      rotate: 45,
      autoAlpha: 1,
      ease: Power3.easeInOut,
    },
    "-=0.2"
  );
};

export const toastOverlayEnterAni = (toast: HTMLDivElement) => {
  gsap.to(toast, {
    duration: 0.7,
    y: 0,
    scale: 1,
    autoAlpha: 1,
    ease: Back.easeInOut,
  });
};

export const toastOverlayExitAni = (toast: HTMLDivElement) => {
  gsap.to(toast, {
    duration: 0.7,
    y: "100%",
    scale: 0.8,
    autoAlpha: 0,
    ease: Power3.easeInOut,
  });
};

// Functional Drawer Enter and Exit Animation
export const drawerOpenFromRightAni = (drawer: HTMLElement) => {
  const tl = gsap.timeline();

  tl.to(drawer, {
    duration: 0.4,
    x: 0,
    ease: Power2.easeInOut,
  });
};

export const drawerClosedToRightAni = (drawer: HTMLElement) => {
  const tl = gsap.timeline();

  tl.to(drawer, {
    duration: 0.4,
    x: "108%",
    ease: Power2.easeInOut,
  });
};
