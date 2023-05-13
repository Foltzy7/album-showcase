import React from "react";
import { Transition } from "react-transition-group";
import "./slide.scss";

type Props = {
  children: JSX.Element;
  inProp: boolean;
  vertical?: boolean;
  durationOverride?: number;
};

export default function Slide(props: Props) {
  const { children, inProp, durationOverride, vertical } = props;
  const duration = durationOverride || 500;
  const direction = vertical ? "Y" : "X";

  const defaultStyle = {
    transition: `transform ${500}ms, opacity ${500}ms ease`,
    opacity: 1,
  };

  const transitionStyles: any = {
    entering: { transform: `translate${direction}(50%)` },
    entered: {
      transform: `translate${direction}(0%)`,
      transition: `transform ${duration}ms ease-in-out`,
    },
    exiting: { transform: `translate${direction}(0%)` },
    exited: {
      transform: `translate${direction}(-100%)`,
      transition: `transform ${duration}ms ease-in-out`,
    },
  };

  return (
    <Transition classNames="slide" timeout={100} in={inProp} appear>
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
