import React from "react";
import { Layout } from "../components/Layout/Layout";
import Seo from "../components/general/Seo";
import Infant from "../components/general/Infant";

export default function InfantPage() {
  return (
    <Layout>
      <Seo
        title="Infant Massage Classes Perth"
        description="Learn baby massage with a certified Paediatric Massage Consultant in Perth. Introductory workshops and a 4-session infant massage course for parents."
      />
      <Infant />
      {/* <About /> */}
      {/* <CancelPolicy /> */}
    </Layout>
  );
}
