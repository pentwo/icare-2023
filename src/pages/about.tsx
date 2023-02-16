import React from "react";
import { Layout } from "../components/Layout/Layout";
import Seo from "../components/general/Seo";
import About from "../components/general/About";

export default function AboutPage() {
  return (
    <Layout>
      <Seo title={"About"} />
      {/* <Hero /> */}
      <About />
      {/* <CancelPolicy /> */}
    </Layout>
  );
}
