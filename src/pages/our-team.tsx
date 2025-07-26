import React from "react";
import { Layout } from "../components/Layout/Layout";
import Seo from "../components/general/Seo";
import OurTeam from "../components/general/OurTeam";

export default function OurTeamPage() {
  return (
    <Layout>
      <Seo 
        title={"Our Team"} 
        description="Meet Jenny YEH and our experienced team of massage therapists at iCare Health Massage. Specialized in remedial massage, fertility massage, pregnancy massage, and holistic healing."
        keywords={[
          "Jenny YEH",
          "massage therapist",
          "remedial massage",
          "fertility massage",
          "pregnancy massage",
          "infant massage",
          "qualified therapist",
          "13 years experience",
          "Reiki",
          "Neurofascial release",
          "team"
        ]}
      />
      <OurTeam />
    </Layout>
  );
}