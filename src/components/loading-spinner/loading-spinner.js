import React from "react";

function LoadingSpinner() {
  return (
    <div className="loading-wrapper">
      <p className="text-center loading-spinner" data-testid="loading-spinner">
        <i className="fa fa-spinner fa-spin"></i>
        Loading...
      </p>
    </div>
  );
}

export default LoadingSpinner;
