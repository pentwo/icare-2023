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
}

interface PriceDetail {
  time: string;
  price: number;
  highlight?: boolean;
}

const priceInfo: PriceProps[] = [
  {
    title: "Remedial/Sports Massage",
    description: "*All Health Fund Rebate Are Available",
    price: [
      {
        time: "30 minutes",
        price: 93,
      },
      {
        time: "45 minutes",
        price: 103,
      },
      {
        time: "1 hour",
        price: 118,
      },
      {
        time: "1 hours 15 minutes",
        price: 128,
        highlight: true,
      },
      {
        time: "1 hours 30 minutes",
        price: 154,
      },
    ],
  },
  {
    title: "Fertility Massage Therapy",
    price: [
      {
        time: "Initial treatment (including consultation) 120 mins",
        price: 288,
      },
      {
        time: "Follow up treatment 90 mins",
        price: 206,
      },
    ],
  },
  {
    title: "Pregnancy/Prenatal Massage",
    price: [
      {
        time: "1 hour",
        price: 118,
      },
      {
        time: "1 hours 15 minutes",
        price: 128,
      },
      {
        time: "1 hours 30 minutes",
        price: 154,
        highlight: true,
      },
    ],
  },
  {
    title: "Mind-Body Restorative Massage",
    price: [
      {
        time: "Initial treatment (including consultation) 120 mins",
        price: 288,
      },
      {
        time: "Follow up treatment 90 mins",
        price: 206,
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
