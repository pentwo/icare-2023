import { Title, Text, Container, Stack, List, ThemeIcon, Group, Button, Grid } from "@mantine/core";
import React from "react";
import SEO from "../../components/general/Seo";
import { Layout } from "../../components/Layout/Layout";
import { IconFlower } from "@tabler/icons";
import ColoredBox from "../../components/ui/ColoredBox";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Pregnancy = () => {
  return (
    <Layout>
      <Container mt={60}>
        <SEO title={"Pregnancy Massage"} />
        <Stack spacing={"xl"}>
          <Title order={1} sx={{ fontSize: 42 }}>
            Pregnancy Massage - Nurturing Care for Your Journey
          </Title>

          <Text>
            As a certified Pregnancy Massage Practitioner with special training in prenatal care, I
            understand the unique physical and emotional changes that come with pregnancy. My
            specialized pregnancy massage service offers gentle, secure support throughout your
            pregnancy journey, helping you find comfort and relief during this transformative time.
          </Text>

          <Grid align="center">
            <Grid.Col sm={12} md={6}>
              <Stack spacing={"xs"}>
                <Title order={2}>Benefits of Pregnancy Massage</Title>
                <Text>
                  Regular pregnancy massage can provide numerous benefits for both mother and baby:
                </Text>
                <List
                  spacing="xs"
                  icon={
                    <ThemeIcon variant="light" size="md" color="yellow">
                      <IconFlower />
                    </ThemeIcon>
                  }
                >
                  <List.Item>Reduces back, neck, and joint pain common during pregnancy</List.Item>
                  <List.Item>Alleviates swelling in hands and feet (edema)</List.Item>
                  <List.Item>Improves sleep quality and reduces fatigue</List.Item>
                  <List.Item>Helps manage anxiety and stress</List.Item>
                  <List.Item>Eases muscle tension and cramping</List.Item>
                  <List.Item>Promotes better circulation</List.Item>
                  <List.Item>Provides emotional support and relaxation</List.Item>
                </List>
              </Stack>
            </Grid.Col>

            <Grid.Col md={12} lg={6} style={{ display: "flex", justifyContent: "center" }}>
              <StaticImage
                src="../../images/pregnancy-images/v2/pregnancy-1.jpeg"
                alt="Pregnancy Massage"
                height={480}
                style={{ borderRadius: "16px" }}
              />
            </Grid.Col>
          </Grid>

          <ColoredBox title="Safe, Specialized Care" color="yellow.1">
            <Text>
              Your safety and comfort are my top priorities. Each session is carefully tailored to
              your stage of pregnancy and specific needs:
            </Text>
            <List
              spacing="xs"
              icon={
                <ThemeIcon variant="light" size="md" color="yellow">
                  <IconFlower />
                </ThemeIcon>
              }
            >
              <List.Item>Positioning is adjusted for maximum comfort and safety</List.Item>
              <List.Item>Special pregnancy pillows and bolsters are used for support</List.Item>
              <List.Item>Gentle techniques appropriate for pregnancy are employed</List.Item>
              <List.Item>Regular comfort checks ensure a positive experience</List.Item>
              <List.Item>Techniques are modified as your pregnancy progresses</List.Item>
            </List>
          </ColoredBox>

          <Grid align="center">
            <Grid.Col sm={12} md={6}>
              <Stack spacing={"xl"}>
                <Title order={2}>When to Start Pregnancy Massage</Title>
                <Text>
                  Pregnancy massage can be beneficial from the very beginning of your pregnancy
                  journey. I welcome clients:
                </Text>
                <List
                  spacing="xs"
                  icon={
                    <ThemeIcon variant="light" size="md" color="yellow">
                      <IconFlower />
                    </ThemeIcon>
                  }
                >
                  <List.Item>From early pregnancy (as soon as you wish to start)</List.Item>
                  <List.Item>Throughout all trimesters of pregnancy</List.Item>
                  <List.Item>
                    More frequent sessions in the final weeks to help prepare for birth
                  </List.Item>
                  <List.Item>
                    Post-natal massage to support recovery and adjustment to motherhood
                  </List.Item>
                </List>

                <Title order={2}>What to Expect</Title>
                <Text>
                  Your first session begins with a comprehensive consultation to understand:
                </Text>
                <List
                  spacing="xs"
                  icon={
                    <ThemeIcon variant="light" size="md" color="yellow">
                      <IconFlower />
                    </ThemeIcon>
                  }
                >
                  <List.Item>Your stage of pregnancy</List.Item>
                  <List.Item>Any pregnancy-related conditions or concerns</List.Item>
                  <List.Item>Areas of discomfort or tension</List.Item>
                  <List.Item>Your preferences and comfort needs</List.Item>
                  <List.Item>Previous pregnancy or birth experiences</List.Item>
                </List>
              </Stack>
            </Grid.Col>
            <Grid.Col sm={12} md={6}>
              <StaticImage
                src="../../images/pregnancy-images/v2/pregnancy-3.jpeg"
                alt="Pregnancy Massage"
                // height={480}
                style={{ borderRadius: "16px" }}
              />
            </Grid.Col>
          </Grid>

          <ColoredBox title="Mind-Body Benefits" color="yellow.1">
            <Text>Beyond physical relief, pregnancy massage offers:</Text>
            <List
              spacing="xs"
              icon={
                <ThemeIcon variant="light" size="md" color="yellow">
                  <IconFlower />
                </ThemeIcon>
              }
            >
              <List.Item>A peaceful time to connect with your baby</List.Item>
              <List.Item>Reduced anxiety about pregnancy and birth</List.Item>
              <List.Item>Improved body awareness and relaxation</List.Item>
              <List.Item>Enhanced emotional wellbeing</List.Item>
              <List.Item>Better sleep patterns</List.Item>
            </List>
          </ColoredBox>

          <Grid align="center">
            <Grid.Col sm={12} md={6}>
              <StaticImage
                src="../../images/pregnancy-images/v2/pregnancy-6.jpg"
                alt="Pregnancy Massage"
                // height={480}
                style={{ borderRadius: "16px" }}
              />
            </Grid.Col>
            <Grid.Col sm={12} md={6}>
              <Stack spacing={"xs"}>
                <Title order={2}>Expertise You Can Trust</Title>
                <Text>
                  With specialized training in pregnancy massage and years of experience working
                  with expecting mothers, I understand the unique needs of pregnant bodies. My
                  qualifications include:
                </Text>
                <List
                  spacing="xs"
                  icon={
                    <ThemeIcon variant="light" size="md" color="yellow">
                      <IconFlower />
                    </ThemeIcon>
                  }
                >
                  <List.Item>Certified Pregnancy Massage Practitioner</List.Item>
                  <List.Item>Trained in Mind-Body Restorative Massage</List.Item>
                  <List.Item>Experience with high-risk pregnancies</List.Item>
                  <List.Item>Understanding of prenatal anatomy and physiology</List.Item>
                </List>
              </Stack>
            </Grid.Col>
          </Grid>

          <ColoredBox title="Booking Your Session" color="yellow.1">
            <Text>
              Ready to experience the nurturing benefits of pregnancy massage? Contact me to
              schedule your appointment. I'm happy to answer any questions you might have about the
              treatment and discuss how we can best support your pregnancy journey.
            </Text>
            <Text italic>
              Please note: While pregnancy massage is generally safe, it's always recommended to
              consult with your healthcare provider before beginning any new treatment during
              pregnancy.
            </Text>

            <Group position="center">
              <Button size="lg" component={Link} to="/booking" color="yellow.5">
                Book Now
              </Button>
            </Group>
          </ColoredBox>
        </Stack>
      </Container>
    </Layout>
  );
};

export default Pregnancy;
