import React from "react";
import { Layout } from "../components/Layout/Layout";
import Seo from "../components/general/Seo";
import About from "../components/general/About";

export default function AboutPage() {
  return (
    <Layout>
      <Seo
        title="About"
        description="Learn about iCare Health Massage and Hypnosis: holistic, compassionate care in Perth through remedial massage, clinical hypnosis and strategic psychotherapy."
      />
      <About />
    </Layout>
  );
}
