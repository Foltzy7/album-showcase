import React from "react";
import "./card-grid.scss";

export default function CardGrid(props: any) {


    return (
        <div className={"card-grid"}>
            {props.children}
        </div>
    )
}
