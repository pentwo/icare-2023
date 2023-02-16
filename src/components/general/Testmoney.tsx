// REACT IMPORTS

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS
import { Card, Text } from "@mantine/core";
import React from "react";

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS

interface Props {
  quotes: string;
  avatar: string;
}

const Testmoney = ({ quotes, avatar }: Props) => {
  return (
    <Card>
      <Text>{quotes}</Text>
    </Card>
  );
};

export default Testmoney;
