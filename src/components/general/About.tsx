import React from "react";
import { Container, Text, Title, Stack, Grid, Box, Button, Group, Center } from "@mantine/core";
import { Link } from "gatsby";
import ColoredBox from "../ui/ColoredBox";

interface Props {}

const About = (props: Props) => {
  return (
    <Container>
      <Stack spacing="xl">
        {/* Hero Section */}
        <Box mt={60} mb={40}>
          <Center>
            <Stack align="center" spacing="md">
              <Title order={1} align="center" size="h1">
                🌿 About iCare Health Massage
              </Title>
              <Text align="center" size="lg" color="dimmed" maw={600}>
                Holistic healing through compassionate care, evidence-based practice, and 
                personalized treatment plans that honor your unique wellness journey.
              </Text>
              <Button size="lg" component={Link} to="/booking" mt="md">
                Start Your Journey
              </Button>
            </Stack>
          </Center>
        </Box>

        <Title order={2} align="center" mb="xl">
          Mission | Vision | Values
        </Title>

        <Stack spacing="xl">
          <ColoredBox title="Our Mission">
            <Text>
              At iCare Health Massage and Hypnosis, our mission is to provide holistic,
              compassionate, and evidence-informed care that supports both the body and mind.
              Through remedial massage, clinical hypnosis, and strategic psychotherapy, we aim to
              help each client relieve pain, reduce stress, and feel more connected to
              themselves—physically, emotionally, and energetically.
            </Text>
          </ColoredBox>

          <ColoredBox title="Our Vision">
            <Text>
              We envision a world where healing is not just about treating symptoms, but about
              empowering individuals to understand and care for their whole selves. At iCare, we
              strive to create a safe, supportive space where people feel seen, heard, and valued.
            </Text>
            <Text mt="sm">
              Our goal is to normalize integrated care, where mental health and physical health are
              treated with equal respect and attention.
            </Text>
          </ColoredBox>

          <ColoredBox title="Our Values">
            <Stack spacing="sm">
              <Box>
                <Text weight={600}>Compassion & Empathy</Text>
                <Text size="sm">
                  Every person's story matters. We listen without judgment and treat with care.
                </Text>
              </Box>

              <Box>
                <Text weight={600}>Holistic Healing</Text>
                <Text size="sm">
                  We see the connection between mind and body, and tailor our treatments
                  accordingly.
                </Text>
              </Box>

              <Box>
                <Text weight={600}>Professional Integrity</Text>
                <Text size="sm">
                  We are committed to ethical, respectful, and evidence-based practice.
                </Text>
              </Box>

              <Box>
                <Text weight={600}>Personalized Care</Text>
                <Text size="sm">
                  Every session is customized to meet your unique needs, goals, and comfort.
                </Text>
              </Box>

              <Box>
                <Text weight={600}>Lifelong Learning</Text>
                <Text size="sm">
                  We believe in continually growing our knowledge and skills to serve you better.
                </Text>
              </Box>
            </Stack>
          </ColoredBox>
        </Stack>

        {/* CTA Section */}
        <ColoredBox title="Ready to Begin Your Wellness Journey?">
          <Text align="center" mb="md">
            Experience our holistic approach to healing. Jenny will work with you to create a personalized 
            treatment plan that addresses your unique needs and wellness goals.
          </Text>
          <Group position="center" spacing="md">
            <Button size="lg" component={Link} to="/booking">
              Book Your Session
            </Button>
            <Button size="lg" variant="outline" component="a" href="tel:+61489080666">
              Call Now
            </Button>
          </Group>
        </ColoredBox>
      </Stack>
    </Container>
  );
};

export default About;
