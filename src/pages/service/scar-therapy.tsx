import {
  Title,
  Text,
  Container,
  Stack,
  Group,
  Grid,
  Box,
  List,
  ThemeIcon,
  Button,
  Accordion,
} from "@mantine/core";
import React from "react";
import SEO from "../../components/general/Seo";
import { Layout } from "../../components/Layout/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { IconCheck, IconCaretRight, IconCertificate, IconHeart } from "@tabler/icons";
import ColoredBox from "../../components/ui/ColoredBox";
import { Link } from "gatsby";

const ScarTherapy = () => {
  return (
    <Layout>
      <Container mt={60}>
        <SEO
          title={"Restore Scar Therapy"}
          description="Restore Scar Therapy is a gentle, evidence-informed approach to help your body heal from caesarean and oncology scars. Certified specialist trained by Emma Holly, founder of Restore Therapy."
        />
        <Stack spacing={"xl"}>
          <Title order={1}>Restore Scar Therapy</Title>
          <Title order={4}>Certified Caesarean & Oncology Scar Specialist</Title>
          <Title order={2}>
            A Gentle, Evidence-Informed Approach to Scar Healing
          </Title>

          {/* What Is It */}
          <Grid align="center">
            <Grid.Col sm={12} md={6}>
              <Stack spacing={"xl"}>
                <Text>
                  Restore Scar Therapy is a non-invasive, holistic method developed by Emma Holly —
                  the UK's leading scar therapy educator — that uses evidence-informed techniques to
                  treat both new and historic scars.
                </Text>
                <Text>
                  Scar tissue can affect far more than what you see on the surface. Over time,
                  adhesions beneath the skin can restrict movement, create nerve sensitivity, impact
                  pelvic floor function, and contribute to emotional responses linked to your body's
                  trauma memory. Restore Scar Therapy addresses all of these dimensions.
                </Text>
                <Text>
                  By combining gentle hands-on massage techniques with personalised self-care
                  strategies, this therapy aims to improve scar tissue mobility, reduce discomfort,
                  restore sensation, and support your emotional wellbeing on the healing journey.
                </Text>
              </Stack>
            </Grid.Col>

            <Grid.Col md={12} lg={6} style={{ display: "flex", justifyContent: "center" }}>
              <StaticImage
                src="../../images/v2-photos/body-mind-1.webp"
                alt="Restore Scar Therapy"
                height={560}
                style={{ borderRadius: "16px" }}
              />
            </Grid.Col>
          </Grid>

          {/* Who Can Benefit */}
          <ColoredBox title="Who Can Benefit?" color="teal.1">
            <Text>
              Restore Scar Therapy is suitable for anyone carrying a scar — whether it happened
              recently or years ago. It is never too late to begin healing.
            </Text>
            <Grid mt="md">
              <Grid.Col sm={12} md={6}>
                <List
                  spacing="md"
                  icon={
                    <ThemeIcon variant="light" size="md" color="teal">
                      <IconHeart size="1rem" />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    <Text weight={600}>Caesarean Section Recovery</Text>
                    <Text size="sm" color="dimmed">
                      Support for both recent and long-standing C-section scars. Addresses numbness,
                      tightness, overhang (shelf), pelvic floor tension, and emotional connection to
                      your birth experience.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text weight={600}>Cancer Surgery Scars</Text>
                    <Text size="sm" color="dimmed">
                      Specialist care for those who have undergone mastectomy, lumpectomy,
                      reconstruction, and other oncology procedures. Designed with sensitivity to the
                      full cancer journey.
                    </Text>
                  </List.Item>
                </List>
              </Grid.Col>
              <Grid.Col sm={12} md={6}>
                <List
                  spacing="md"
                  icon={
                    <ThemeIcon variant="light" size="md" color="teal">
                      <IconHeart size="1rem" />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    <Text weight={600}>Abdominal & Pelvic Surgery</Text>
                    <Text size="sm" color="dimmed">
                      Helpful for hysterectomy, appendix removal and other surgical
                      scars that may be causing discomfort, restriction, or impacting daily movement.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text weight={600}>Historical Scars</Text>
                    <Text size="sm" color="dimmed">
                      Scar tissue can continue to cause symptoms for many years. Whether your scar is
                      2 months or 20 years old, targeted therapy can still make a meaningful
                      difference.
                    </Text>
                  </List.Item>
                </List>
              </Grid.Col>
            </Grid>
          </ColoredBox>

          {/* Benefits */}
          <Grid align="center">
            <Grid.Col sm={12} md={6}>
              <Stack spacing={"xl"}>
                <Title order={2}>How It Can Help</Title>
                <Text>
                  Each session is tailored to your individual scar presentation, history, and goals.
                  Results vary, but many clients notice improvements including:
                </Text>
                <List
                  spacing="md"
                  icon={
                    <ThemeIcon variant="light" size="md" color="teal">
                      <IconCheck size="1rem" />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    <Text weight={600}>Improved Mobility</Text>
                    <Text size="sm" color="dimmed">
                      Reduce tightness and pull around the scar area
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text weight={600}>Sensation Restoration</Text>
                    <Text size="sm" color="dimmed">
                      Ease numbness and hypersensitivity in scar tissue
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text weight={600}>Pain Relief</Text>
                    <Text size="sm" color="dimmed">
                      Reduce aching, pulling sensations, and referred pain
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text weight={600}>Pelvic Floor Support</Text>
                    <Text size="sm" color="dimmed">
                      Address tension linked to C-section and pelvic scars
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text weight={600}>Emotional Wellbeing</Text>
                    <Text size="sm" color="dimmed">
                      Reconnect with your body and process your experience
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text weight={600}>Self-Care Tools</Text>
                    <Text size="sm" color="dimmed">
                      Learn techniques to continue healing between sessions
                    </Text>
                  </List.Item>
                </List>
              </Stack>
            </Grid.Col>
            <Grid.Col sm={12} md={6} style={{ display: "flex", justifyContent: "center" }}>
              <StaticImage
                src="../../images/v2-photos/fertility-2.webp"
                alt="Scar Therapy Benefits"
                height={500}
                style={{ borderRadius: "16px" }}
              />
            </Grid.Col>
          </Grid>

          {/* What to Expect */}
          <Grid align="center">
            <Grid.Col sm={12} md={6}>
              <StaticImage
                src="../../images/v2-photos/body-mind-3.webp"
                alt="Scar Therapy Session"
                height={480}
                style={{ borderRadius: "16px" }}
              />
            </Grid.Col>
            <Grid.Col sm={12} md={6}>
              <Stack spacing={"xl"}>
                <Title order={2}>What to Expect in Your Session</Title>
                <Text>
                  Your comfort and consent are at the centre of every session. No two appointments are
                  the same — your therapist will adapt to your needs, your history, and how you feel
                  on the day.
                </Text>
                <List
                  spacing="md"
                  type="ordered"
                  icon={
                    <ThemeIcon variant="light" size="md" color="teal">
                      <IconCaretRight size="1rem" />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    <Text weight={600}>Initial Consultation</Text>
                    <Text size="sm" color="dimmed">
                      We begin with a thorough consultation covering your medical history, scar
                      background, and current symptoms. There is no pressure — we move only when you
                      feel ready.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text weight={600}>Scar Assessment</Text>
                    <Text size="sm" color="dimmed">
                      A gentle visual and manual assessment helps us understand the scar's texture,
                      mobility, sensitivity, and any areas of restriction or adhesion beneath the
                      surface.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text weight={600}>Hands-On Therapy</Text>
                    <Text size="sm" color="dimmed">
                      Using specialised, gentle Restore Therapy techniques, we work directly with your
                      scar tissue to improve circulation, mobility, and tissue quality at multiple
                      layers.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text weight={600}>Self-Care Education</Text>
                    <Text size="sm" color="dimmed">
                      You'll receive personalised guidance on how to continue caring for your scar at
                      home, maximising the results of each treatment between sessions.
                    </Text>
                  </List.Item>
                </List>
              </Stack>
            </Grid.Col>
          </Grid>

          {/* Credentials */}
          <ColoredBox title="Trained by the Best" color="teal.1">
            <Grid align="center">
              <Grid.Col sm={12} md={6}>
                <Stack spacing="md">
                  <Text>
                    I completed my Restore Scar Therapy training directly under{" "}
                    <Text component="span" weight={700}>
                      Emma Holly
                    </Text>
                    , founder and leading educator of Restore Therapy — recognised as one of the
                    world's foremost specialists in scar tissue rehabilitation.
                  </Text>
                  <Text>
                    Restore Therapy has trained over 2,000 healthcare professionals globally, and
                    their methods are trusted by NHS centres, private hospitals, and leading sporting
                    organisations.
                  </Text>
                  <Group spacing="sm" mt="sm">
                    <ThemeIcon variant="light" size="md" color="teal">
                      <IconCertificate size="1rem" />
                    </ThemeIcon>
                    <Text size="sm" weight={600}>
                      Caesarean Scar Specialist
                    </Text>
                  </Group>
                  <Group spacing="sm">
                    <ThemeIcon variant="light" size="md" color="teal">
                      <IconCertificate size="1rem" />
                    </ThemeIcon>
                    <Text size="sm" weight={600}>
                      Oncology Scar Specialist
                    </Text>
                  </Group>
                  <Group spacing="sm">
                    <ThemeIcon variant="light" size="md" color="teal">
                      <IconCertificate size="1rem" />
                    </ThemeIcon>
                    <Text size="sm" weight={600}>
                      Evidence-Informed Methods
                    </Text>
                  </Group>
                  <Group spacing="sm">
                    <ThemeIcon variant="light" size="md" color="teal">
                      <IconCertificate size="1rem" />
                    </ThemeIcon>
                    <Text size="sm" weight={600}>
                      Emma Holly Trained
                    </Text>
                  </Group>
                  <Group spacing="xl" mt="md" position="center">
                    <StaticImage
                      src="../../images/scar-therapy/C-Section_scar_specialist_badge.png"
                      alt="C-Section Scar Specialist Badge"
                      height={150}
                      placeholder="blurred"
                    />
                    <StaticImage
                      src="../../images/scar-therapy/ONCOLOGY_scar_specialist_badge.png"
                      alt="Oncology Scar Specialist Badge"
                      height={150}
                      placeholder="blurred"
                    />
                  </Group>
                </Stack>
              </Grid.Col>
              <Grid.Col sm={12} md={6} style={{ display: "flex", justifyContent: "center" }}>
                <StaticImage
                  src="../../images/scar-therapy/with_emma.webp"
                  alt="Certified Scar Therapy Specialist"
                  // height={300}
                  style={{ borderRadius: "16px" }}
                />
              </Grid.Col>
            </Grid>
          </ColoredBox>

          {/* FAQ */}
          <Box>
            <Title order={2} mb="md">
              Common Questions
            </Title>
            <Text color="dimmed" mb="xl">
              Here are some of the things people often ask before their first scar therapy session.
            </Text>
            <Accordion variant="separated" radius="md">
              <Accordion.Item value="when-to-start">
                <Accordion.Control>
                  When is it safe to start scar therapy after surgery?
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm" color="dimmed">
                    For caesarean scars, we generally recommend waiting until the wound is fully
                    closed — typically around 6–8 weeks postpartum. For oncology scars, timing
                    depends on your treatment pathway. We always recommend consulting your medical
                    team first. That said, it is never too late — even scars from many years ago can
                    respond to treatment.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="does-it-hurt">
                <Accordion.Control>Does scar massage hurt?</Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm" color="dimmed">
                    The techniques used in Restore Scar Therapy are gentle and non-invasive. Some
                    areas may be sensitive — particularly if there is nerve involvement or
                    long-standing tension — but treatment is always adapted to your comfort level.
                    Many clients find the sessions deeply relaxing.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="how-many-sessions">
                <Accordion.Control>How many sessions will I need?</Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm" color="dimmed">
                    This varies from person to person and depends on the age, size, and complexity of
                    your scar, as well as your goals. Some clients notice improvements after just one
                    or two sessions; others benefit from an ongoing series. We'll discuss a
                    personalised plan during your initial consultation.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="active-treatment">
                <Accordion.Control>
                  Is this service suitable for active cancer treatment?
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm" color="dimmed">
                    As an Oncology Scar Specialist, I am trained to work safely with clients at
                    different stages of their cancer journey. If you are currently receiving
                    treatment, we will liaise carefully with your medical team to ensure your safety
                    and comfort throughout.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="combine-services">
                <Accordion.Control>
                  Can I combine this with other iCare services?
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm" color="dimmed">
                    Absolutely. Restore Scar Therapy pairs beautifully with our Fertility Massage,
                    Remedial Massage, and Mind-Body Restorative Massage services. Please note that
                    pregnancy is a contraindication for Restore Scar Therapy, so it is not suitable
                    to be combined with Pregnancy Massage or received during pregnancy. We recommend
                    waiting until after you have given birth and your wound has fully healed before
                    beginning scar therapy.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Box>

          {/* Booking CTA */}
          <ColoredBox title="Ready to Begin Your Healing Journey?" color="teal.1">
            <Text>
              Whether your scar is weeks or years old, there is support available. Book a
              consultation and take the first step toward feeling more comfortable in your body.
            </Text>

            <Group position="center" spacing="md" mt="md">
              <Button size="lg" component={Link} to="/booking" color="teal">
                Book Your Session
              </Button>
              <Button
                size="lg"
                variant="outline"
                component="a"
                href="tel:+61489080666"
                color="teal"
              >
                Call 0489 080 666
              </Button>
            </Group>
          </ColoredBox>
        </Stack>
      </Container>
    </Layout>
  );
};

export default ScarTherapy;
