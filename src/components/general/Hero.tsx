// REACT IMPORTS

import React, { useState } from "react";

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS
import {
  Box,
  Center,
  Text,
  BackgroundImage,
  Title,
  Stack,
  Button,
  Group,
  Alert,
  Anchor,
  Mark,
  Popover,
} from "@mantine/core";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { IconAlertCircle } from "@tabler/icons";
import BookingAlert from "./BookingAlert";

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS

interface Props {}

const Hero = (props: Props) => {
  const [alertOpen, setAlertOpen] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        height: "70vh",
        position: "relative",
      }}
      m={0}
    >
      {/* <BackgroundImage
        src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        sx={{
          height: "100%",
        }}
      > */}
      <StaticImage
        src="../../images/hero.jpg"
        alt={""}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <Box
        sx={(theme) => ({
          ...theme.fn.cover(),
          backgroundImage: theme.fn.gradient({ from: "pink.3", to: "pink.8", deg: 90 }),
          opacity: 0.6,
        })}
      ></Box>
      <Box
        sx={(theme) => ({
          ...theme.fn.cover(),
        })}
      >
        <Center
          p="md"
          sx={(theme) => ({
            ...theme.fn.cover(),
            marginLeft: "-10rem",
            [theme.fn.smallerThan("sm")]: {
              marginLeft: 0,
            },
          })}
        >
          <Stack>
            <Title order={1}>iCare Health Massage</Title>
            <Text>The best time to take care of yourself</Text>
            <Group>
              <Stack>
                <Popover opened={alertOpen}>
                  <Popover.Target>
                    <Button
                      component={Link}
                      to={"/booking"}
                      size="lg"
                      onMouseOver={() => setAlertOpen(true)}
                      onMouseLeave={() => setAlertOpen(false)}
                    >
                      Book Now
                    </Button>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <BookingAlert variant="short" />
                  </Popover.Dropdown>
                </Popover>
                <Button component={Link} to={"/voucher"} size="lg">
                  Buy Voucher
                </Button>
              </Stack>
            </Group>
          </Stack>
        </Center>
      </Box>
      {/* </BackgroundImage> */}
    </Box>
  );
};

export default Hero;
