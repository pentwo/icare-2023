import React from "react";
import { Anchor, Box, Container, Divider, Group, SimpleGrid, Stack, Text } from "@mantine/core";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

// Site-wide footer rendered in normal page flow (not fixed). Its links are plain,
// server-rendered anchors: the header's service dropdown only mounts when opened,
// so crawlers rely on these to discover every service page from any page.
const SERVICES = [
  { label: "Remedial Massage", to: "/service/remedial/" },
  { label: "Fertility Massage", to: "/service/fertility/" },
  { label: "Pregnancy Massage", to: "/service/pregnancy/" },
  { label: "Pregnancy Care Packages", to: "/service/pregnancy-packages/" },
  { label: "Mind-Body Restorative Massage", to: "/service/mind-body/" },
  { label: "Clinical Hypnosis", to: "/service/clinical-hypnosis/" },
  { label: "Restore Scar Therapy", to: "/service/scar-therapy/" },
  { label: "Manual Lymphatic Drainage", to: "/service/mld/" },
];

const INFO = [
  { label: "About", to: "/about/" },
  { label: "Jenny Yeh", to: "/our-team/" },
  { label: "Prices & Rebates", to: "/price/" },
  { label: "Gift Vouchers", to: "/voucher/" },
  { label: "Book Online", to: "/booking/" },
];

const LinkList = ({ title, links }: { title: string; links: { label: string; to: string }[] }) => (
  <Stack spacing={4}>
    <Text weight={600} size="sm">
      {title}
    </Text>
    {links.map((l) => (
      <Anchor key={l.to} component={Link} to={l.to} size="sm" color="dimmed">
        {l.label}
      </Anchor>
    ))}
  </Stack>
);

const ICareFooter = () => (
  <Box
    component="footer"
    mt={60}
    py="xl"
    sx={(theme) => ({
      backgroundColor: theme.white,
      borderTop: `1px solid ${theme.colors.gray[2]}`,
    })}
  >
    <Container>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]} spacing="lg">
        <LinkList title="Services" links={SERVICES.slice(0, 4)} />
        <LinkList title="More Services" links={SERVICES.slice(4)} />
        <Stack spacing={4}>
          <LinkList title="iCare Health Massage" links={INFO} />
          <Text size="sm" color="dimmed" mt="xs">
            Women-only home studio in Balga, Perth
            <br />
            <Anchor href="tel:+61489080666" size="sm">
              0489 080 666
            </Anchor>
          </Text>
        </Stack>
      </SimpleGrid>

      <Divider my="lg" />

      <Group position="apart" align="center" spacing="md">
        <Group spacing="md" noWrap>
          <StaticImage
            src={"../../images/company/hicaps-logo.jpg"}
            alt="HICAPS health fund claims available"
            width={110}
          />
          <StaticImage
            src={"../../images/company/massage-myotherapy-logo.png"}
            alt="Member of Massage & Myotherapy Australia"
            width={110}
          />
        </Group>
        <Stack spacing={2}>
          <Text size="xs" color="dimmed">
            © 2018 - {new Date().getFullYear()} iCare Health Massage
          </Text>
          <Text size="xs" color="dimmed">
            Made with ❤️ by{" "}
            <Anchor href="https://www.stevenpeng.com.au" rel="nofollow" size="xs">
              Steven Peng
            </Anchor>
          </Text>
        </Stack>
      </Group>
    </Container>
  </Box>
);

export default ICareFooter;
