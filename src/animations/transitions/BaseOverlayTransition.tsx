import * as React from "react";
import { Transition } from "react-transition-group";
import { gsap } from "gsap";

interface NavTransitionProps {
  isOpen: boolean;
}

export const BaseOverlayTransition: React.FC<NavTransitionProps> = ({
  isOpen,
  children,
}) => {
  const menuEnter = (node: HTMLElement): void => {
    if (isOpen) {
      gsap.to(node, {
        duration: 0,
        autoAlpha: 1,
      });
    }
  };

  const menuExit = (node: HTMLElement): void => {
    if (!isOpen) {
      gsap.to(node, {
        duration: 0.4,
        autoAlpha: 0,
      });
    }
  };

  return (
    <Transition
      in={isOpen}
      timeout={1000}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={(node: HTMLElement) => menuEnter(node)}
      onExit={(node: HTMLElement) => menuExit(node)}
    >
      {children}
    </Transition>
  );
};
