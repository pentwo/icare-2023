// REACT IMPORTS

import {
  Badge,
  Button,
  Container,
  createStyles,
  Group,
  Stack,
  Table,
  Title,
  Text,
  SimpleGrid,
  Box,
  BackgroundImage,
  Space,
  Center,
} from "@mantine/core";
import { IconPhone } from "@tabler/icons";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import BgImage from "./BgImage";
import Img from "gatsby-image";
import ColoredBox from "../ui/ColoredBox";

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS

const useStyles = createStyles((theme) => ({
  table: {
    // width: "500px",
  },
  thead: {},
  bg: {},
}));

interface Props {
  //   bgs: any[];
  prices: PriceProps[];
}

const priceInfo: PriceProps[] = [
  {
    title: "Remedial/Sports Massage",
    description: "*All Health Fund Rebate Are Available",
    price: [
      {
        time: "45 minutes",
        price: 100,
      },
      {
        time: "1 hour",
        price: 115,
      },
      {
        time: "1 hours 15 minutes",
        price: 125,
        highlight: true,
      },
      {
        time: "1 hours 30 minutes",
        price: 150,
      },
    ],
  },
  {
    title: "Fertility Massage Therapy",
    price: [
      {
        time: "Initial treatment (including consultation) 120 mins",
        price: 280,
      },
      {
        time: "Follow up treatment 90 mins",
        price: 200,
      },
    ],
  },
  {
    title: "Pregnancy/Prenatal Massage",
    price: [
      {
        time: "1 hour",
        price: 115,
      },
      {
        time: "1 hours 15 minutes",
        price: 125,
      },
      {
        time: "1 hours 30 minutes",
        price: 150,
        highlight: true,
      },
    ],
  },
];

const Price = ({ prices }: Props) => {
  const [backgrounds, setBackgrounds] = useState<any[]>([]);

  return (
    <Container>
      <Stack spacing="xl">
        {/* Hero Section */}
        <Box mt={60} mb={40}>
          <Center>
            <Stack align="center" spacing="md">
              <Title order={1} align="center" size="h1">
                Transparent Pricing for Quality Care
              </Title>
              <Text align="center" size="lg" color="dimmed" maw={600}>
                Professional massage therapy with competitive rates and health fund rebates available. 
                Investment in your wellness with no hidden fees.
              </Text>
              <Button size="lg" component={Link} to="/booking" mt="md">
                Book Your Session
              </Button>
            </Stack>
          </Center>
        </Box>

        {/* Price Blocks */}
        <Stack spacing={0}>
          {prices.map((price, index) => (
            <PriceBlock key={index} {...price} />
          ))}
        </Stack>

        {/* CTA Section */}
        <ColoredBox title="Ready to Book Your Session?">
          <Text align="center" mb="md">
            Choose the treatment that's right for you and experience the difference professional 
            massage therapy can make. Health fund rebates available for eligible services.
          </Text>
          <Group position="center" spacing="md">
            <Button size="lg" component={Link} to="/booking">
              Book Online
            </Button>
            <Button size="lg" variant="outline" component="a" href="tel:+61489080666">
              Call to Book
            </Button>
          </Group>
        </ColoredBox>
      </Stack>
    </Container>
  );
};

export default Price;

interface PriceProps {
  title: string;
  price: PriceDetail[];
  description?: string;
  bg?: any;
}

interface PriceDetail {
  time: string;
  price: number;
  highlight?: boolean;
}

const PriceBlock = ({ title, price, description, bg }: PriceProps) => {
  const { classes } = useStyles();
  return (
    <>
      {/* <BgImage fluid={bg} title="Remedial Massage" overlayColor="#eeeeee90"> */}
      <BackgroundImage src={bg.src} className={classes.bg}>
        {/* </BackgroundImage> */}
        {/* <Img fluid={bg} /> */}
        <SimpleGrid
          cols={2}
          py={120}
          px={60}
          spacing={20}
          breakpoints={[{ maxWidth: 600, cols: 1, spacing: 20 }]}
          sx={(theme) => ({
            // height: "300px",
            //   ...theme.fn.cover(),
          })}
        >
          <Stack>
            <Title order={2}>{title}</Title>
            <Text>{description}</Text>
            <Group>
              <Button leftIcon={<IconPhone />} component="a" href="tel:+61489080666">
                Call or Text for Booking
              </Button>
            </Group>
          </Stack>
          <Table striped highlightOnHover className={classes.table}>
            <thead className={classes.thead}>
              <tr>
                <td>Time</td>
                <td align="center" width={"20%"}>
                  Price
                </td>
              </tr>
            </thead>
            <tbody>
              {price.map((priceDetail, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: priceDetail.highlight ? "pink" : "white",
                  }}
                >
                  <td>
                    <Group>
                      {priceDetail.time}
                      <Space h="xs" />
                      {priceDetail.highlight && (
                        <Badge color="red" size="xs">
                          Most Popular
                        </Badge>
                      )}
                    </Group>
                  </td>
                  <td
                    align="center"
                    style={{
                      whiteSpace: "nowrap",
                    }}
                  >
                    $ {priceDetail.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </SimpleGrid>
      </BackgroundImage>
      {/* </BgImage> */}
    </>
  );
};
