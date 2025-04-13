// REACT IMPORTS

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS
import { Avatar, Blockquote, Card, Text } from "@mantine/core";
import React from "react";
import { Testimony as TestimonyType } from "../../Data/testimonies";
import { Carousel } from "@mantine/carousel";

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS

interface Props {
  testimony: TestimonyType;
}

const Testimony = ({ testimony }: Props) => {
  const { name, quote, avatar, service } = testimony;

  const getColor = () => {
    if (service === "remedial") return "green.4";
    if (service === "pregnancy") return "yellow.5";
    if (service === "fertility") return "pink.5";
  };

  return (
    <Blockquote color={getColor()} cite={name} mt="xl">
      {quote}
    </Blockquote>
  );
};

export default Testimony;
