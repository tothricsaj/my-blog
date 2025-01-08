import * as React from "react";

import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome my blog!">
      <p>This is my pure Gatsby blog....yheee!!!</p>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
