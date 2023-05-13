import classnames from "classnames";
import React from "react";
import "./event-card.scss";

export default function EventCard(props: any) {
  const classes = classnames(
    "callout",
    "callout-flex",
    "text-center",
    "active",
    { "fill-height": props.fillHeight }
  );

  return (
    <div className={classes} data-testid="event-card">
      {props.children}
    </div>
  );
}
