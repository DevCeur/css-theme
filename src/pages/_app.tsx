import "../styles/global.css";

import Head from "next/head";

import { AppProps } from "next/app";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Simple Next.js CSS Theme</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
