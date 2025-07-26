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
} from "@mantine/core";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { IconCheck, IconClock, IconUsers, IconHeart } from "@tabler/icons";
import ColoredBox from "../ui/ColoredBox";
import { Carousel } from "@mantine/carousel";
import { testimonies } from "../../Data/testimonies";
import Testimony from "./Testimony";
import CancelPolicy from "./CancelPolicy";

interface Props {}

const Service = (props: Props) => {
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
            <Grid.Col md={4}>
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
            <Grid.Col md={4}>
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

            {/* Pregnancy Massage */}
            <Grid.Col md={4}>
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
                      src="../../images/pregnancy-images/v2/pregnancy-1.jpeg"
                      alt="Pregnancy Massage"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Card.Section>

                <Stack spacing="md" style={{ flex: 1 }} mt="md">
                  <Title order={3} color="yellow.7">
                    Pregnancy Massage
                  </Title>
                  <Text size="sm" color="dimmed">
                    Nurturing care throughout your pregnancy journey. Certified prenatal massage
                    offering gentle support for expecting mothers.
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
                    <Button component={Link} to="/service/pregnancy" variant="light" color="yellow">
                      Learn More
                    </Button>
                    <Button component={Link} to="/booking" color="yellow.7">
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
