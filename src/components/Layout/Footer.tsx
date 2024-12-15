// REACT IMPORTS

import { Anchor, Footer, Group, Stack, Text } from "@mantine/core";
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
  return (
    <>
      <Footer height={150} p={10}>
        <Group position="center" align="center">
          <StaticImage src={"../../images/company/hicaps-logo.jpg"} alt="iCare Logo" width={160} />

          <Stack align={"center"}>
            <Text>
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
    </>
  );
};

export default ICareFooter;
