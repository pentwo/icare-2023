import React from "react";
import { Anchor, Card, Container, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { Link } from "gatsby";

type ServiceKey =
  | "remedial"
  | "fertility"
  | "pregnancy"
  | "pregnancy-packages"
  | "mind-body"
  | "clinical-hypnosis"
  | "scar-therapy"
  | "mld";

const SERVICES: Record<ServiceKey, { title: string; to: string; blurb: string }> = {
  remedial: {
    title: "Remedial Massage",
    to: "/service/remedial/",
    blurb: "Pain relief, posture and scoliosis support.",
  },
  fertility: {
    title: "Fertility Massage",
    to: "/service/fertility/",
    blurb: "Gentle care for reproductive and emotional wellbeing.",
  },
  pregnancy: {
    title: "Pregnancy Massage",
    to: "/service/pregnancy/",
    blurb: "Safe prenatal massage for back, hip and sleep comfort.",
  },
  "pregnancy-packages": {
    title: "Pregnancy Care Packages",
    to: "/service/pregnancy-packages/",
    blurb: "Ongoing care through each trimester and postnatal recovery.",
  },
  "mind-body": {
    title: "Mind-Body Restorative Massage",
    to: "/service/mind-body/",
    blurb: "Massage combined with hypnosis for chronic pain and stress.",
  },
  "clinical-hypnosis": {
    title: "Clinical Hypnosis",
    to: "/service/clinical-hypnosis/",
    blurb: "Support for anxiety, pain, insomnia and fertility stress.",
  },
  "scar-therapy": {
    title: "Restore Scar Therapy",
    to: "/service/scar-therapy/",
    blurb: "Gentle treatment for caesarean and surgical scars.",
  },
  mld: {
    title: "Manual Lymphatic Drainage",
    to: "/service/mld/",
    blurb: "Dr. Vodder MLD for swelling and post-surgical recovery.",
  },
};

// Hand-picked so each page links to the services its clients most often also need.
const RELATED: Record<ServiceKey, ServiceKey[]> = {
  remedial: ["mind-body", "mld", "scar-therapy"],
  fertility: ["pregnancy", "clinical-hypnosis", "mind-body"],
  pregnancy: ["pregnancy-packages", "mld", "scar-therapy"],
  "pregnancy-packages": ["pregnancy", "mld", "scar-therapy"],
  "mind-body": ["clinical-hypnosis", "remedial", "fertility"],
  "clinical-hypnosis": ["mind-body", "fertility", "remedial"],
  "scar-therapy": ["mld", "pregnancy", "remedial"],
  mld: ["scar-therapy", "pregnancy", "remedial"],
};

interface Props {
  current: ServiceKey;
}

const RelatedServices = ({ current }: Props) => {
  return (
    <Container mt={60} mb={60}>
      <Stack spacing="md">
        <Title order={2} align="center">
          Related Services
        </Title>
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {RELATED[current].map((key) => {
            const s = SERVICES[key];
            return (
              <Card key={key} withBorder radius="md" padding="lg">
                <Anchor component={Link} to={s.to} weight={600}>
                  {s.title}
                </Anchor>
                <Text size="sm" color="dimmed" mt={4}>
                  {s.blurb}
                </Text>
              </Card>
            );
          })}
        </SimpleGrid>
        <Text align="center" size="sm">
          See all <Anchor component={Link} to="/price/">prices and health fund rebates</Anchor> or
          browse <Anchor component={Link} to="/service/">all services</Anchor>.
        </Text>
      </Stack>
    </Container>
  );
};

export default RelatedServices;
