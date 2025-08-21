import React from "react";
import { Layout } from "../../components/Layout/Layout";
import SEO from "../../components/general/Seo";
import { Container, Stack, Title, Text, List, ThemeIcon, Group, Button, Grid } from "@mantine/core";
import { IconFlower } from "@tabler/icons";
import ColoredBox from "../../components/ui/ColoredBox";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const MindBody: React.FC = () => {
  return (
    <Layout>
      <Container mt={60}>
        <SEO title={"Mind-Body Restorative Massage"} />
        <Stack spacing={"xl"}>
          <Title order={1}>Mind-Body Restorative Massage</Title>
          <Title order={3} color="dimmed">
            Healing Beyond the Physical: Where Touch Meets Mind
          </Title>

          <Text>
            Mind-Body Restorative Massage represents a revolutionary approach to wellness that
            recognises the profound connection between physical tension and mental wellbeing. This
            innovative treatment uniquely combines the therapeutic benefits of remedial massage with
            the transformative power of clinical hypnosis and strategic psychotherapy, creating a
            comprehensive healing experience that addresses both body and mind.
          </Text>

          <Title order={2}>A Holistic Approach to Chronic Conditions</Title>

          <Grid align="center">
            <Grid.Col md={6}>
              <Text>
                Living with chronic pain, persistent anxiety, or ongoing insomnia can feel
                overwhelming and isolating. Traditional treatments often focus on symptoms in
                isolation, but Mind-Body Restorative Massage takes a different approach. By
                integrating skilled massage techniques with evidence-based psychological
                interventions, this treatment recognises that lasting healing occurs when we address
                the whole person, not just individual symptoms.
              </Text>
              <Text>
                During your session, our qualified practitioners work simultaneously on multiple
                levels - releasing physical tension and muscle restrictions while guiding your mind
                toward relaxation, stress reduction, and positive mental patterns. This dual
                approach helps break the cycle where physical discomfort creates mental stress,
                which in turn amplifies physical symptoms.
              </Text>
            </Grid.Col>
            <Grid.Col md={6}>
              <StaticImage
                src="../../images/v2-photos/body-mind-2.webp"
                alt="Mind-Body Restorative Massage"
                height={480}
                style={{ borderRadius: "16px" }}
              />
            </Grid.Col>
          </Grid>

          <ColoredBox title="Who Can Benefit" color="violet.1">
            <Text>
              Mind-Body Restorative Massage is particularly beneficial for individuals experiencing:
            </Text>
            <List
              spacing="xs"
              icon={
                <ThemeIcon variant="light" size="md" color="violet">
                  <IconFlower />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text>
                  <strong>Chronic Pain Conditions</strong>: Fibromyalgia, arthritis, persistent back
                  pain, headaches, and muscular tension that traditional treatments haven't fully
                  resolved
                </Text>
              </List.Item>
              <List.Item>
                <Text>
                  <strong>Anxiety Disorders</strong>: Generalised anxiety, stress-related tension,
                  panic symptoms, and the physical manifestations of worry
                </Text>
              </List.Item>
              <List.Item>
                <Text>
                  <strong>Sleep Disorders</strong>: Insomnia, restless sleep patterns, and
                  difficulty achieving deep, restorative rest
                </Text>
              </List.Item>
              <List.Item>
                <Text>
                  <strong>Stress-Related Conditions</strong>: Work burnout, relationship stress, and
                  life transitions that manifest in both physical and emotional symptoms
                </Text>
              </List.Item>
              <List.Item>
                <Text>
                  <strong>Mind-Body Disconnection</strong>: Feeling "stuck" in patterns of tension,
                  difficulty relaxing, or challenges managing stress responses
                </Text>
              </List.Item>
            </List>
          </ColoredBox>

          <Grid align="center">
            <Grid.Col sm={12} md={12}>
              <Stack spacing={"xl"}>
                <Title order={2}>The Treatment Experience</Title>
                <Text>
                  Each Mind-Body Restorative Massage session is tailored to your individual needs
                  and comfort level. Your practitioner will begin with a comprehensive consultation
                  to understand your specific concerns, health history, and treatment goals. The
                  integrated approach means that as physical tension is released through skilled
                  massage techniques, guided hypnosis and strategic therapeutic conversations help
                  reframe thought patterns, reduce anxiety, and promote deep mental relaxation.
                </Text>
                <Text>
                  This isn't simply massage with relaxation music - it's a carefully orchestrated
                  therapeutic intervention where every aspect of the treatment is designed to
                  support your overall wellbeing and help you develop lasting tools for managing
                  stress and discomfort.
                </Text>
              </Stack>
            </Grid.Col>
          </Grid>

          <Title order={2}>Evidence-Based Integration</Title>
          <Text>
            Our Mind-Body Restorative Massage draws upon established therapeutic modalities,
            combining the proven benefits of remedial massage therapy with recognised psychological
            interventions. Clinical hypnosis has been extensively researched for pain management and
            anxiety reduction, while strategic psychotherapy offers practical tools for changing
            unhelpful thought patterns and behaviours.
          </Text>

          <StaticImage
            src="../../images/v2-photos/body-mind-1.webp"
            alt="Mind-Body Restorative Massage"
            height={480}
            style={{ borderRadius: "16px" }}
          />

          <Title order={2}>Your Journey to Wellness</Title>
          <Text>
            Healing is rarely linear, and sustainable change often requires addressing multiple
            aspects of your wellbeing simultaneously. Mind-Body Restorative Massage offers a
            supportive, professional environment where you can explore the connections between your
            physical sensations and mental state, developing greater awareness and control over
            both.
          </Text>

          <Text>
            Whether you're seeking relief from chronic conditions or simply want to enhance your
            overall sense of wellbeing, this integrated approach provides a unique opportunity to
            experience healing that honours the complexity of human experience and the remarkable
            capacity for recovery that exists within each of us.
          </Text>

          <ColoredBox title="Book Your Session" color="violet.1">
            <Text>
              Ready to experience Mind-Body Restorative Massage? Book a session today and begin your
              journey toward integrated physical and mental wellbeing.
            </Text>
            <Group position="center">
              <Button size="lg" component={Link} to="/booking" color="violet">
                Book Now
              </Button>
            </Group>
          </ColoredBox>
        </Stack>
      </Container>
    </Layout>
  );
};

export default MindBody;
