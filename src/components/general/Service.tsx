// REACT IMPORTS

import { Stack, Title, Text, Container, BackgroundImage } from "@mantine/core";
import React from "react";

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS

interface Props {}

const servicesInfo: ServiceProps[] = [
  {
    title: "What is Remedial/Sports Massage?",
    description:
      "Remedial/Sports Massages also known as injury treatment massage. Unlike relaxation massage, remedial massage is designed to deal with specific pain points or musculoskeletal discomfort. Remedial massage is including multiple techniques such        as Swedish, Deep tissue, Shiatsu, Myofascial release, Manual lymphatic drainage, etc.",
  },
  {
    title: "What is Fertility Massage Therapy? (Female Only)",
    description: `Fertility Massage Therapy is a deep, yet gentle, non invasive abdominal and sacral therapy that focus on improving circulation to the abdominal organs with an aim to improve blood, nerve and lymph flow. The massage also focus on releasing physical and emotional tension, helping to loosen debris (that has been accumulating in your gut for years) encouraging a natural movement and clearing both physical and emotional congestion, leaving you and your abdomen feeling lighter and freer. (Please note this service is female only)\n✨ Important Notice ✨\nPlease note that this treatment is complementary and should be used in conjunction with medical advice. Always follow your doctor's recommendations for your health journey. Whether you're seeking support for fertility, IVF, relief from physical discomfort, or a moment of peace, Jenny is here to guide you with care and expertise. 🌼`,
  },
  {
    title: "What is Pregnancy/Prenatal Massage??",
    description:
      "Pregnancy massage is the prenatal use of massage therapy to support the physiologic, structural and emotional well being of both the mother and the foetus.",
  },
];

const Service = (props: Props) => {
  return (
    <>
      <Stack>
        {servicesInfo.map((service, index) => (
          <ServiceBlock key={index} title={service.title} description={service.description} />
        ))}
      </Stack>
    </>
  );
};

export default Service;

interface ServiceProps {
  title: string;
  description: string;
}

const ServiceBlock = ({ title, description }: ServiceProps) => {
  return (
    <>
      <Container mt={60}>
        <Stack>
          <Title order={2}>{title}</Title>
          {description.split("\n").map((line, index) => (
            <Text key={index}>{line}</Text>
          ))}
        </Stack>
      </Container>
    </>
  );
};
