import React from "react";
import { Layout } from "../components/Layout/Layout";
import Seo from "../components/general/Seo";
import Infant from "../components/general/Infant";

export default function InfantPage() {
  return (
    <Layout>
      <Seo title={"Infant Massage"} />
      <Infant />
      {/* <About /> */}
      {/* <CancelPolicy /> */}
    </Layout>
  );
}
