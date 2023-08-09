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
          If you are new to infant massage, we recommend attending an Introductory Workshop with a
          certified Paediatric Massage Consultant.
        </Text>
        <Text>
          The workshop will last 45 - 60 minutes, during which we will cover the following topics:
        </Text>
        <List icon={<IconChevronRight />}>
          <List.Item>Early Childhood Development</List.Item>
          <List.Item>Benefits of infant massage</List.Item>
          <List.Item>Selecting a safe baby massage oil</List.Item>
          <List.Item>Ideal times for infant massage</List.Item>
          <List.Item>Hands on practice for some simple techniques of baby massage</List.Item>
        </List>
        <Text>
          This workshop is available for a group booking or private bookings. Fathers and
          grandparents are more than welcome to attend. In addition to the course, you will take
          home the following:
        </Text>
        <List icon={<IconChevronRight />}>
          <List.Item>An Organic Baby Massage Oil</List.Item>
          <List.Item>Parent Manual Book</List.Item>
          <List.Item>A certificate for your family members</List.Item>
        </List>
        <Text>
          Please note that the introduction workshop will not cover full-body massage techniques. If
          you wish to learn more, I recommend joining my 4-session Infant Massage Course. 4-Session
          Infant Massage Course. Each session will last 45 - 60minutes, below is a breakdown of what
          will be covered in each session.
        </Text>

        <Title order={3}>Session 1</Title>
        <List icon={<IconChevronRight />}>
          <List.Item>Education Topic: Baby’s daily schedule and Parents’ self-care </List.Item>
          <List.Item>
            Techniques taught: Legs, Bottock and Abdomen massage. Massage for colic, constipation,
            wind, reflux, etc.{" "}
          </List.Item>
        </List>

        <Title order={3}>Session 2</Title>
        <List icon={<IconChevronRight />}>
          <List.Item>Education Topic: Baby’s language and body language </List.Item>
          <List.Item>
            Techniques taught: Chest, Arms, Face and Head massage. Craniosacral Therapy for baby{" "}
          </List.Item>
        </List>

        <Title order={3}>Session 3</Title>
        <List icon={<IconChevronRight />}>
          <List.Item>Education Topic: Solid food</List.Item>
          <List.Item>Techniques taught: Back. Infant First Aid </List.Item>
        </List>

        <Title order={3}>Session 4</Title>
        <List icon={<IconChevronRight />}>
          <List.Item>Education Topic: Early Childhood Development </List.Item>
          <List.Item>
            Techniques Taught: massage for 9 - 12 months old. Exercise Games for Baby
          </List.Item>
        </List>

        <Text>
          If you would prefer to attend the introductory course only, the parent manual book
          provided includes all the information covered in the course for self-learning, as well as
          contact details for our team should you need assistance in the future.
        </Text>
        <Text>
          If you wish to attend the 4-Session Course, group booking and Private one-on-one bookings
          are available. If you have any further question, please do not hesitate to reach out to
          our team at{" "}
          <Anchor href="mailto:info@bodyworkssubiaco.com">info@bodyworkssubiaco.com</Anchor> or give
          us a call on <Anchor href="tel:+61893815565">08-9381-5565</Anchor>.
        </Text>
      </Stack>
    </Container>
  );
};

export default Infant;
