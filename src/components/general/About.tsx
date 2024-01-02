// REACT IMPORTS

import React from "react";

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS
import { Container, Text, Title, List, Stack, Center, Box } from "@mantine/core";
import { graphql, StaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS
import { IconChevronRight } from "@tabler/icons";

interface Props {}

const About = (props: Props) => {
  return (
    <Container mt={60}>
      <Stack>
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

        <Text>
          Meet Jenny, a talented and dedicated remedial massage therapist with a passion for helping
          others.
        </Text>

        <Text>
          Jenny is a 13-years-experienced massage therapist. Qualified Diploma of remedial massage
          and practitioner of pregnancy massage. Jenny had completed the Bachelor of Education and
          worked as a teacher in child cares and kindergarten in Taiwan. She LOVE to work with
          children and families. Therefore, she chooses to do specialized training in fertility
          massage, pregnancy massage, and infant massage. She also incorporates Reiki and
          Neurofascial release techniques into her treatments.
        </Text>

        <Text>
          In addition to her work as a massage therapist, Jenny is also an active member of the
          community, volunteering as a Joey and Cub Scout Leader for the Karrinyup Leave No Trace
          Scout Group. When she's not working or volunteering, Jenny can often be found pursuing her
          love of dance, particularly ballet and belly dance. With her expertise and compassionate
          approach, Jenny is committed to helping her clients achieve their wellness goals and lead
          happier, healthier lives.
        </Text>

        <Text>As part of Diploma of Remedial massage, I studied</Text>

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
      </Stack>
    </Container>
  );
};

export default About;

// const ImageJennyPortrait = () => (
//     <StaticQuery
//       query={graphql`
//         query {
//           file(relativePath: { eq: "portrait.jpg" }) {
//             childImageSharp {
//               fixed(width: 520) {
//                 ...GatsbyImageSharpFixed
//               }
//             }
//           }
//         }
//       `}
//       render={(data) => (
//         <StaticImage
//           alt="jenny's Portrait"
//           imgStyle={{ borderRadius: '50%' }}
//           fixed={data.file.childImageSharp.fixed}
//         />
//       )}
//     />
//   )
