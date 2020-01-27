import Head from "next/head";

export default ({ children, title, description }) => (
  <div>
    <Head>
      <title>{title ? title : process.env.TITLE}</title>
      <meta
        name="description"
        content={description ? description : process.env.DESCRIPTION}
      />
    </Head>
    {children}
  </div>
);
