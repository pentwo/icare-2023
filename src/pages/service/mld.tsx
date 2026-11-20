import { YEARS_EXPERIENCE } from "../../Data/business";
import {
  Title,
  Text,
  Container,
  Stack,
  List,
  ThemeIcon,
  Group,
  Button,
  Grid,
  Accordion,
  Badge,
  Table,
} from "@mantine/core";
import React from "react";
import SEO from "../../components/general/Seo";
import { Layout } from "../../components/Layout/Layout";
import RelatedServices from "../../components/general/RelatedServices";
import { IconDroplet, IconHeart, IconShieldCheck, IconMoodHappy } from "@tabler/icons";
import ColoredBox from "../../components/ui/ColoredBox";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const mldPrices = [
  { duration: "60 minutes", initial: 140, standard: 130, prebook: 120 },
  { duration: "75 minutes", initial: 150, standard: 140, prebook: 130 },
  { duration: "90 minutes", initial: 175, standard: 165, prebook: 155 },
];

const ManualLymphaticDrainage = () => {
  return (
    <Layout>
      <Container mt={60}>
        <SEO
          title="Manual Lymphatic Drainage Perth"
          description="Manual Lymphatic Drainage (MLD) in Perth using the Dr. Vodder technique. Gentle relief for pregnancy swelling, post-surgical recovery and pain."
        />
        <Stack spacing={"xl"}>
          <Badge color="cyan" size="lg" variant="light">
            New Service
          </Badge>
          <Title order={1} sx={{ fontSize: 42 }}>
            Manual Lymphatic Drainage
          </Title>

          <Text size="lg">
            Gentle support for your body's natural drainage system. Using the Dr. Vodder technique,
            light, rhythmic touch to ease swelling, calm the body and support your recovery.
          </Text>

          <Grid align="center">
            <Grid.Col sm={12} md={6}>
              <Stack spacing={"xs"}>
                <Title order={2}>What is Manual Lymphatic Drainage?</Title>
                <Text>
                  MLD is a gentle, rhythmic massage technique that supports your lymphatic system —
                  the body's natural network for moving excess fluid and clearing waste. Using very
                  light pressure and slow, flowing strokes, it encourages lymph flow to help reduce
                  swelling and ease discomfort.
                </Text>
                <Text>It is deeply relaxing, and ideal if you need a softer touch.</Text>
              </Stack>
            </Grid.Col>

            <Grid.Col md={12} lg={6} style={{ display: "flex", justifyContent: "center" }}>
              <StaticImage
                src="../../images/v2-photos/body-mind-1.webp"
                alt="Manual Lymphatic Drainage Treatment"
                height={380}
                style={{ borderRadius: "16px" }}
              />
            </Grid.Col>
          </Grid>

          <ColoredBox title="Dr. Vodder's Manual Lymphatic Drainage" color="cyan.1">
            <Text>
              At iCare, I use the <strong>Dr. Vodder method</strong> — the original manual lymphatic
              drainage technique. It was developed by Danish therapist Dr. Emil Vodder and his wife
              Estrid in the 1930s, and is still widely taught and practised around the world today.
            </Text>
            <Text mt="md">
              It is a precise technique, not a general light massage. Each movement follows the
              direction of lymph flow, with carefully measured pressure and a steady rhythm, so the
              skin is gently stretched and released rather than rubbed.
            </Text>
          </ColoredBox>

          <Title order={2}>Who Can Benefit?</Title>
          <Text>MLD is especially helpful in three situations:</Text>

          <Grid>
            <Grid.Col sm={12} md={4}>
              <ColoredBox title="Swelling During Pregnancy" color="cyan.1">
                <Text>
                  Swollen hands, feet and legs are common as your body carries extra fluid. MLD
                  offers gentle relief in a calm, restful session designed around your comfort.
                </Text>
              </ColoredBox>
            </Grid.Col>
            <Grid.Col sm={12} md={4}>
              <ColoredBox title="Swelling After Surgery" color="cyan.1">
                <Text>
                  Wisdom tooth removal, hip or knee replacement, cosmetic surgery and more. MLD
                  supports recovery by encouraging fluid movement and easing tightness and puffiness.
                </Text>
                <Text mt="sm" size="sm" italic>
                  Please check timing with your surgeon before booking.
                </Text>
              </ColoredBox>
            </Grid.Col>
            <Grid.Col sm={12} md={4}>
              <ColoredBox title="Pain Management" color="cyan.1">
                <Text>
                  Swelling and inflammation can add to ongoing pain. MLD calms the nervous system and
                  may help ease pain through gentle stimulation of the skin's touch receptors.
                </Text>
              </ColoredBox>
            </Grid.Col>
          </Grid>

          <Grid align="center">
            <Grid.Col sm={12} md={6}>
              <StaticImage
                src="../../images/v2-photos/remedial-2.webp"
                alt="Manual Lymphatic Drainage"
                style={{ borderRadius: "16px" }}
              />
            </Grid.Col>
            <Grid.Col sm={12} md={6}>
              <Stack spacing={"xl"}>
                <Title order={2}>How MLD May Help</Title>
                <Text>Light touch, with effects that reach well beyond the surface.</Text>
                <List
                  spacing="md"
                  icon={
                    <ThemeIcon variant="light" size="lg" color="cyan" radius="xl">
                      <IconDroplet size={18} />
                    </ThemeIcon>
                  }
                >
                  <List.Item
                    icon={
                      <ThemeIcon variant="light" size="lg" color="cyan" radius="xl">
                        <IconMoodHappy size={18} />
                      </ThemeIcon>
                    }
                  >
                    <Text weight={500}>Calming</Text>
                    <Text size="sm" color="dimmed">
                      Relaxes the nervous system and promotes deep rest
                    </Text>
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon variant="light" size="lg" color="cyan" radius="xl">
                        <IconHeart size={18} />
                      </ThemeIcon>
                    }
                  >
                    <Text weight={500}>Pain-relieving</Text>
                    <Text size="sm" color="dimmed">
                      Gentle touch may help reduce pain signals
                    </Text>
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon variant="light" size="lg" color="cyan" radius="xl">
                        <IconDroplet size={18} />
                      </ThemeIcon>
                    }
                  >
                    <Text weight={500}>Decongesting</Text>
                    <Text size="sm" color="dimmed">
                      Encourages lymph flow to reduce fluid build-up and swelling
                    </Text>
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon variant="light" size="lg" color="cyan" radius="xl">
                        <IconShieldCheck size={18} />
                      </ThemeIcon>
                    }
                  >
                    <Text weight={500}>Immune-supporting</Text>
                    <Text size="sm" color="dimmed">
                      Moves lymph towards the lymph nodes, where the body's immune response takes
                      place
                    </Text>
                  </List.Item>
                </List>
              </Stack>
            </Grid.Col>
          </Grid>

          <ColoredBox title="What to Expect" color="cyan.1">
            <Text mb="md">Unhurried, personal care from your first visit.</Text>
            <Grid>
              <Grid.Col sm={12} md={4}>
                <Title order={4}>Consultation</Title>
                <Text size="sm">We talk through your health history, symptoms and goals.</Text>
              </Grid.Col>
              <Grid.Col sm={12} md={4}>
                <Title order={4}>Gentle Treatment</Title>
                <Text size="sm">
                  Light, slow, rhythmic strokes, usually starting near the centre of the body and
                  working outward. No deep pressure, and you may feel sleepy.
                </Text>
              </Grid.Col>
              <Grid.Col sm={12} md={4}>
                <Title order={4}>Aftercare</Title>
                <Text size="sm">
                  Simple tips to support your recovery, such as drinking water and gentle movement.
                </Text>
              </Grid.Col>
            </Grid>
          </ColoredBox>

          <ColoredBox title="Is MLD Right for You?" color="white">
            <Text>
              MLD is gentle and suitable for many people, but it may not be appropriate for some
              conditions (for example, acute infection, blood clots or certain heart conditions).
              Please tell us your full medical history when booking so we can tailor your session
              safely.
            </Text>
          </ColoredBox>

          <Grid align="center">
            <Grid.Col sm={12} md={6}>
              <Stack spacing={"xs"}>
                <Title order={2}>Your Practitioner</Title>
                <Title order={3} color="cyan">
                  Jenny
                </Title>
                <Text>
                  Jenny is a Remedial Massage Therapist with {YEARS_EXPERIENCE} years of experience, with a special
                  interest in pregnancy, post-surgical care and pain management. She uses the Dr.
                  Vodder Manual Lymphatic Drainage technique, and her approach is caring, patient and
                  personalised to you.
                </Text>
                <Text italic mt="md">
                  Every session begins with listening.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col sm={12} md={6}>
              <StaticImage
                src="../../images/v2-photos/body-mind-3.webp"
                alt="Jenny - MLD Practitioner"
                height={400}
                style={{ borderRadius: "16px" }}
              />
            </Grid.Col>
          </Grid>

          <ColoredBox title="Book Your Session" color="cyan.1">
            <Table striped highlightOnHover sx={{ backgroundColor: "white", borderRadius: 8 }}>
              <thead>
                <tr>
                  <th>Duration</th>
                  <th style={{ textAlign: "center" }}>Initial</th>
                  <th style={{ textAlign: "center" }}>Standard</th>
                  <th style={{ textAlign: "center" }}>Pre-book</th>
                </tr>
              </thead>
              <tbody>
                {mldPrices.map((row) => (
                  <tr key={row.duration}>
                    <td>{row.duration}</td>
                    <td align="center">${row.initial}</td>
                    <td align="center">${row.standard}</td>
                    <td align="center">${row.prebook}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Text size="sm" color="dimmed">
              Pre-book price applies when you book your next session in advance. HICAPS available
              on the spot.
            </Text>
            <Group position="center">
              <Button size="lg" component={Link} to="/booking/" color="cyan">
                Book Your Session
              </Button>
            </Group>
            <Text align="center" size="sm" color="dimmed">
              Call or text 0489 080 666
            </Text>
          </ColoredBox>

          <Title order={2}>Frequently Asked Questions</Title>
          <Accordion variant="separated" radius="md">
            <Accordion.Item value="sessions">
              <Accordion.Control>How many sessions will I need?</Accordion.Control>
              <Accordion.Panel>
                It depends on your needs. We will discuss a plan with you at your first visit.
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="pain">
              <Accordion.Control>Does it hurt?</Accordion.Control>
              <Accordion.Panel>No. MLD uses very light pressure and is gentle.</Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="pregnancy">
              <Accordion.Control>Is it safe during pregnancy?</Accordion.Control>
              <Accordion.Panel>
                It is generally considered gentle, and we tailor each session to you. Please let us
                know how far along you are, and check with your midwife or doctor if you have any
                concerns.
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="surgery">
              <Accordion.Control>Can I have MLD soon after surgery?</Accordion.Control>
              <Accordion.Panel>
                Timing varies by procedure. Please check with your surgeon first.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          <ColoredBox title="Your body already knows how to heal" color="cyan.1">
            <Text size="lg" align="center" italic>
              Sometimes it just needs a little help moving forward.
            </Text>
            <Group position="center" mt="lg">
              <Button size="lg" component={Link} to="/booking/" color="cyan">
                Book Your Session
              </Button>
              <Button size="lg" component={Link} to="/voucher/" variant="outline" color="cyan">
                Buy Voucher
              </Button>
            </Group>
          </ColoredBox>
        </Stack>
      </Container>
      <RelatedServices current="mld" />
    </Layout>
  );
};

export default ManualLymphaticDrainage;
