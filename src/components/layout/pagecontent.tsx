import React from "react";
import "../page/page.scss";
import "../../pages/home.scss";
import classnames from "classnames";

type Props = {
  children: JSX.Element;
  className?: string;
};
export default function PageContent(props: Props) {
  let className = classnames("page-content", "bg-floralwhite");
  if (props.className) {
    className = classnames("page-content", props.className);
  }

  return <div className={className}>{props.children}</div>;
}
