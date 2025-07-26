import React from "react";
import { Container, Text, Title, List, Stack, Center, Box, Grid, Button, Group } from "@mantine/core";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { IconChevronRight } from "@tabler/icons";
import ColoredBox from "../ui/ColoredBox";

interface Props {}

const OurTeam = (props: Props) => {
  return (
    <Container>
      <Stack spacing="xl">
        {/* Hero Section */}
        <Box mt={60} mb={40}>
          <Center>
            <Stack align="center" spacing="md">
              <Title order={1} align="center" size="h1">
                Meet Our Expert Team
              </Title>
              <Text align="center" size="lg" color="dimmed" maw={600}>
                Led by Jenny YEH, our experienced team brings 13+ years of expertise in 
                remedial massage, fertility therapy, and holistic healing to support your wellness journey.
              </Text>
              <Button size="lg" component={Link} to="/booking" mt="md">
                Book with Jenny
              </Button>
            </Stack>
          </Center>
        </Box>

        <Title order={2} align="center" mb="xl">
          Jenny YEH - Lead Therapist
        </Title>
        
        <Stack>
          <Grid align="center" p="xl">
            <Grid.Col sm={12} md={6}>
              <Center>
                <Box
                  sx={{
                    img: {
                      borderRadius: "50%",
                    },
                  }}
                >
                  <StaticImage
                    src="../../images/portrait.jpg"
                    alt="jenny Portrait"
                    style={{
                      maxWidth: "350px",
                    }}
                  />
                </Box>
              </Center>
              <Title order={2} align={"center"}>
                Jenny YEH
              </Title>
            </Grid.Col>
            <Grid.Col sm={12} md={6}>
              <Stack>
                <Text>
                  Meet Jenny, a talented and dedicated remedial massage therapist with a passion for
                  helping others.
                </Text>

                <Text>
                  Jenny is a 13-years-experienced massage therapist. Qualified Diploma of remedial
                  massage and practitioner of pregnancy massage. Jenny had completed the Bachelor of
                  Education and worked as a teacher in child cares and kindergarten in Taiwan. She
                  LOVE to work with children and families. Therefore, she chooses to do specialized
                  training in fertility massage, pregnancy massage, and infant massage. She also
                  incorporates Reiki and Neurofascial release techniques into her treatments.
                </Text>
              </Stack>
            </Grid.Col>
          </Grid>
          <Text>
            In addition to her work as a massage therapist, Jenny is also an active member of the
            community, volunteering as a Joey and Cub Scout Leader for the Karrinyup Leave No Trace
            Scout Group. When she's not working or volunteering, Jenny can often be found pursuing her
            love of dance, particularly ballet and belly dance. With her expertise and compassionate
            approach, Jenny is committed to helping her clients achieve their wellness goals and lead
            happier, healthier lives.
          </Text>

          <ColoredBox title="As part of Diploma of Remedial massage, I studied">
            <List icon={<IconChevronRight />}>
              <List.Item>Deep Tissue</List.Item>
              <List.Item>Swedish</List.Item>
              <List.Item>Trigger Point</List.Item>
              <List.Item>Japanese Shiatsu</List.Item>
              <List.Item>Sport Massage</List.Item>
              <List.Item>Myofascial Release</List.Item>
              <List.Item>Neurofascial Release</List.Item>
              <List.Item>Positional Release</List.Item>
              <List.Item>Postnatal Massage</List.Item>
              <List.Item>Reflexology</List.Item>
              <List.Item>Manual Lymphtic Drainage</List.Item>
            </List>
          </ColoredBox>

          <Text>Modalities I have learnt on top of my Remedial massage</Text>

          <List icon={<IconChevronRight />}>
            <List.Item>Pregnancy Massage</List.Item>
            <List.Item>Kinesiotaping</List.Item>
            <List.Item>Reiki</List.Item>
            <List.Item>Fertility Massage Therapy</List.Item>
            <List.Item>Infant Massage Instructor</List.Item>
          </List>
          <Title order={2} align={"center"}>
            Qualifications
          </Title>

          <List icon={<IconChevronRight />}>
            <List.Item>Diploma of Remedial Massage (HLT50307)</List.Item>
            <List.Item>Practitioner of Pregnancy Massage @ NurtureLife&reg;</List.Item>
            <List.Item>Member of Massage & Myotherapy Association</List.Item>
            <List.Item>Paediatric Massage Consultant</List.Item>
          </List>

          {/* CTA Section */}
          <ColoredBox title="Ready to Work with Jenny?">
            <Text align="center" mb="md">
              With 13+ years of experience and extensive qualifications, Jenny is ready to help you achieve 
              your wellness goals. Book your personalized consultation today.
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
      </Stack>
    </Container>
  );
};

export default OurTeam;