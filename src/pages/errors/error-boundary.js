import * as React from "react";
import Error500 from "./error-500";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // log error to service(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Error500 />;
    }
    return this.props.children;
  }
}
