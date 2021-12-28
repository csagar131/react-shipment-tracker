import React from 'react';
import { Result, Button } from 'antd';
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

  redirect() {
    window.location.href = '/dashboard';
  }

  render() {
    if (this.state.error?.message === 'blocked') {
      return (
        <Result
          status="400"
          title="400"
          subTitle="Sorry, something went wrong."
          extra={
            <div
              style={{
                fontSize: '16px',
              }}
            >
              <div>
                Your branded tracking page has been deactivated. Please get in
                touch with&nbsp;
                <a href="mailto:tech.support@pickrr.com" target="blank">
                  tech.support@pickrr.com&nbsp;
                </a>
                to activate again.
              </div>
            </div>
          }
        />
      );
    } else if (this.state.errorInfo) {
      // Error path
      return (
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
          extra={
            <div
              style={{
                fontSize: '16px',
              }}
            >
              We apologize for the inconvenicence. Please reload the page and
              try again.
              <div>
                If you continue to encounter this error contact our{' '}
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
