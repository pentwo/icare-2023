import React from "react";
import { Layout } from "../components/Layout/Layout";
import Price from "../components/general/Price";
import CancelPolicy from "../components/general/CancelPolicy";
import { graphql } from "gatsby";
import Seo from "../components/general/Seo";

interface PriceProps {
  title: string;
  price: PriceDetail[];
  description?: string;
  bg?: any;
  hasInitialFollowup?: boolean;
}

interface PriceDetail {
  time: string;
  price: number;
  highlight?: boolean;
  category?: "initial" | "followup" | "prebook";
}

const priceInfo: PriceProps[] = [
  {
    title: "Remedial/Sports Massage",
    description: "*All Health Fund Rebate Are Available",
    hasInitialFollowup: true,
    price: [
      {
        time: "30 minutes",
        price: 105,
        category: "followup",
      },
      {
        time: "45 minutes",
        price: 135,
        category: "initial",
      },
      {
        time: "45 minutes",
        price: 125,
        category: "followup",
      },
      {
        time: "1 hour",
        price: 145,
        category: "initial",
      },
      {
        time: "1 hour",
        price: 135,
        category: "followup",
      },
      {
        time: "1 hours 15 minutes",
        price: 155,
        highlight: true,
        category: "initial",
      },
      {
        time: "1 hours 15 minutes",
        price: 145,
        highlight: true,
        category: "followup",
      },
      {
        time: "1 hours 30 minutes",
        price: 180,
        category: "initial",
      },
      {
        time: "1 hours 30 minutes",
        price: 170,
        category: "followup",
      },
    ],
  },
  {
    title: "Fertility Massage Therapy",
    hasInitialFollowup: true,
    price: [
      {
        time: "Initial treatment (including consultation) 120 mins",
        price: 280,
        category: "initial",
      },
      {
        time: "Follow up treatment 90 mins",
        price: 208,
        category: "followup",
      },
    ],
  },
  {
    title: "Pregnancy/Prenatal Massage",
    hasInitialFollowup: true,
    price: [
      {
        time: "1 hour",
        price: 145,
        category: "initial",
      },
      {
        time: "1 hours 15 minutes",
        price: 155,
        category: "initial",
      },
      {
        time: "1 hours 30 minutes",
        price: 180,
        highlight: true,
        category: "initial",
      },
      {
        time: "1 hour",
        price: 135,
        category: "followup",
      },
      {
        time: "1 hours 15 minutes",
        price: 145,
        category: "followup",
      },
      {
        time: "1 hours 30 minutes",
        price: 170,
        highlight: true,
        category: "followup",
      },
    ],
  },
  {
    title: "Mind-Body Restorative Massage",
    hasInitialFollowup: true,
    price: [
      {
        time: "Follow up treatment 90 mins",
        price: 208,
        category: "followup",
      },
      {
        time: "Initial treatment (including consultation) 120 mins",
        price: 280,
        category: "initial",
      },
    ],
  },
  {
    title: "Restore Scar Therapy",
    hasInitialFollowup: true,
    price: [
      {
        time: "Initial treatment 1 hour",
        price: 135,
        category: "initial",
      },
      {
        time: "Follow up treatment 45 minutes",
        price: 125,
        category: "followup",
      },
    ],
  },
  {
    title: "Manual Lymphatic Drainage",
    hasInitialFollowup: true,
    price: [
      { time: "1 hour", price: 145, category: "initial" },
      { time: "1 hour", price: 135, category: "followup" },
      { time: "1 hours 15 minutes", price: 155, category: "initial" },
      { time: "1 hours 15 minutes", price: 145, category: "followup" },
      { time: "1 hours 30 minutes", price: 180, category: "initial" },
      { time: "1 hours 30 minutes", price: 170, category: "followup" },
    ],
  },
];

export default function PricePage({ data }) {
  const prices = priceInfo.map((item, index) => {
    return {
      ...item,
      bg: data[`bg${index + 1}`].childImageSharp.fluid,
    };
  });

  return (
    <Layout>
      <Seo
        title="Prices & Health Fund Rebates"
        description="Massage prices for remedial, fertility, pregnancy, scar therapy and lymphatic drainage sessions in Perth. Health fund rebates available with HICAPS."
      />
      {/* <Hero /> */}
      <Price prices={prices} />
      <CancelPolicy />
    </Layout>
  );
}

export const query = graphql`
  query {
    bg3: file(relativePath: { eq: "priceImages/bg3.webp" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bg1: file(relativePath: { eq: "v2-photos/price-remedial.webp" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bg2: file(relativePath: { eq: "v2-photos/price-fertility.webp" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bg4: file(relativePath: { eq: "v2-photos/price-body-mind.webp" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bg5: file(relativePath: { eq: "v2-photos/price-scar-therapy.webp" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bg6: file(relativePath: { eq: "v2-photos/price-scar-therapy.webp" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
