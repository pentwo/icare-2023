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
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isMobile = useMediaQuery("(min-width: 480px) and (max-width: 767px)");
  const isSmallPhone = !isDesktop && !isMobile; // < 480px

  if (isDesktop) {
    // Desktop view
    return (
      <Footer height={120} p={8}>
        <Group position="center" align="center" noWrap>
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
    );
  } else if (isMobile) {
    // Tablet/larger mobile view
    return (
      <Footer height={100} p={4}>
        <Stack align={"center"} spacing={2}>
          <Group spacing={8}>
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
            <Text size={12}>
              © 2018 - {new Date().getFullYear()}, Built with{" "}
              <Anchor href="https://www.gatsbyjs.org">Gatsby</Anchor>
            </Text>
            <Text size={9}>
              Made with ❤️ by <Anchor href="https://www.stevenpeng.com.au">Steven Peng</Anchor>
            </Text>
          </Stack>
        </Stack>
      </Footer>
    );
  } else {
    // Small phone view
    return (
      <Footer height={70} p={2}>
        <Stack align={"center"} spacing={1}>
          <Group spacing={4}>
            <StaticImage
              src={"../../images/company/hicaps-logo.jpg"}
              alt="iCare Logo"
              width={60}
            />
            <StaticImage
              src={"../../images/company/massage-myotherapy-logo.png"}
              alt="iCare Logo"
              width={60}
            />
          </Group>
          <Stack align={"center"} spacing={0}>
            <Text size={10}>
              © {new Date().getFullYear()} iCare Health
            </Text>
            <Text size={8}>
              By <Anchor href="https://www.stevenpeng.com.au">Steven Peng</Anchor>
            </Text>
          </Stack>
        </Stack>
      </Footer>
    );
  }
};

export default ICareFooter;
