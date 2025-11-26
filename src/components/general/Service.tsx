import React from "react";
import {
  Stack,
  Title,
  Text,
  Container,
  Grid,
  Card,
  Button,
  Group,
  Box,
  Table,
  List,
  ThemeIcon,
  Center,
  Badge,
  createStyles,
} from "@mantine/core";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { IconCheck, IconClock, IconUsers, IconHeart, IconGift, IconStar } from "@tabler/icons";
import ColoredBox from "../ui/ColoredBox";
import { Carousel } from "@mantine/carousel";
import { testimonies } from "../../Data/testimonies";
import Testimony from "./Testimony";
import CancelPolicy from "./CancelPolicy";

const useStyles = createStyles((theme) => ({
  pregnancyCard: {
    overflow: "hidden",
    border: `2px solid ${theme.colors.yellow[3]}`,
  },
  pregnancyLeftSection: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
  packagesBanner: {
    background: `linear-gradient(135deg, ${theme.colors.yellow[1]} 0%, ${theme.colors.orange[1]} 100%)`,
    padding: theme.spacing.xl,
    height: "100%",
    display: "flex",
    alignItems: "center",

    [theme.fn.smallerThan("sm")]: {
      padding: theme.spacing.md,
    },
  },
  packagesContent: {
    width: "100%",
  },
  packageCard: {
    backgroundColor: "white",
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    textAlign: "center",
    boxShadow: theme.shadows.sm,
    border: `1px solid ${theme.colors.yellow[2]}`,
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: theme.shadows.md,
    },
  },
  savingsBadge: {
    position: "absolute",
    top: -10,
    right: -10,
  },
}));

interface Props {}

const Service = (props: Props) => {
  const { classes } = useStyles();
  const allTestimonies = testimonies.slice(0, 6); // Show first 6 testimonials

  return (
    <Container>
      <Stack spacing="xl">
        {/* Hero Section */}
        <Box mt={60} mb={40}>
          <Center>
            <Stack align="center" spacing="md">
              <Title order={1} align="center" size="h1">
                Our Specialized Massage Services
              </Title>
              <Text align="center" size="lg" color="dimmed" maw={600}>
                Holistic care combining massage therapy, clinical hypnosis, and strategic
                psychotherapy to support your complete wellbeing journey
              </Text>
              <Button size="lg" component={Link} to="/booking" mt="md">
                Book Your Consultation
              </Button>
            </Stack>
          </Center>
        </Box>

        {/* Services Overview Grid */}
        <Box>
          <Title order={2} align="center" mb="xl">
            Choose Your Healing Path
          </Title>

          <Grid>
            {/* Remedial Massage */}
            <Grid.Col md={6}>
              <Card
                shadow="md"
                padding="lg"
                radius="md"
                withBorder
                style={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                <Card.Section>
                  <Box style={{ height: 250, overflow: "hidden" }}>
                    <StaticImage
                      src="../../images/v2-photos/remedial-1.webp"
                      alt="Remedial Massage"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Card.Section>

                <Stack spacing="md" style={{ flex: 1 }} mt="md">
                  <Title order={3} color="green">
                    Remedial Massage
                  </Title>
                  <Text size="sm" color="dimmed">
                    Professional pain management with 14 years of experience. Specializing in
                    therapeutic treatment for pain relief and postural improvement.
                  </Text>

                  <List
                    spacing="xs"
                    size="sm"
                    icon={
                      <ThemeIcon size="sm" color="green">
                        <IconCheck size="0.8rem" />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>Chronic pain management</List.Item>
                    <List.Item>Postural improvement</List.Item>
                    <List.Item>Scoliosis treatment</List.Item>
                    <List.Item>Injury rehabilitation</List.Item>
                  </List>

                  <Group grow mt="auto">
                    <Button component={Link} to="/service/remedial" variant="light" color="green">
                      Learn More
                    </Button>
                    <Button component={Link} to="/booking" color="green">
                      Book Now
                    </Button>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>

            {/* Fertility Massage */}
            <Grid.Col md={6}>
              <Card
                shadow="md"
                padding="lg"
                radius="md"
                withBorder
                style={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                <Card.Section>
                  <Box style={{ height: 250, overflow: "hidden" }}>
                    <StaticImage
                      src="../../images/v2-photos/fertility-2.webp"
                      alt="Fertility Massage"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Card.Section>

                <Stack spacing="md" style={{ flex: 1 }} mt="md">
                  <Title order={3} color="pink">
                    Fertility Massage
                  </Title>
                  <Text size="sm" color="dimmed">
                    Specialized treatment combining gentle massage with emotional support to promote
                    reproductive wellness. Formerly Mind-Body Restorative Massage.
                  </Text>

                  <List
                    spacing="xs"
                    size="sm"
                    icon={
                      <ThemeIcon size="sm" color="pink">
                        <IconHeart size="0.8rem" />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>Fertility support</List.Item>
                    <List.Item>Hormonal balance</List.Item>
                    <List.Item>IVF assistance</List.Item>
                    <List.Item>Emotional wellbeing</List.Item>
                  </List>

                  <Group grow mt="auto">
                    <Button component={Link} to="/service/fertility" variant="light" color="pink">
                      Learn More
                    </Button>
                    <Button component={Link} to="/booking" color="pink">
                      Book Now
                    </Button>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>

            {/* Pregnancy Massage - Full Width with Packages */}
            <Grid.Col md={12}>
              <Card shadow="md" padding={0} radius="md" withBorder className={classes.pregnancyCard}>
                <Grid gutter={0}>
                  {/* Left side - Image and service info */}
                  <Grid.Col sm={12} md={5}>
                    <Box className={classes.pregnancyLeftSection}>
                      <Box style={{ height: 250, overflow: "hidden" }}>
                        <StaticImage
                          src="../../images/pregnancy-images/v2/pregnancy-1.jpeg"
                          alt="Pregnancy Massage"
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      <Stack spacing="md" p="lg" style={{ flex: 1 }}>
                        <Title order={3} color="yellow.7">
                          Pregnancy Massage
                        </Title>
                        <Text size="sm" color="dimmed">
                          Nurturing care throughout your pregnancy journey. Certified prenatal
                          massage offering gentle support for expecting mothers.
                        </Text>
                        <List
                          spacing="xs"
                          size="sm"
                          icon={
                            <ThemeIcon size="sm" color="yellow">
                              <IconUsers size="0.8rem" />
                            </ThemeIcon>
                          }
                        >
                          <List.Item>Pregnancy comfort</List.Item>
                          <List.Item>Swelling reduction</List.Item>
                          <List.Item>Stress relief</List.Item>
                          <List.Item>Better sleep</List.Item>
                        </List>
                        <Group grow mt="auto">
                          <Button
                            component={Link}
                            to="/service/pregnancy"
                            variant="light"
                            color="yellow"
                          >
                            Learn More
                          </Button>
                          <Button component={Link} to="/booking" color="yellow.7">
                            Book Now
                          </Button>
                        </Group>
                      </Stack>
                    </Box>
                  </Grid.Col>

                  {/* Right side - Packages */}
                  <Grid.Col sm={12} md={7}>
                    <Box className={classes.packagesBanner}>
                      <Stack className={classes.packagesContent} spacing="md" justify="center" style={{ height: "100%" }}>
                        <Group position="center" spacing="xs">
                          <ThemeIcon size="md" color="yellow" variant="filled" radius="xl">
                            <IconGift size={16} />
                          </ThemeIcon>
                          <Title order={4} align="center">
                            Care Packages - Save up to $186
                          </Title>
                        </Group>

                        <Stack spacing="xs">
                          <Box className={classes.packageCard}>
                            <Group position="apart">
                              <Box>
                                <Text weight={600} size="sm">
                                  Foundation Care
                                </Text>
                                <Text size="xs" color="dimmed">
                                  3 x 90-min sessions
                                </Text>
                              </Box>
                              <Box style={{ textAlign: "right" }}>
                                <Text weight={700} size="lg" color="yellow.7">
                                  $430
                                </Text>
                                <Text size="xs" color="green" weight={600}>
                                  Save $78
                                </Text>
                              </Box>
                            </Group>
                          </Box>

                          <Box className={classes.packageCard} style={{ position: "relative" }}>
                            <Badge
                              color="pink"
                              variant="filled"
                              size="xs"
                              style={{ position: "absolute", top: -6, right: -6 }}
                            >
                              Popular
                            </Badge>
                            <Group position="apart">
                              <Box>
                                <Text weight={600} size="sm">
                                  Pregnancy + Postnatal
                                </Text>
                                <Text size="xs" color="dimmed">
                                  3 pregnancy + 1 postnatal
                                </Text>
                              </Box>
                              <Box style={{ textAlign: "right" }}>
                                <Text weight={700} size="lg" color="yellow.7">
                                  $536
                                </Text>
                                <Text size="xs" color="green" weight={600}>
                                  Save $100
                                </Text>
                              </Box>
                            </Group>
                          </Box>

                          <Box className={classes.packageCard} style={{ position: "relative" }}>
                            <Badge
                              color="green"
                              variant="filled"
                              size="xs"
                              style={{ position: "absolute", top: -6, right: -6 }}
                            >
                              Best Value
                            </Badge>
                            <Group position="apart">
                              <Box>
                                <Text weight={600} size="sm">
                                  Complete Family Wellness
                                </Text>
                                <Text size="xs" color="dimmed">
                                  Full package + infant massage
                                </Text>
                              </Box>
                              <Box style={{ textAlign: "right" }}>
                                <Text weight={700} size="lg" color="yellow.7">
                                  $600
                                </Text>
                                <Text size="xs" color="green" weight={600}>
                                  Save $186
                                </Text>
                              </Box>
                            </Group>
                          </Box>
                        </Stack>

                        <Group position="center">
                          <Button
                            component={Link}
                            to="/service/pregnancy-packages"
                            color="yellow.6"
                            leftIcon={<IconStar size={16} />}
                          >
                            View Package Details
                          </Button>
                        </Group>
                      </Stack>
                    </Box>
                  </Grid.Col>
                </Grid>
              </Card>
            </Grid.Col>

            {/* Mind-Body Restorative Massage */}
            <Grid.Col md={6}>
              <Card
                shadow="md"
                padding="lg"
                radius="md"
                withBorder
                style={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                <Card.Section>
                  <Box style={{ height: 250, overflow: "hidden" }}>
                    <StaticImage
                      src="../../images/v2-photos/remedial-2.webp"
                      alt="Mind-Body Restorative Massage"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Card.Section>

                <Stack spacing="md" style={{ flex: 1 }} mt="md">
                  <Title order={3} color="violet">
                    Mind-Body Restorative Massage
                  </Title>
                  <Text size="sm" color="dimmed">
                    Integrated approach combining remedial massage with clinical hypnosis and
                    strategic psychotherapy.
                  </Text>

                  <List
                    spacing="xs"
                    size="sm"
                    icon={
                      <ThemeIcon size="sm" color="violet">
                        <IconCheck size="0.8rem" />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>Chronic pain and tension</List.Item>
                    <List.Item>Anxiety and stress reduction</List.Item>
                    <List.Item>Improved sleep quality</List.Item>
                    <List.Item>Mind-body reconnection</List.Item>
                  </List>

                  <Group grow mt="auto">
                    <Button component={Link} to="/service/mind-body" variant="light" color="violet">
                      Learn More
                    </Button>
                    <Button component={Link} to="/booking" color="violet">
                      Book Now
                    </Button>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>

            {/* Clinical Hypnosis */}
            <Grid.Col md={6}>
              <Card
                shadow="md"
                padding="lg"
                radius="md"
                withBorder
                style={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                <Card.Section>
                  <Box style={{ height: 250, overflow: "hidden" }}>
                    <StaticImage
                      src="../../images/v2-photos/body-mind-1.webp"
                      alt="Clinical Hypnosis"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Card.Section>

                <Stack spacing="md" style={{ flex: 1 }} mt="md">
                  <Title order={3} color="blue">
                    Clinical Hypnosis
                  </Title>
                  <Text size="sm" color="dimmed">
                    Therapeutic technique accessing your mind's natural healing power for holistic wellness.
                  </Text>

                  <List
                    spacing="xs"
                    size="sm"
                    icon={
                      <ThemeIcon size="sm" color="blue">
                        <IconCheck size="0.8rem" />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>Pain management</List.Item>
                    <List.Item>Fertility support</List.Item>
                    <List.Item>Anxiety relief</List.Item>
                    <List.Item>Sleep improvement</List.Item>
                  </List>

                  <Group grow mt="auto">
                    <Button component={Link} to="/service/clinical-hypnosis" variant="light" color="blue">
                      Learn More
                    </Button>
                    <Button component={Link} to="/booking" color="blue">
                      Book Now
                    </Button>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Box>

        {/* Service Comparison Table */}
        {/* <ColoredBox title="Service Comparison Guide">
          <Table striped highlightOnHover>
            <thead>
              <tr>
                <th>Service</th>
                <th>Duration</th>
                <th>Best For</th>
                <th>Key Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Remedial Massage</strong></td>
                <td>60-90 minutes</td>
                <td>Pain management, postural issues</td>
                <td>Pain relief, improved mobility, injury recovery</td>
              </tr>
              <tr>
                <td><strong>Fertility Massage</strong></td>
                <td>2 hours (initial), 90 min (follow-up)</td>
                <td>Reproductive health, fertility support</td>
                <td>Hormonal balance, stress reduction, fertility enhancement</td>
              </tr>
              <tr>
                <td><strong>Pregnancy Massage</strong></td>
                <td>60-75 minutes</td>
                <td>Expecting mothers, prenatal care</td>
                <td>Comfort, reduced swelling, better sleep</td>
              </tr>
            </tbody>
          </Table>
        </ColoredBox> */}

        {/* Why Choose iCare */}
        {/* <Box>
          <Title order={2} align="center" mb="xl">
            Why Choose iCare Health Massage?
          </Title>

          <Grid>
            <Grid.Col md={6}>
              <Stack spacing="md">
                <Box>
                  <Group spacing="sm" align="flex-start">
                    <ThemeIcon size="lg" color="blue">
                      <IconClock />
                    </ThemeIcon>
                    <Box>
                      <Title order={4}>13+ Years Experience</Title>
                      <Text size="sm" color="dimmed">
                        Extensive experience in remedial massage with specialized training in
                        fertility and pregnancy massage therapy.
                      </Text>
                    </Box>
                  </Group>
                </Box>

                <Box>
                  <Group spacing="sm" align="flex-start">
                    <ThemeIcon size="lg" color="teal">
                      <IconCheck />
                    </ThemeIcon>
                    <Box>
                      <Title order={4}>Professional Qualifications</Title>
                      <Text size="sm" color="dimmed">
                        Diploma of Remedial Massage, Certified Pregnancy Massage Practitioner,
                        Member of Massage & Myotherapy Association.
                      </Text>
                    </Box>
                  </Group>
                </Box>

                <Box>
                  <Group spacing="sm" align="flex-start">
                    <ThemeIcon size="lg" color="pink">
                      <IconHeart />
                    </ThemeIcon>
                    <Box>
                      <Title order={4}>Holistic Approach</Title>
                      <Text size="sm" color="dimmed">
                        Combining physical therapy with emotional support, incorporating
                        Reiki and Neurofascial release techniques.
                      </Text>
                    </Box>
                  </Group>
                </Box>
              </Stack>
            </Grid.Col>

            <Grid.Col md={6}>
              <Center style={{ height: '100%' }}>
                <StaticImage
                  src="../../images/portrait.jpg"
                  alt="Jenny YEH - Professional Massage Therapist"
                  style={{
                    maxWidth: "300px",
                    borderRadius: "16px"
                  }}
                />
              </Center>
            </Grid.Col>
          </Grid>
        </Box> */}

        {/* Client Testimonials */}
        {/* <Box>
          <Title order={2} align="center" mb="xl">
            What Our Clients Say
          </Title>
          <Carousel
            loop
            withIndicators
            controlSize={30}
            align="center"
            slideGap="md"
            slidesToScroll={1}
            styles={(theme) => ({
              indicator: {
                backgroundColor: theme.colors.gray[3],
                "&[data-active]": {
                  backgroundColor: theme.colors.blue[5],
                },
              },
            })}
          >
            {allTestimonies.map((testimony, index) => (
              <Carousel.Slide key={index}>
                <Testimony testimony={testimony} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Box> */}

        {/* Booking CTA */}
        {/* <ColoredBox title="Ready to Begin Your Wellness Journey?">
          <Text align="center" mb="md">
            Book your personalized consultation today and discover which treatment
            is right for you. Jenny will work with you to create a tailored plan
            that addresses your specific needs and wellness goals.
          </Text>
          <Group position="center" spacing="md">
            <Button size="lg" component={Link} to="/booking">
              Book Your Session
            </Button>
            <Button size="lg" variant="outline" component="a" href="tel:+61489080666">
              Call Now
            </Button>
          </Group>
        </ColoredBox> */}

        <CancelPolicy />
      </Stack>
    </Container>
  );
};

export default Service;
