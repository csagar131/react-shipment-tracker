import { Outlet, LiveReload, Links, Meta } from "remix";
import { Scripts, useLoaderData } from "@remix-run/react";
import { useContext } from "react";
import globalStylesUrl from "~/styles/global.css";
import antdStyles from "antd/dist/antd.css";
import PickrrHeader from "./page-components/pickrr-header";
import StylesContext from "./styles-context";
import { getSellerBrandDetails } from "./utils/server.query";
import DataContext from "./context/data-context";
import { Result} from 'antd';

export const links = () => [
  { rel: "stylesheet", href: antdStyles },
  { rel: "stylesheet", href: globalStylesUrl },
];

export const loader = async () => {
  const data = await getSellerBrandDetails();
  return data;
};

export const meta = () => {
  const description = "Pickrr Tracking page";
  const keywords = "remix, react, javascript";

  return {
    description,
    keywords,
  };
};

export default function App() {
  const data = useLoaderData();
  return (
    <Document>
      <DataContext.Provider value={{ sellerData: data.res }}>
        <Layout>
          <Outlet />
        </Layout>
      </DataContext.Provider>
    </Document>
  );
}

function Document({ children, title }) {
  const styles = useContext(StylesContext);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="https://res.cloudinary.com/pickrr/image/upload/v1617194369/logo/Blue_tat2ry.svg" type="image/png" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>Tracking Page</title>
        <Meta />
        {typeof document === "undefined" ? "__STYLES__" : null}
        {styles}
        <Links />
      </head>
      <body>
        <div className="container"> {children}</div>
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }) {
  // const { user } = useLoaderData();\
  return (
    <>
      <PickrrHeader />
      <div className="container"> {children}</div>
    </>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <Layout>
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
      </Layout>
    </Document>
  );
}
