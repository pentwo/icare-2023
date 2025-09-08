import React from "react";
import { Container, Text, Title, Stack, Grid, Card, Button, Group, Box } from "@mantine/core";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

interface Props {}

const Services = (props: Props) => {
  return (
    <Container mt={80} mb={80}>
      <Stack spacing="xl">
        <Title order={1} align="center" mb="xl">
          Our Services
        </Title>

        <Text align="center" size="lg" color="dimmed" mb="xl">
          Discover our range of specialized massage therapies designed to support your health and
          wellbeing
        </Text>

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
                <Title order={3}>Remedial Massage</Title>
                <Text size="sm" color="dimmed" style={{ flex: 1 }}>
                  Professional pain management with 14 years of experience. Specializing in
                  therapeutic treatment for pain relief and postural improvement, with particular
                  expertise in treating scoliosis.
                </Text>

                <Group position="center" mt="auto">
                  <Button
                    component={Link}
                    to="/service/remedial"
                    variant="light"
                    color="green"
                    fullWidth
                  >
                    Learn More
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
                <Title order={3}>Fertility Massage</Title>
                <Text size="sm" color="dimmed" style={{ flex: 1 }}>
                  Specialized therapeutic treatment combining gentle massage with emotional support
                  to promote reproductive and mental wellness. Formerly known as Mind-Body
                  Restorative Massage.
                </Text>

                <Group position="center" mt="auto">
                  <Button
                    component={Link}
                    to="/service/fertility"
                    variant="light"
                    color="pink"
                    fullWidth
                  >
                    Learn More
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
                <Title order={3}>Pregnancy Massage</Title>
                <Text size="sm" color="dimmed" style={{ flex: 1 }}>
                  Nurturing care throughout your pregnancy journey. Certified prenatal massage
                  offering gentle, secure support for expecting mothers at every stage of pregnancy.
                </Text>

                <Group position="center" mt="auto">
                  <Button
                    component={Link}
                    to="/service/pregnancy"
                    variant="light"
                    color="yellow"
                    fullWidth
                  >
                    Learn More
                  </Button>
                </Group>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>

        {/* Additional Services */}
        <Grid>
          {/* Mind-Body Restorative Massage */}
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
                    src="../../images/v2-photos/body-mind-3.webp"
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
                <Title order={3}>Mind-Body Restorative Massage</Title>
                <Text size="sm" color="dimmed" style={{ flex: 1 }}>
                  Integrated care combining remedial massage with clinical hypnosis and strategic
                  psychotherapy to support both body and mind.
                </Text>

                <Group position="center" mt="auto">
                  <Button
                    component={Link}
                    to="/service/mind-body"
                    variant="light"
                    color="violet"
                    fullWidth
                  >
                    Learn More
                  </Button>
                </Group>
              </Stack>
            </Card>
          </Grid.Col>

          {/* Clinical Hypnosis */}
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
                <Title order={3}>Clinical Hypnosis</Title>
                <Text size="sm" color="dimmed" style={{ flex: 1 }}>
                  Therapeutic technique accessing your mind's natural healing power for pain
                  management, fertility support, anxiety relief, and sleep improvement.
                </Text>

                <Group position="center" mt="auto">
                  <Button
                    component={Link}
                    to="/service/clinical-hypnosis"
                    variant="light"
                    color="blue"
                    fullWidth
                  >
                    Learn More
                  </Button>
                </Group>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>

        <Group position="center" mt="xl">
          <Button size="lg" component={Link} to="/booking">
            Book Your Session
          </Button>
        </Group>
      </Stack>
    </Container>
  );
};

export default Services;
