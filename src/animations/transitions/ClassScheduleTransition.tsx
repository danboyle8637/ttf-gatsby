import * as React from "react";
import { Transition } from "react-transition-group";
import { gsap } from "gsap";

interface ClassSectionTransitionProps {
  isOpen: boolean;
  toggleShowClasses: () => void;
}

export const ClassScheduleTransition: React.FC<ClassSectionTransitionProps> = ({
  isOpen,
  toggleShowClasses,
  children,
}) => {
  const containerEnter = (node: HTMLElement): void => {
    if (isOpen) {
      gsap.fromTo(
        node,
        {
          autoAlpha: 0,
        },
        {
          duration: 0.6,
          autoAlpha: 1,
          onComplete: toggleShowClasses,
        }
      );
    }
  };

  const containerExit = (node: HTMLElement): void => {
    if (!isOpen) {
      gsap.to(node, {
        duration: 0.3,
        y: -50,
        scale: 0.8,
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
      onEntering={(node: HTMLElement) => containerEnter(node)}
      onExiting={(node: HTMLElement) => containerExit(node)}
    >
      {children}
    </Transition>
  );
};
