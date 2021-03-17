import React from "react";

import { Layout } from "../src/components/layouts/layout";
import { HomeComponent } from "../src/components/homes/home";

const Home = (): JSX.Element => {
  return (
    <Layout>
      <HomeComponent />
    </Layout>
  );
};

export default Home;

export async function getInitialProps() {
  return {};
}
