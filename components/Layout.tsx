import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Nav from "./Nav";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="flex-auto">{children}</main>
    </>
  );
};

export default Layout;
