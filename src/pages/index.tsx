import * as React from "react";
import { StaticImage } from 'gatsby-plugin-image';

import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome my blog!">
      <p>This is my pure Gatsby blog....yheee!!!</p>
      <StaticImage
        alt="Clifford, the pitbull"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
