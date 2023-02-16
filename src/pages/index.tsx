import React from "react";
import { Layout } from "../components/Layout/Layout";
import Hero from "../components/general/Hero";
import About from "../components/general/About";
import CancelPolicy from "../components/general/CancelPolicy";
import Seo from "../components/general/Seo";

export default function HomePage() {
  return (
    <Layout>
      <Seo title={"Home"} />
      <Hero />
      <About />
      <CancelPolicy />
    </Layout>
  );
}
