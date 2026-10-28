import React from "react";
import { Layout } from "../components/Layout/Layout";
import SEO from "../components/general/Seo";
import Voucher from "../components/general/Voucher";

export default function VoucherPage() {
  return (
    <Layout>
      <SEO
        title="Massage Gift Vouchers"
        description="Buy an iCare Health Massage gift voucher online. A thoughtful gift of remedial, pregnancy or fertility massage in Perth."
      />
      <Voucher />
    </Layout>
  );
}
