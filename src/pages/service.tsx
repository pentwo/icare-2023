import React from "react";
import { YEARS_EXPERIENCE } from "../Data/business";
import { Layout } from "../components/Layout/Layout";
import Service from "../components/general/Service";
import SEO from "../components/general/Seo";

export default function ServicePage() {
  return (
    <Layout>
      <SEO
        title="Massage Services Perth"
        description={`Remedial, fertility, pregnancy, mind-body restorative massage, Restore Scar Therapy and clinical hypnosis in Perth. ${YEARS_EXPERIENCE} years of professional experience.`}
      />
      <Service />
    </Layout>
  );
}
