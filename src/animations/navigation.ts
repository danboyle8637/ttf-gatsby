import { gsap, Linear } from "gsap";

export const toggleHamburgerMenuOpen = (
  topBar: HTMLDivElement,
  middleBar: HTMLDivElement,
  bottomBar: HTMLDivElement
) => {
  const tl = gsap.timeline();

  tl.to(middleBar, {
    duration: 0.15,
    x: -60,
    autoAlpha: 0,
    ease: Linear.easeNone,
  })
    .to(
      topBar,
      {
        duration: 0.2,
        transformOrigin: "50% 50%",
        y: 16.5,
        rotation: 45,
        ease: Linear.easeNone,
      },
      "-=0.2"
    )
    .to(
      bottomBar,
      {
        duration: 0.2,
        transformOrigin: "50% 50%",
        width: "100%",
        y: -16.5,
        rotation: 135,
        ease: Linear.easeNone,
      },
      "-=0.25"
    );
};

export const toggleHamburgerMenuClosed = (
  topBar: HTMLDivElement,
  middleBar: HTMLDivElement,
  bottomBar: HTMLDivElement
) => {
  const tl = gsap.timeline();

  tl.to(bottomBar, {
    duration: 0.2,
    transformOrigin: "50% 50%",
    y: 0,
    width: "80%",
    rotation: 0,
    ease: Linear.easeNone,
  })
    .to(
      topBar,
      {
        duration: 0.2,
        transformOrigin: "50% 50%",
        y: 0,
        rotation: 0,
        ease: Linear.easeNone,
      },
      "-=0.25"
    )
    .to(middleBar, {
      duration: 0.15,
      x: 0,
      autoAlpha: 1,
      ease: Linear.easeNone,
    });
};
