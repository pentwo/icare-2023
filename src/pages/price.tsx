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
  category?: "initial" | "followup";
}

const priceInfo: PriceProps[] = [
  {
    title: "Remedial/Sports Massage",
    description: "*All Health Fund Rebate Are Available",
    hasInitialFollowup: true,
    price: [
      {
        time: "30 minutes",
        price: 93,
        category: "followup",
      },
      {
        time: "45 minutes",
        price: 103,
        category: "followup",
      },
      {
        time: "1 hour",
        price: 130,
        category: "initial",
      },
      {
        time: "1 hour",
        price: 118,
        category: "followup",
      },
      {
        time: "1 hours 15 minutes",
        price: 140,
        highlight: true,
        category: "initial",
      },
      {
        time: "1 hours 15 minutes",
        price: 128,
        highlight: true,
        category: "followup",
      },
      {
        time: "1 hours 30 minutes",
        price: 166,
        category: "initial",
      },
      {
        time: "1 hours 30 minutes",
        price: 154,
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
        price: 288,
        category: "initial",
      },
      {
        time: "Follow up treatment 90 mins",
        price: 206,
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
        price: 140,
        category: "initial",
      },
      {
        time: "1 hours 15 minutes",
        price: 150,
        category: "initial",
      },
      {
        time: "1 hours 30 minutes",
        price: 176,
        highlight: true,
        category: "initial",
      },
      {
        time: "1 hour",
        price: 130,
        category: "followup",
      },
      {
        time: "1 hours 15 minutes",
        price: 140,
        category: "followup",
      },
      {
        time: "1 hours 30 minutes",
        price: 166,
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
        price: 206,
        category: "followup",
      },
      {
        time: "Initial treatment (including consultation) 120 mins",
        price: 288,
        category: "initial",
      },
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
      <Seo title="Price" />
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
  }
`;
