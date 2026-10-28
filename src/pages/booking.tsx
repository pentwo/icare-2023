import React from "react";
import { Layout } from "../components/Layout/Layout";
import SEO from "../components/general/Seo";
import Booking from "../components/general/Booking";

export default function BookingPage() {
  return (
    <Layout>
      <SEO
        title="Book a Massage Online"
        description="Book your remedial, fertility, pregnancy or scar therapy massage online at iCare Health Massage, a women-only home studio in Perth."
      />
      <Booking />
    </Layout>
  );
}
