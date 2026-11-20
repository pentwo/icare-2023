import React from "react";
import Helmet from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

interface SeoProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: any[];
  image?: string;
}

const localBusinessSchema = (siteUrl: string, description: string, image: string) => ({
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "iCare Health Massage",
  description,
  url: siteUrl,
  image,
  logo: `${siteUrl}/icons/icon-512x512.png`,
  telephone: "+61489080666",
  priceRange: "$$",
  founder: { "@type": "Person", name: "Jenny Yeh" },
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

function SEO({ title, description, lang = "en", meta = [], image }: SeoProps) {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(detailsQuery);
  const { siteUrl, defaultDescription, author } = site.siteMetadata;

  const metaDescription = description || defaultDescription;
  const canonical = `${siteUrl}${pathname}`;
  const metaImage = `${siteUrl}${image || "/og-image.jpg"}`;
  const isHome = pathname === "/";

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
      {isHome && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema(siteUrl, metaDescription, metaImage))}
        </script>
      )}
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
