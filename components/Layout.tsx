import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Layout;
