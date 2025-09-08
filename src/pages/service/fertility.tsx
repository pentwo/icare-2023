import {
  Title,
  Text,
  Container,
  Stack,
  Group,
  SimpleGrid,
  Grid,
  Box,
  BackgroundImage,
  List,
  ThemeIcon,
  Mark,
  Button,
} from "@mantine/core";
import React from "react";
import SEO from "../../components/general/Seo";
import { Layout } from "../../components/Layout/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { IconCaretRight, IconFlower } from "@tabler/icons";
import ColoredBox from "../../components/ui/ColoredBox";
import { Link } from "gatsby";
import { testimonies } from "../../Data/testimonies";
import Testimony from "../../components/general/Testimony";
import { Carousel } from "@mantine/carousel";

const Fertility = () => {
  const fertilityTestimonies = testimonies.filter((testimony) => testimony.service === "fertility");

  return (
    <Layout>
      <Container mt={60}>
        <SEO
          title={"Fertility Massage"}
          description="Fertility Massage is a specialized therapeutic treatment that combines gentle massage techniques with emotional support to promote overall reproductive and mental wellness. Trained by Edwina Taylor in Perth, I offer this nurturing treatment to support various aspects of women's health and wellbeing."
        />
        <Stack spacing={"xl"}>
          <Title order={1}>Fertility Massage</Title>
          <Title order={4}>Formerly known as Mind-Body Restorative Massage</Title>
          <Title order={2}>A Holistic Approach to Wellness</Title>

          <Grid align="center">
            <Grid.Col sm={12} md={6}>
              <Stack spacing={"xl"}>
                <Text>
                  Fertility Massage is a specialized therapeutic treatment that combines gentle
                  massage techniques with emotional support to promote overall reproductive and
                  mental wellness. Trained by Edwina Taylor in Perth, I offer this nurturing
                  treatment to support various aspects of women's health and wellbeing.
                </Text>
                <Title order={2}>Who Can Benefit?</Title>
                <Text>This gentle yet effective treatment can help:</Text>
                <List
                  spacing="xs"
                  icon={
                    <ThemeIcon variant="light" size="md">
                      <IconFlower />
                    </ThemeIcon>
                  }
                >
                  <List.Item>Women preparing their bodies for conception</List.Item>
                  <List.Item>Those experiencing fertility challenges</List.Item>
                  <List.Item>Individuals with menstrual irregularities or period pain</List.Item>
                  <List.Item>People managing endometriosis symptoms</List.Item>
                  <List.Item>Anyone seeking relief from anxiety and stress</List.Item>
                  <List.Item>Those dealing with digestive issues</List.Item>
                  <List.Item>Individuals looking to restore hormonal balance</List.Item>
                  <List.Item>IVF support</List.Item>
                </List>
              </Stack>
            </Grid.Col>

            <Grid.Col md={12} lg={6} style={{ display: "flex", justifyContent: "center" }}>
              <StaticImage
                src="../../images/fertility-images/v2/fertility-4.jpeg"
                alt="Fertility Massage"
                height={560}
                style={{ borderRadius: "16px" }}
              />
            </Grid.Col>
          </Grid>

          <ColoredBox title="How It Works">
            <Text>Fertility Massage works through several gentle therapeutic approaches:</Text>
            <List
              spacing="xs"
              icon={
                <ThemeIcon variant="light" size="md">
                  <IconFlower />
                </ThemeIcon>
              }
            >
              <List.Item>Soft tissue manipulation to improve pelvic blood flow</List.Item>
              <List.Item>Abdominal massage techniques to enhance organ function</List.Item>
              <List.Item>Stress-reduction methods to support hormonal balance</List.Item>
              <List.Item>Lymphatic drainage to reduce inflammation</List.Item>
              <List.Item>Meditation and hypnosis to release emotional tension</List.Item>
            </List>
          </ColoredBox>

          <Grid align="center">
            <Grid.Col sm={12} md={6}>
              <Stack spacing={"xl"}>
                <Title order={2}>What to Expect During Your Session</Title>
                <Text>Your treatment journey begins with:</Text>
                <List
                  spacing="md"
                  icon={
                    <ThemeIcon variant="light" size="md">
                      <IconCaretRight />
                    </ThemeIcon>
                  }
                >
                  <List.Item>A detailed consultation to understand your specific needs</List.Item>
                  <List.Item>Discussion of your health history and wellness goals</List.Item>
                  <List.Item>A tailored treatment plan designed for your situation</List.Item>
                  <List.Item>Gentle, nurturing massage techniques</List.Item>
                  <List.Item>A safe space to process emotions and reduce stress</List.Item>
                </List>
              </Stack>
            </Grid.Col>
            <Grid.Col sm={12} md={6}>
              <StaticImage
                src="../../images/v2-photos/fertility-1.webp"
                alt="Fertility Massage"
                height={480}
                style={{ borderRadius: "16px" }}
              />
            </Grid.Col>
          </Grid>

          <Grid>
            <Grid.Col sm={12} md={6}>
              <ColoredBox title="Treatment Benefits">
                <Text>Regular sessions can help:</Text>
                <List
                  spacing="xs"
                  icon={
                    <ThemeIcon variant="light" size="md">
                      <IconFlower />
                    </ThemeIcon>
                  }
                >
                  <List.Item>Improve reproductive organ blood flow</List.Item>
                  <List.Item>Reduce menstrual pain and irregularities</List.Item>
                  <List.Item>Balance hormonal functions</List.Item>
                  <List.Item>Decrease stress and anxiety levels</List.Item>
                  <List.Item>Enhance digestive health</List.Item>
                  <List.Item>Release emotional tension</List.Item>
                  <List.Item>Promote overall wellbeing</List.Item>
                  <List.Item>Support natural fertility</List.Item>
                  <List.Item>Create mind-body connection</List.Item>
                </List>
              </ColoredBox>
            </Grid.Col>

            <Grid.Col sm={12} md={6}>
              <ColoredBox title="A Supportive Environment" color="white">
                <Text>
                  Understanding that fertility and reproductive health can be sensitive topics, I
                  provide:
                </Text>
                <List
                  spacing="xs"
                  icon={
                    <ThemeIcon variant="light" size="md">
                      <IconFlower />
                    </ThemeIcon>
                  }
                >
                  <List.Item>A confidential and compassionate setting</List.Item>
                  <List.Item>Emotional support throughout your journey</List.Item>
                  <List.Item>Regular communication about your progress</List.Item>
                  <List.Item>Adjustments to treatment as needed</List.Item>
                  <List.Item>Resources and self-care recommendations</List.Item>
                </List>
              </ColoredBox>
            </Grid.Col>
          </Grid>

          <Grid align="center">
            <Grid.Col sm={12} md={6}>
              <Stack spacing={"xl"}>
                <Title order={2}>Safety and Comfort</Title>
                <Text>
                  Each session is conducted with the utmost attention to your comfort and wellbeing:
                </Text>
                <List
                  spacing="xs"
                  icon={
                    <ThemeIcon variant="light" size="md">
                      <IconFlower />
                    </ThemeIcon>
                  }
                >
                  <List.Item>Gentle techniques suitable for all body types</List.Item>
                  <List.Item>Regular comfort checks throughout the session</List.Item>
                  <List.Item>Adjustable pressure and techniques</List.Item>
                  <List.Item>Clean, peaceful environment</List.Item>
                  <List.Item>Professional draping at all times</List.Item>
                </List>
              </Stack>
            </Grid.Col>
            <Grid.Col sm={12} md={6}>
              <StaticImage
                src="../../images/v2-photos/fertility-2.webp"
                alt="Fertility Massage"
                style={{ borderRadius: "16px" }}
              />
            </Grid.Col>
          </Grid>

          <Grid align="center">
            <Grid.Col
              sm={12}
              md={4}
              //   order={2}
              //   orderSm={2}
              //   orderMd={1}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <StaticImage
                src="../../images/v2-photos/fertility-3.webp"
                alt="Fertility Massage"
                height={500}
                style={{ borderRadius: "16px" }}
              />
            </Grid.Col>
            <Grid.Col
              sm={12}
              md={8}
              // orderSm={1}
              //   orderMd={2}
            >
              <Stack spacing={"xl"}>
                <Title order={2}>Your Journey to Wellness</Title>
                <Text>
                  Whether you're preparing for conception, managing reproductive health concerns, or
                  seeking relief from stress and anxiety, Fertility Massage offers a nurturing path
                  to wellness. This treatment acknowledges the deep connection between physical and
                  emotional health, providing support for your whole being.
                </Text>

                <ColoredBox title="Important Notice">
                  <Text>
                    Please note that this treatment is complementary and should be used in
                    conjunction with medical advice. Always follow your doctor's recommendations for
                    your health journey. Whether you're seeking support for fertility, IVF, relief
                    from physical discomfort, or a moment of peace, Jenny is here to guide you with
                    care and expertise.
                  </Text>
                </ColoredBox>
              </Stack>
            </Grid.Col>
          </Grid>

          <Grid align="center">
            <Grid.Col sm={12} md={6}>
              <Stack spacing={"xl"}>
                <Title order={2}>Booking Information</Title>
                <Title order={3}>Session Duration</Title>

                <List
                  spacing="xs"
                  icon={
                    <ThemeIcon variant="light" size="md">
                      <IconFlower />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    Initial Treatment: <Mark>2 hours</Mark> This allows time for a thorough
                    consultation and comprehensive first treatment
                  </List.Item>
                  <List.Item>
                    Follow-up Sessions: <Mark>90 minutes</Mark> Focused on continuing your
                    therapeutic journey
                  </List.Item>
                </List>

                <Stack spacing={0}>
                  <Title order={2}>Testimonials</Title>
                  <Carousel
                    loop
                    withIndicators
                    controlSize={30}
                    align="center"
                    slideGap="md"
                    styles={(theme) => ({
                      indicator: {
                        backgroundColor: theme.colors.pink[1],
                        "&[data-active]": {
                          backgroundColor: theme.colors.pink[4],
                        },
                      },
                    })}
                  >
                    {fertilityTestimonies.map((testimony) => (
                      <Carousel.Slide key={testimony.name}>
                        <Testimony testimony={testimony} />
                      </Carousel.Slide>
                    ))}
                  </Carousel>
                </Stack>
              </Stack>
            </Grid.Col>
            <Grid.Col sm={12} md={6} style={{ display: "flex", justifyContent: "center" }}>
              <StaticImage
                src="../../images/v2-photos/fertility-5.webp"
                alt="Fertility Massage"
                height={500}
                style={{ borderRadius: "16px" }}
              />
            </Grid.Col>
          </Grid>

          <ColoredBox title="Book Your FREE 30-Minute Consultation Call Today!">
            <Text>
              Take the first step toward your wellness goals with a complimentary consultation.
              During this call, we can discuss your needs, answer your questions, and determine the
              best treatment plan for you.
            </Text>
            <Text>
              Note: This treatment can be adapted for various health conditions. Please discuss any
              specific health concerns during your initial consultation to ensure the most
              appropriate treatment approach for your needs.
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

export default Fertility;
