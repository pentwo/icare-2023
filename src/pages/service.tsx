import React from "react";
import { Layout } from "../components/Layout/Layout";
import Service from "../components/general/Service";
import SEO from "../components/general/Seo";

export default function ServicePage() {
  return (
    <Layout>
      <SEO 
        title={"Services"} 
        description="Discover our specialized massage therapy services including remedial massage, fertility massage, and pregnancy massage. 13+ years of professional experience in holistic health care."
        keywords={[
          "massage services",
          "remedial massage",
          "fertility massage",
          "pregnancy massage",
          "therapeutic massage",
          "holistic health",
          "pain management",
          "reproductive wellness",
          "prenatal care",
          "Jenny YEH",
          "Perth massage",
          "qualified therapist"
        ]}
      />
      <Service />
    </Layout>
  );
}
