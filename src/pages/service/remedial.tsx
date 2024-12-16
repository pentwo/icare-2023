import { Title, Text, Container, Stack, List, ThemeIcon, Group, Button } from "@mantine/core";
import React from "react";
import SEO from "../../components/general/Seo";
import { Layout } from "../../components/Layout/Layout";
import { IconCheck, IconFlower } from "@tabler/icons";
import ColoredBox from "../../components/ui/ColoredBox";
import { Link } from "gatsby";

const Remedial = () => {
  return (
    <Layout>
      <Container mt={60}>
        <SEO title={"Remedial Massage"} />
        <Stack>
          <Title order={1}>Remedial Massage - Professional Pain Management</Title>
          <Text>
            With 14 years of experience as a qualified Remedial Massage Therapist, I specialize in
            providing targeted treatment for those seeking effective pain management and postural
            improvement, with particular expertise in treating scoliosis.
          </Text>
          <Title order={2}>What is Remedial Massage?</Title>
          <Text>
            Remedial massage is a therapeutic treatment that goes beyond relaxation to address
            specific muscular pain and postural issues. Using advanced techniques and detailed
            anatomical knowledge, I work to identify the root cause of your discomfort and develop a
            personalized treatment plan to achieve lasting results.
          </Text>
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
          <Title order={2}>Treatment Approach</Title>
          <Text>
            Each session begins with a thorough assessment of your condition and pain points. I use
            a combination of deep tissue techniques, myofascial release, and craniosacral therapy to
            target specific areas of concern. Through this integrated approach, we work together to:
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