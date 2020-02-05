import Head from "next/head";
import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";

export default ({ children, title, description }) => (
  <Fragment>
    <Head>
      <title>{title ? title : process.env.TITLE}</title>
      <meta
        name="description"
        content={description ? description : process.env.DESCRIPTION}
      />
    </Head>
    <Header />
    <main className="flex-grow container bg-white mx-auto py-4">
      {children}
    </main>
    <Footer />
  </Fragment>
);
