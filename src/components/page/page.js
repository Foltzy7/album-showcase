import React from "react";
import classnames from "classnames";
import LoadingSpinner from "../loading-spinner/loading-spinner";
import Error500 from "../../pages/errors/error-500";

function Page(props) {
  const { children, loading, name, error } = props;
  const className = classnames("container", "content", props.className);

  if (error) {
    return <Error500 />;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={className} data-testid={`${name}-page`}>
      {children}
    </div>
  );
}

export default Page;
