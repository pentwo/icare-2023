import React from "react";
import Helmet from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import {
  FaqItem,
  breadcrumbSchema,
  businessId,
  faqSchema,
  personId,
  serviceSchema,
} from "../../Data/schema";

interface SeoProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: any[];
  image?: string;
  /** Service pages: emits Service + BreadcrumbList JSON-LD. */
  service?: { name: string; serviceType?: string };
  /** Visible FAQ items on the page: emits FAQPage JSON-LD. */
  faq?: FaqItem[];
  /** Any other JSON-LD objects for this page. */
  schema?: object[];
}

const localBusinessSchema = (siteUrl: string, description: string, image: string) => ({
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": businessId(siteUrl),
  name: "iCare Health Massage",
  description,
  url: `${siteUrl}/`,
  image,
  logo: `${siteUrl}/icons/icon-512x512.png`,
  telephone: "+61489080666",
  priceRange: "$$",
  founder: { "@type": "Person", "@id": personId(siteUrl), name: "Jenny Yeh" },
  sameAs: [
    "https://www.google.com/search?kgmid=/g/11gtykjqsw",
    "https://www.instagram.com/icare_health_massage_hypnosis/",
    "https://www.facebook.com/iCare.Health.Massage.Hypnosis",
  ],
  // Home studio: suburb only, street address is intentionally not published
  address: {
    "@type": "PostalAddress",
    addressLocality: "Balga",
    addressRegion: "WA",
    postalCode: "6061",
    addressCountry: "AU",
  },
  areaServed: { "@type": "City", name: "Perth" },
  openingHoursSpecification: [
    { dayOfWeek: "Monday", opens: "08:30", closes: "17:00" },
    { dayOfWeek: ["Wednesday", "Thursday"], opens: "08:00", closes: "12:00" },
    { dayOfWeek: "Friday", opens: "10:30", closes: "17:00" },
    { dayOfWeek: "Saturday", opens: "08:00", closes: "17:00" },
  ].map((spec) => ({ "@type": "OpeningHoursSpecification", ...spec })),
  knowsAbout: [
    "Remedial Massage",
    "Fertility Massage",
    "Pregnancy Massage",
    "Scar Therapy",
    "Clinical Hypnosis",
    "Manual Lymphatic Drainage",
  ],
});

function SEO({ title, description, lang = "en", meta = [], image, service, faq, schema = [] }: SeoProps) {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(detailsQuery);
  const { siteUrl, defaultDescription, author } = site.siteMetadata;

  const metaDescription = description || defaultDescription;
  const canonical = `${siteUrl}${pathname}`;
  const metaImage = `${siteUrl}${image || "/og-image.jpg"}`;
  const isHome = pathname === "/";

  const jsonLd: object[] = [
    ...(isHome ? [localBusinessSchema(siteUrl, metaDescription, metaImage)] : []),
    ...(service
      ? [
          serviceSchema(siteUrl, canonical, service.name, metaDescription, service.serviceType),
          breadcrumbSchema(siteUrl, canonical, service.name),
        ]
      : []),
    ...(faq?.length ? [faqSchema(faq)] : []),
    ...schema,
  ];

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[{ rel: "canonical", href: canonical }]}
      meta={[
        { name: `description`, content: metaDescription },
        { property: `og:title`, content: title },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { property: `og:url`, content: canonical },
        { property: `og:image`, content: metaImage },
        { property: `og:site_name`, content: site.siteMetadata.title },
        { property: `og:locale`, content: `en_AU` },
        { name: `twitter:card`, content: `summary_large_image` },
        { name: `twitter:creator`, content: author },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: metaDescription },
        { name: `twitter:image`, content: metaImage },
      ].concat(meta)}
    >
      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        defaultDescription: description
        author
        siteUrl
      }
    }
  }
`;
