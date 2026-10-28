import React from "react";
import { Layout } from "../components/Layout/Layout";
import Hero from "../components/general/Hero";
import Services from "../components/general/Services";
import CancelPolicy from "../components/general/CancelPolicy";
import Seo from "../components/general/Seo";

export default function HomePage() {
  return (
    <Layout>
      <Seo
        title="Remedial, Fertility & Pregnancy Massage Perth"
        description="Women-only massage studio in Perth. Remedial, fertility, pregnancy and Restore Scar Therapy with Jenny Yeh, 13+ years experience. Health fund rebates available."
      />
      <Hero />
      <Services />
      <CancelPolicy />
    </Layout>
  );
}
