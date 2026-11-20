// JSON-LD builders. Everything here must match what is visible on the page.

export interface FaqItem {
  q: string;
  a: string;
}

export const businessId = (siteUrl: string) => `${siteUrl}/#business`;
export const personId = (siteUrl: string) => `${siteUrl}/our-team/#jenny`;

// Lightweight reference used on non-home pages; the full business entity lives on "/".
const businessRef = (siteUrl: string) => ({
  "@type": "HealthAndBeautyBusiness",
  "@id": businessId(siteUrl),
  name: "iCare Health Massage",
  url: `${siteUrl}/`,
});

export const serviceSchema = (
  siteUrl: string,
  url: string,
  name: string,
  description: string,
  serviceType: string = name
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${url}#service`,
  name,
  serviceType,
  description,
  url,
  areaServed: { "@type": "City", name: "Perth" },
  provider: businessRef(siteUrl),
});

export const breadcrumbSchema = (siteUrl: string, url: string, name: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/service/` },
    { "@type": "ListItem", position: 3, name, item: url },
  ],
});

export const faqSchema = (faqs: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

const credential = (name: string, recognizedBy?: string) => ({
  "@type": "EducationalOccupationalCredential",
  name,
  ...(recognizedBy && { recognizedBy: { "@type": "Organization", name: recognizedBy } }),
});

// Only list credentials Jenny actually holds and that are shown on /our-team/.
// MLD (Dr. Vodder) is intentionally absent until the certificate is issued.
export const personSchema = (siteUrl: string, image: string) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId(siteUrl),
  name: "Jenny Yeh",
  jobTitle: "Remedial Massage Therapist",
  url: `${siteUrl}/our-team/`,
  image,
  worksFor: businessRef(siteUrl),
  memberOf: { "@type": "Organization", name: "Massage & Myotherapy Australia" },
  hasCredential: [
    credential("Diploma of Remedial Massage (HLT50307)"),
    credential("Pregnancy Massage Practitioner", "NurtureLife"),
    credential("Caesarean Scar Specialist", "Restore Therapy"),
    credential("Oncology Scar Specialist", "Restore Therapy"),
    credential("Paediatric Massage Consultant"),
  ],
  knowsAbout: [
    "Remedial Massage",
    "Pregnancy Massage",
    "Fertility Massage",
    "Scar Therapy",
    "Clinical Hypnosis",
    "Manual Lymphatic Drainage",
  ],
});
