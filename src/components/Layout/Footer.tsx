// REACT IMPORTS

import { Anchor, Footer, Group, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS

interface Props {}

const ICareFooter = (props: Props) => {
  const matches = useMediaQuery("(min-width: 480px)");

  return (
    <>
      {matches ? (
        <Footer height={120} p={8}>
          <Group position="center" align="center" noWrap={matches}>
            <StaticImage
              src={"../../images/company/hicaps-logo.jpg"}
              alt="iCare Logo"
              width={160}
            />

            <Stack align={"center"} spacing={4}>
              <Text size={14}>
                © 2018 - {new Date().getFullYear()}, Built with{" "}
                <Anchor href="https://www.gatsbyjs.org">Gatsby</Anchor>
              </Text>

              <Text size={10}>
                Made with ❤️ by <Anchor href="https://www.stevenpeng.com.au">Steven Peng</Anchor>
              </Text>
            </Stack>

            <StaticImage
              src={"../../images/company/massage-myotherapy-logo.png"}
              alt="iCare Logo"
              width={160}
            />
          </Group>
        </Footer>
      ) : (
        <Footer height={100} p={0}>
          <Stack align={"center"} spacing={0} p={0}>
            <Group p={0}>
              <StaticImage
                src={"../../images/company/hicaps-logo.jpg"}
                alt="iCare Logo"
                width={80}
              />
              <StaticImage
                src={"../../images/company/massage-myotherapy-logo.png"}
                alt="iCare Logo"
                width={80}
              />
            </Group>
            <Stack align={"center"} spacing={0}>
              <Text size={14}>
                © 2018 - {new Date().getFullYear()}, Built with{" "}
                <Anchor href="https://www.gatsbyjs.org">Gatsby</Anchor>
              </Text>

              <Text size={10}>
                Made with ❤️ by <Anchor href="https://www.stevenpeng.com.au">Steven Peng</Anchor>
              </Text>
            </Stack>{" "}
          </Stack>
        </Footer>
      )}
    </>
  );
};

export default ICareFooter;
