import {
  Title,
  Text,
  Container,
  Stack,
  List,
  ThemeIcon,
  Group,
  Button,
  Indicator,
  Grid,
} from "@mantine/core";
import React from "react";
import SEO from "../../components/general/Seo";
import { Layout } from "../../components/Layout/Layout";
import { IconCheck, IconFlower } from "@tabler/icons";
import ColoredBox from "../../components/ui/ColoredBox";
import { Link } from "gatsby";
import Testimony from "../../components/general/Testimony";
import { testimonies } from "../../Data/testimonies";
import { Carousel } from "@mantine/carousel";
import { StaticImage } from "gatsby-plugin-image";

const Remedial = () => {
  const remedialTestimonies = testimonies.filter((testimony) => testimony.service === "remedial");

  return (
    <Layout>
      <Container mt={60}>
        <SEO title={"Remedial Massage"} />
        <Stack spacing={"xl"}>
          <Title order={1}>Remedial Massage - Professional Pain Management</Title>
          <Text>
            With 14 years of experience as a qualified Remedial Massage Therapist, I specialize in
            providing targeted treatment for those seeking effective pain management and postural
            improvement, with particular expertise in treating scoliosis.
          </Text>

          <Grid align="center">
            <Grid.Col sm={12} md={9}>
              <Title order={2}>What is Remedial Massage?</Title>
              <Text>
                Remedial massage is a therapeutic treatment that goes beyond relaxation to address
                specific muscular pain and postural issues. Using advanced techniques and detailed
                anatomical knowledge, I work to identify the root cause of your discomfort and
                develop a personalized treatment plan to achieve lasting results.
              </Text>
            </Grid.Col>
            <Grid.Col sm={12} md={3}>
              <StaticImage
                src="../../images/v2-photos/remedial-3.webp"
                alt="Remedial Massage"
                height={240}
                style={{ borderRadius: "16px" }}
              />
            </Grid.Col>
          </Grid>

          <ColoredBox title="How Can Remedial Massage Help You?" color="green.1">
            <Text>This specialized treatment is particularly effective for:</Text>
            <List
              spacing="xs"
              icon={
                <ThemeIcon variant="light" size="md" color="green">
                  <IconFlower />
                </ThemeIcon>
              }
            >
              <List.Item>Managing chronic pain conditions</List.Item>
              <List.Item>Improving posture and spinal alignment</List.Item>
              <List.Item>Treating muscle tension and stiffness</List.Item>
              <List.Item>Addressing scoliosis-related discomfort</List.Item>
              <List.Item>Supporting injury recovery and rehabilitation</List.Item>
              <List.Item>Reducing stress-related muscular tension</List.Item>
            </List>
          </ColoredBox>

          <Grid align="center">
            <Grid.Col sm={12} md={6}>
              <StaticImage
                src="../../images/v2-photos/remedial-1.webp"
                alt="Remedial Massage"
                height={480}
                style={{ borderRadius: "16px" }}
              />
            </Grid.Col>
            <Grid.Col sm={12} md={6}>
              <Stack spacing={"xl"}>
                <Title order={2}>Treatment Approach</Title>
                <Text>
                  Each session begins with a thorough assessment of your condition and pain points.
                  I use a combination of deep tissue techniques, myofascial release, and
                  craniosacral therapy to target specific areas of concern. Through this integrated
                  approach, we work together to:
                </Text>
                <List
                  spacing="xs"
                  icon={
                    <ThemeIcon variant="light" size="md" color="green">
                      <IconFlower />
                    </ThemeIcon>
                  }
                >
                  <List.Item>Release muscle tension and adhesions</List.Item>
                  <List.Item>Improve joint mobility and flexibility</List.Item>
                  <List.Item>Enhance posture and body awareness</List.Item>
                  <List.Item>Reduce pain and discomfort</List.Item>
                  <List.Item>Support long-term musculoskeletal health</List.Item>
                </List>
                <Text>
                  Whether you're dealing with chronic pain, recovering from an injury, or seeking to
                  improve your posture, my goal is to provide effective, personalized treatment that
                  addresses your specific needs and supports your journey to better health.
                </Text>
              </Stack>
            </Grid.Col>
          </Grid>

          <Title order={2}>Testimonials</Title>
          <Carousel
            loop
            withIndicators
            controlSize={30}
            align="center"
            slideGap="md"
            styles={(theme) => ({
              indicator: {
                backgroundColor: theme.colors.green[1],
                "&[data-active]": {
                  backgroundColor: theme.colors.green[4],
                },
              },
            })}
          >
            {remedialTestimonies.map((testimony) => (
              <Carousel.Slide key={testimony.name}>
                <Testimony testimony={testimony} />
              </Carousel.Slide>
            ))}
          </Carousel>

          <Grid align="center">
            <Grid.Col sm={12} md={12}>
              <StaticImage
                src="../../images/v2-photos/remedial-2.webp"
                alt="Remedial Massage"
                // height={480}
                style={{ borderRadius: "16px" }}
              />
            </Grid.Col>
          </Grid>

          <ColoredBox title="Book Your Session" color="green.1">
            <Text>
              Ready to take the first step toward pain relief? Contact me to schedule your remedial
              massage session today.
            </Text>
            <Group position="center">
              <Button size="lg" component={Link} to="/booking" color="green.4">
                Book Now
              </Button>
            </Group>
          </ColoredBox>
        </Stack>
      </Container>
    </Layout>
  );
};

export default Remedial;
