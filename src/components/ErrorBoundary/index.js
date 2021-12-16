import React from "react";
import { Result, Button } from "antd";
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
          extra={
            <div
              style={{
                fontSize: "16px",
              }}
            >
              We apologize for the inconvenicence. Please reload the page and
              try again.
              <div>
                If you continue to encounter this error contact our{" "}
                <a href="mailto:support@pickrr.com" target="blank">
                  pickrr support.
                </a>
              </div>
            </div>
          }
        />
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
