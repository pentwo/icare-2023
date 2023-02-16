import React from "react";
import { Layout } from "../components/Layout/Layout";
import Service from "../components/general/Service";
import SEO from "../components/general/Seo";

export default function ServicePage() {
  return (
    <Layout>
      <SEO title={"Service"} />
      <Service />
    </Layout>
  );
}
