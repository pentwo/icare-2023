import React from "react";
import { Layout } from "../components/Layout/Layout";
import SEO from "../components/general/Seo";
import Voucher from "../components/general/Voucher";

export default function VoucherPage() {
  return (
    <Layout>
      <SEO title={"Voucher"} />
      <Voucher />
    </Layout>
  );
}
