import React from "react";
import "../events/event-card.scss";

export default function EventCardContent(props: any) {
    return<div className="callout-flex-content primary">{props.children}</div>
}
