import type { NextPage } from "next";
import type { AppProps } from "next/app";
import React from "react";

const Page: NextPage<AppProps> = (props) => {
  return (
    <>
      <props.Component {...props.pageProps} />
    </>
  );
};

export default Page;
