// REACT IMPORTS
import { Carousel } from "@mantine/carousel";
import { Anchor, Center, Container, List, Stack, Text, Title } from "@mantine/core";
import { IconCheck, IconChevronRight } from "@tabler/icons";
import { StaticImage } from "gatsby-plugin-image";
import React, { useRef } from "react";

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS
import Autoplay from "embla-carousel-autoplay";
// STYLE IMPORTS

interface Props {}

const Infant = (props: Props) => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Container mt={60}>
      <Stack>
        <Center>
          <Carousel
            mx="auto"
            withIndicators
            loop
            // slideSize="70%"
            slideGap="lg"
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            <Carousel.Slide>
              <StaticImage
                src={`../../images/infant/infant-01.jpg`}
                alt="infant massage"
                style={{
                  //   maxWidth: "50%",
                  borderRadius: "15px",
                }}
              />
            </Carousel.Slide>

            <Carousel.Slide>
              <StaticImage
                src={`../../images/infant/infant-02.jpg`}
                alt="infant massage"
                style={{
                  //   maxWidth: "50%",
                  borderRadius: "15px",
                }}
              />
            </Carousel.Slide>

            <Carousel.Slide>
              <StaticImage
                src={`../../images/infant/infant-03.jpg`}
                alt="infant massage"
                style={{
                  //   maxWidth: "50%",
                  borderRadius: "15px",
                }}
              />
            </Carousel.Slide>

            <Carousel.Slide>
              <StaticImage
                src={`../../images/infant/infant-04.jpg`}
                alt="infant massage"
                style={{
                  //   maxWidth: "50%",
                  borderRadius: "15px",
                }}
              />
            </Carousel.Slide>

            <Carousel.Slide>
              <StaticImage
                src={`../../images/infant/infant-05.jpg`}
                alt="infant massage"
                style={{
                  //   maxWidth: "50%",
                  borderRadius: "15px",
                }}
              />
            </Carousel.Slide>
          </Carousel>
        </Center>
        <Title order={2}>Infant Massage</Title>
        <Text>
          Infant massage is a wonderful way for parents to connect with their babies, improve their
          physical and emotional well-being, and create a deeper bond. Using a small amount of baby
          massage oil or lotion to your baby's skin, starting by gently stroking your baby's body,
          using long, flowing movements that follow the direction of their muscles. This form of
          touch therapy is known to relieve discomfort, encourage relaxation, and improve overall
          health. It can also be beneficial for common infant ailments such as colic, constipation,
          and respiratory issues(sinus congestion, chest congestion, etc.). Moreover, regular infant
          massage increases a baby's levels of serotonin and melatonin, those two hormones are
          responsible for promoting feelings of calm and happiness, leading to improved sleep,
          better overall mood and appetite, and a greater sense of security and attachment.
        </Text>
        <Text>
          If you are new to infant massage, we recommend attending an introduction workshop with a
          certified infant massage instructor. This can be a great way to learn proper techniques
          and get some hands-on experience. Follow up, you may choose to join our 4-sessions classes
          with one-on-one private tutor or semi-private group classes (2-5 babies max.). In this 4-
          secession course, we are going to talk about some specific topic of childcare such as
          asthma or sinus congestion, colic or constipation, etc. and how can infant massage help
          with those situations. Also, we will talk about how to do massage with elder child.
          Further more, we will introduce baby yoga to guide you how to exercise with your babies
          with a fun and safe activity.
        </Text>
        <List icon={<IconChevronRight />}>
          <List.Item>
            Book a Infant Massage Workshop (community group, childcare centre, parenting support
            group are more than welcomed)
          </List.Item>
          <List.Item>
            Book 4-secession Infant Massage Course Or For more information, please contact:{" "}
            <Anchor href="mailto:jeny2219@gmail.com">jeny2219@gmail.com</Anchor>
          </List.Item>
        </List>
        <Text>In the workshop, you will learn</Text>
        <List icon={<IconCheck />}>
          <List.Item>Human development in the Earlier childhood: 0-2 years old</List.Item>
          <List.Item>Why does baby need infant massage </List.Item>
          <List.Item>Why do parents need to learn infant massage </List.Item>
          <List.Item>How to choose a safe baby massage oil</List.Item>
          <List.Item>When is the best time to provide infant massage</List.Item>
          <List.Item>
            How to communicate with baby by understanding their language-crying and their body
            languages
          </List.Item>

          <Text my={10}>And the most importantly</Text>

          <List.Item>Practice Legs and feet Massage or Massage for Colic</List.Item>
        </List>
      </Stack>
    </Container>
  );
};

export default Infant;
