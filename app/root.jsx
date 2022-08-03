import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import styles from "~/styles/global.css";
import antdStyles from "antd/dist/antd.css";
import { Result} from 'antd';

export const links = () => [
  { rel: "stylesheet", href: antdStyles },
  { rel: "stylesheet", href: styles}
];


export const meta = () => {
  const description = "Pickrr Tracking page";
  const keywords = "remix, react, javascript";

  return {
    description,
    keywords,
  };
};

export default function App() {
  
  return (
    <html lang="en">
      <head>
        {/* <Meta /> */}
        <meta content="width=device-width, initial-scale=1" name="viewport"></meta>
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  return (
      <>
        <h1>Error</h1>
        <p>{error.message}</p>
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
      </>
  );
}
