import React from "react";
import { Layout } from "../components/Layout/Layout";
import Seo from "../components/general/Seo";
import About from "../components/general/About";

export default function AboutPage() {
  return (
    <Layout>
      <Seo 
        title={"About"} 
        description="Learn about iCare Health Massage and Hypnosis mission, vision, and values. We provide holistic, compassionate care through remedial massage, clinical hypnosis, and strategic psychotherapy."
        keywords={[
          "holistic healing",
          "remedial massage",
          "clinical hypnosis",
          "psychotherapy",
          "integrated care",
          "mental health",
          "physical health",
          "compassionate care",
          "evidence-based practice",
          "personalized treatment"
        ]}
      />
      <About />
    </Layout>
  );
}
