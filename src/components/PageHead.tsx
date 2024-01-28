import Head from "next/head";

const PageHead = () => (
  <Head>
    <title key="title">Claro Sports</title>
    <link href="/static/css/styles.css" rel="stylesheet" />
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no"
      key="viewport"
    />
    <link
      rel="shortcut icon"
      type="image/x-icon"
      href="/static/favicon.ico"
    ></link>
  </Head>
);

export default PageHead;
