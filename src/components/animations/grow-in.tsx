import { Transition } from "react-transition-group";
import React from "react";

type Props = {
  children: JSX.Element;
  inProp: boolean;
  durationOverride?: number;
};

export default function GrowIn(props: Props) {
  const { children, inProp, durationOverride } = props;
  const duration = durationOverride || 500;

  const defaultStyle = {
    transition: `transform ${duration}ms, opacity ${duration}ms ease`,
    opacity: 1,
  };

  const transitionStyles: any = {
    entering: { transform: "scale(0.5)", opacity: 0 },
    entered: { transform: "scale(1.0)", opacity: 1 },
    exiting: { transform: "scale(0.5)", opacity: 0 },
    exited: { opacity: 0.0 },
  };

  return (
    <Transition
      in={inProp}
      timeout={duration}
      classNames={"event-transition"}
      unmountOnExit
      appear
    >
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}
