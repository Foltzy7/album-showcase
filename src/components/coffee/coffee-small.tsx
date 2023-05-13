import React from "react";
import "./coffee-small.scss";

function CoffeeSmall() {
  return (
    <div className="coffee-container-small">
      <div className="cup-small">
        <div className="top-coffee-small">
          <div className="vapor-small">
            <span className="one"/>
            <span className="three"/>
            <span className="sixteen"/>
            <span className="five"/>
            <span className="thirteen"/>
            <span className="twenty"/>
          </div>
          <div className="coffee-circle-small">
            <div className="coffee-small"/>
          </div>
        </div>
        <div className="handle-small"/>
      </div>
    </div>
  );
}

export default CoffeeSmall;
