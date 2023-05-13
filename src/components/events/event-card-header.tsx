import React from "react";
import "./event-card.scss";

export default function EventCardHeader(props: any) {
    return (
        <div className="event-card-header">
            <h4 className="mt-0">{props.children}</h4>
        </div>
    )
}
