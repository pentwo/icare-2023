// REACT IMPORTS

import { Anchor, Footer, Stack, Text } from "@mantine/core";
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
      <Footer height={130} p={10}>
        <Stack align={"center"}>
          <Text>
            © 2018 - {new Date().getFullYear()}, Built with{" "}
            <Anchor href="https://www.gatsbyjs.org">Gatsby</Anchor>
          </Text>
          <Stack align={"center"} spacing={5}>
            <Text size={10}>
              Source code licensed
              <Anchor href="http://opensource.org/licenses/mit-license.php"> MIT</Anchor>
            </Text>
            <Text size={10}>
              Made by <Anchor href="https://www.stevenpeng.com.au">Steven Peng</Anchor>
            </Text>
            <Text size={10}>
              <Anchor href="http://bulma.io">
                <StaticImage
                  src="../../images/made-with-bulma.png"
                  alt="Made with Bulma"
                  style={{
                    maxWidth: "128px",
                  }}
                />
              </Anchor>
            </Text>
            {/* <Text size={10}>
              Icons made by{" "}
              <Anchor
                href="https://www.flaticon.com/authors/vitaly-gorbachev"
                title="Vitaly Gorbachev"
              >
                Vitaly Gorbachev
              </Anchor>{" "}
              from{" "}
              <Anchor href="https://www.flaticon.com/" title="Flaticon">
                {" "}
                www.flaticon.com
              </Anchor>
            </Text> */}
          </Stack>
        </Stack>
      </Footer>
    </>
  );
};

export default ICareFooter;
