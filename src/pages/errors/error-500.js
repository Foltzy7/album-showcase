import React from "react";
import { useHistory } from "react-router-dom";
import "./error-500.scss";

function Error500() {
  const history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <section data-testid="error-500" className="svg-page svg-error-page">
      <div className="text-center">
        <h1>Oh no!</h1>
        <p>
          It looks like something went wrong. We will get that fixed as soon as
          possible.
        </p>
        <p>
          <a href="/#" data-testid="return-to-previous" onClick={handleClick}>
            <i className="fa fa-angle-left" />
            To previous page{" "}
          </a>
        </p>
      </div>
    </section>
  );
}

export default Error500;
