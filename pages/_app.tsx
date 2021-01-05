import React from "react";
import { AppProps } from "next/app";
import Head from 'next/head';

import { WithAuthProvider } from "../src/libs/auth-provider";

import "../src/styles/tailwind.css";
import "../src/styles/global.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Covid-19 App</title>
        <link rel="icon" href="/virus.png" />
      </Head>
      <WithAuthProvider>
        <Component {...pageProps} />
      </WithAuthProvider>
    </>
  );
}
