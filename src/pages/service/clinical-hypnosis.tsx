import React from "react";
import { Layout } from "../../components/Layout/Layout";
import SEO from "../../components/general/Seo";
import {
  Container,
  Stack,
  Title,
  Text,
  List,
  ThemeIcon,
  Group,
  Button,
  Grid,
  Box,
} from "@mantine/core";
import { IconBrain, IconHeart, IconSun, IconMoon } from "@tabler/icons";
import ColoredBox from "../../components/ui/ColoredBox";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const ClinicalHypnosis: React.FC = () => {
  return (
    <Layout>
      <Container mt={60}>
        <SEO title={"Clinical Hypnosis"} />
        <Stack spacing={"xl"}>
          <Title order={1}>Clinical Hypnosis</Title>
          <Title order={3} color="dimmed">
            Harnessing Your Mind's Natural Healing Power
          </Title>

          <Grid align="center">
            <Grid.Col md={8}>
              <Stack spacing={"xl"}>
                <Text>
                  Clinical hypnosis is a therapeutic technique that guides you into a deeply
                  relaxed, focused state where positive changes can occur more easily. Unlike stage
                  hypnosis, clinical hypnosis is a collaborative process where you remain fully
                  aware and in control while accessing your mind's natural ability to promote
                  healing and positive change.
                </Text>

                <Text>
                  This approach has been extensively researched and proven effective for a wide
                  range of conditions, working particularly well when integrated with other
                  therapeutic interventions - which is why it pairs so beautifully with remedial
                  massage therapy.
                </Text>
                <Title order={2}>My Areas of Specialization</Title>

                <Text>
                  Through my years of massage therapy practice, I've developed particular expertise
                  and passion for helping people with conditions that often have both physical and
                  psychological components. My integrated approach addresses the whole person,
                  recognizing that lasting healing occurs when we work with both body and mind
                  together.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col md={4}>
              <StaticImage
                src="../../images/v2-photos/clinical-hypnosis-1.webp"
                alt="Jenny Yeh's portrait"
                // height={540}
                style={{ borderRadius: "16px" }}
              />
            </Grid.Col>
          </Grid>

          <ColoredBox title="What I Specialize In" color="blue.1">
            <List
              spacing="md"
              icon={
                <ThemeIcon variant="light" size="md" color="blue">
                  <IconBrain />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text>
                  <strong>Pain Management</strong>: Addressing both the physical sensation of pain
                  and the mental patterns that can amplify discomfort, helping you develop better
                  pain coping strategies and potentially reduce pain intensity.
                </Text>
              </List.Item>
              <List.Item>
                <Text>
                  <strong>Fertility Support</strong>: Supporting your emotional wellbeing during the
                  fertility journey while helping reduce stress and anxiety that can impact
                  conception and reproductive health.
                </Text>
              </List.Item>
              <List.Item>
                <Text>
                  <strong>Anxiety Relief</strong>: Teaching your nervous system new patterns of calm
                  and developing practical tools for managing worry, panic, and stress responses.
                </Text>
              </List.Item>
              <List.Item>
                <Text>
                  <strong>Insomnia & Sleep Issues</strong>: Addressing the racing thoughts, physical
                  tension, and stress patterns that interfere with restorative sleep, helping you
                  develop healthy sleep rhythms.
                </Text>
              </List.Item>
            </List>
          </ColoredBox>

          <Title order={2}>How Clinical Hypnosis Works</Title>

          <Grid align="center">
            <Grid.Col sm={12}>
              <Text>
                During a clinical hypnosis session, I guide you into a state of focused relaxation
                where your conscious mind becomes quieter and your subconscious mind becomes more
                receptive to positive suggestions and new patterns of thinking. This isn't about
                losing control - quite the opposite. It's about gaining greater access to your inner
                resources and natural healing abilities.
              </Text>

              <Text>
                You'll remain aware and in control throughout the entire process, able to accept or
                reject any suggestions. Many people describe the experience as similar to being
                deeply absorbed in a good book or movie - present and aware, but in an altered state
                of focused attention.
              </Text>
            </Grid.Col>
          </Grid>

          <ColoredBox title="What to Expect" color="blue.1">
            <Stack spacing="md">
              <Group spacing="sm" align="flex-start">
                <ThemeIcon size="lg" color="blue" variant="light">
                  <IconHeart />
                </ThemeIcon>
                <Box style={{ flex: 1 }}>
                  <Title order={4}>Collaborative Partnership</Title>
                  <Text size="sm" color="dimmed">
                    Clinical hypnosis is a collaborative process. We work together to identify your
                    goals and develop personalized approaches that feel right for you.
                  </Text>
                </Box>
              </Group>

              <Group spacing="sm" align="flex-start">
                <ThemeIcon size="lg" color="blue" variant="light">
                  <IconSun />
                </ThemeIcon>
                <Box style={{ flex: 1 }}>
                  <Title order={4}>Always In Control</Title>
                  <Text size="sm" color="dimmed">
                    You remain fully aware and in control at all times. You can't be made to do
                    anything against your will or values.
                  </Text>
                </Box>
              </Group>

              <Group spacing="sm" align="flex-start">
                <ThemeIcon size="lg" color="blue" variant="light">
                  <IconMoon />
                </ThemeIcon>
                <Box style={{ flex: 1 }}>
                  <Title order={4}>Deeply Relaxing</Title>
                  <Text size="sm" color="dimmed">
                    Most people find the experience deeply relaxing and restorative, often
                    describing it as the most relaxed they've felt in years.
                  </Text>
                </Box>
              </Group>
            </Stack>
          </ColoredBox>

          <StaticImage
            src="../../images/v2-photos/clinical-hypnosis-2.webp"
            alt="Relaxation and healing environment"
            height={480}
            style={{ borderRadius: "16px" }}
          />

          {/* <Title order={2}>Integration with Massage Therapy</Title>
          <Text>
            One of the unique aspects of my practice is how beautifully clinical hypnosis integrates with
            massage therapy. While your body receives the physical benefits of therapeutic touch, your mind
            can simultaneously work on releasing mental tension, changing pain perception, or developing
            new coping strategies. This dual approach often leads to more profound and lasting results than
            either therapy alone.
          </Text> */}

          <Title order={2}>Your Journey Starts Here</Title>
          <Text>
            If you're curious about how clinical hypnosis might support your wellbeing goals. I
            invite you to start with a complimentary 30-minute consultation. During this call, we'll
            discuss your specific concerns, explore how hypnosis might help, and determine if this
            approach feels right for you.
          </Text>

          <ColoredBox title="Start Your Healing Journey" color="blue.1">
            <Text>
              Ready to explore the powerful combination of clinical hypnosis? Book your
              complimentary consultation today and discover how this integrated approach can support
              your path to wellness.
            </Text>
            <Group position="center" spacing="md">
              <Button size="lg" component={Link} to="/booking" color="blue">
                Book Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                component="a"
                href="tel:+61489080666"
                color="blue"
              >
                Call to Discuss
              </Button>
            </Group>
          </ColoredBox>
        </Stack>
      </Container>
    </Layout>
  );
};

export default ClinicalHypnosis;
