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
        duration: 0.15,
        x: -60,
        autoAlpha: 0,
        ease: Linear.easeNone,
      },
      "-=0.2"
    )
    .to(
      bottomBar,
      {
        duration: 0.15,
        x: -60,
        autoAlpha: 0,
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
    duration: 0.15,
    x: 0,
    autoAlpha: 1,
    ease: Linear.easeNone,
  })
    .to(
      topBar,
      {
        duration: 0.15,
        x: 0,
        autoAlpha: 1,
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
