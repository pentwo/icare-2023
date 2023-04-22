import React from "react";
import { Layout } from "../components/Layout/Layout";
import SEO from "../components/general/Seo";
import Booking from "../components/general/Booking";

export default function BookingPage() {
  return (
    <Layout>
      <SEO title={"Booking"} />
      <Booking />
    </Layout>
  );
}
