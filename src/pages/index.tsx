import React from "react";
import { Layout } from "../components/Layout/Layout";
import Hero from "../components/general/Hero";
import Services from "../components/general/Services";
import CancelPolicy from "../components/general/CancelPolicy";
import Seo from "../components/general/Seo";

export default function HomePage() {
  return (
    <Layout>
      <Seo title={"Home"} />
      <Hero />
      <Services />
      <CancelPolicy />
    </Layout>
  );
}
