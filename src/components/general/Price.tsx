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
                Professional massage therapy with competitive rates and health fund rebates
                available. Investment in your wellness with no hidden fees.
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
  hasInitialFollowup?: boolean;
}

interface PriceDetail {
  time: string;
  price: number;
  highlight?: boolean;
  category?: "initial" | "followup";
}

const PriceBlock = ({ title, price, description, bg, hasInitialFollowup }: PriceProps) => {
  const { classes } = useStyles();

  if (hasInitialFollowup) {
    // Create combined table with initial and follow-up columns
    // Group prices by their time value, maintaining exact matches
    const priceMap = new Map<string, { initial?: PriceDetail; followup?: PriceDetail }>();

    price.forEach((p) => {
      const key = p.time;
      const existing = priceMap.get(key) || {};

      if (p.category === "initial") {
        existing.initial = p;
      } else if (p.category === "followup") {
        existing.followup = p;
      } else {
        // If no category specified, try to determine from text
        if (p.time.toLowerCase().includes("initial")) {
          existing.initial = p;
        } else if (p.time.toLowerCase().includes("follow")) {
          existing.followup = p;
        }
      }

      priceMap.set(key, existing);
    });

    // Sort entries: Initial treatments first, then by duration
    const sortEntries = ([timeA, pricesA]: [string, any], [timeB, pricesB]: [string, any]) => {
      // Check if one is initial and the other is follow-up
      const isInitialA = timeA.toLowerCase().includes("initial");
      const isInitialB = timeB.toLowerCase().includes("initial");
      const isFollowupA = timeA.toLowerCase().includes("follow");
      const isFollowupB = timeB.toLowerCase().includes("follow");

      // Initial treatments come first
      if (isInitialA && !isInitialB) return -1;
      if (!isInitialA && isInitialB) return 1;

      // Follow-up treatments come after
      if (isFollowupA && !isFollowupB) return 1;
      if (!isFollowupA && isFollowupB) return -1;

      // For same category or regular times, sort by duration
      const getDurationMinutes = (time: string) => {
        const hoursMatch = time.match(/(\d+)\s*hour/);
        const minutesMatch = time.match(/(\d+)\s*min/);
        const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0;
        const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0;
        return hours * 60 + minutes;
      };

      return getDurationMinutes(timeA) - getDurationMinutes(timeB);
    };

    const combinedData = Array.from(priceMap.entries())
      .sort(sortEntries)
      .map(([time, prices]) => ({
        time,
        initialPrice: prices.initial?.price,
        followupPrice: prices.followup?.price,
        highlight: prices.initial?.highlight || prices.followup?.highlight,
      }))
      .filter((item) => item.initialPrice || item.followupPrice);

    return (
      <>
        <BackgroundImage src={bg.src} className={classes.bg}>
          <SimpleGrid
            cols={2}
            py={120}
            px={60}
            spacing={20}
            breakpoints={[{ maxWidth: 600, cols: 1, spacing: 20 }]}
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
                  <td>Duration</td>
                  <td align="center" width={"25%"}>
                    Initial Price
                  </td>
                  <td align="center" width={"25%"}>
                    Follow-up Price
                  </td>
                </tr>
              </thead>
              <tbody>
                {combinedData.map((row, index) => (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: row.highlight ? "pink" : "white",
                    }}
                  >
                    <td>
                      <Group>
                        {row.time}
                        {row.highlight && (
                          <>
                            <Space h="xs" />
                            <Badge color="red" size="xs">
                              Most Popular
                            </Badge>
                          </>
                        )}
                      </Group>
                    </td>
                    <td align="center" style={{ whiteSpace: "nowrap" }}>
                      {row.initialPrice ? `$ ${row.initialPrice}` : "-"}
                    </td>
                    <td align="center" style={{ whiteSpace: "nowrap" }}>
                      {row.followupPrice ? `$ ${row.followupPrice}` : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </SimpleGrid>
        </BackgroundImage>
      </>
    );
  }

  // Regular pricing table for non-initial/followup services
  return (
    <>
      <BackgroundImage src={bg.src} className={classes.bg}>
        <SimpleGrid
          cols={2}
          py={120}
          px={60}
          spacing={20}
          breakpoints={[{ maxWidth: 600, cols: 1, spacing: 20 }]}
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
    </>
  );
};
