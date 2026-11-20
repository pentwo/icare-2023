import React from "react";
import { Layout } from "../components/Layout/Layout";
import Seo from "../components/general/Seo";
import OurTeam from "../components/general/OurTeam";
import { personSchema } from "../Data/schema";

const SITE_URL = "https://icarehealthmassage.com.au";

export default function OurTeamPage() {
  return (
    <Layout>
      <Seo
        title="Our Team"
        description="Meet Jenny Yeh, qualified remedial massage therapist in Perth specialising in fertility, pregnancy and scar therapy massage, and clinical hypnosis."
        schema={[personSchema(SITE_URL, `${SITE_URL}/jenny-yeh.jpg`)]}
      />
      <OurTeam />
    </Layout>
  );
}
