import React from "react";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

const _App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(_App);
