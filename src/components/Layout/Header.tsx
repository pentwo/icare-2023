// REACT IMPORTS

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS
import {
  Header,
  Title,
  Container,
  Burger,
  SimpleGrid,
  Text,
  NavLink,
  Group,
  createStyles,
  Box,
  Menu,
  Anchor,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import {
  IconHome,
  IconPhone,
  IconHandStop,
  IconHeart,
  IconCurrencyDollar,
  IconChevronDown,
  IconArrowRight,
} from "@tabler/icons";
import { Link } from "gatsby";

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS

const useStyles = createStyles((theme) => ({
  inner: {
    height: 60,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  burgerLinks: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
    position: "absolute",
    top: 60,
    right: 0,
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
    borderRadius: 3,
    zIndex: 1,
    opacity: 0,
    transition: "opacity 300ms ease-in-out",
  },
  burgerLinksOpen: {
    opacity: 1,
  },

  link: {
    display: "flex",

    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    zIndex: 2,

    position: "relative",
    "&:after": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "0",
      height: "2px",
      backgroundColor: theme.colors.pink[6],
      transition: "width 300ms ease-in-out",
    },
    "&:hover": {
      backgroundColor: "transparent",
      "&:after": {
        width: "100%",
      },
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface Props {}

const links: {
  label: string;
  icon: React.ReactNode;
  link: string;
  links?: { label: string; link: string; icon?: React.ReactNode }[];
}[] = [
  { label: "Tel: 0431 192 844", icon: <IconPhone />, link: "tel:0431192844" },
  { label: "Home", icon: <IconHome />, link: "/" },
  { label: "About", icon: <IconHandStop />, link: "/about" },
  {
    label: "Service",
    icon: <IconHeart />,
    link: "/service",
    links: [
      { label: "Remedial/Sport Massage", link: "/service" },
      { label: "Fertility Massage", link: "/service" },
      { label: "Pregnancy Massage", link: "/service" },
      { label: "Infant Massage", link: "/infant" },
    ],
  },
  { label: "Price", icon: <IconCurrencyDollar />, link: "/price" },
];

const ICareHeader = (props: Props) => {
  //   const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <Header height={60} p={0}>
      <Container>
        <Group noWrap className={classes.inner}>
          <Anchor component={Link} to={"/"} underline={false}>
            <Title order={2}>iCare</Title>
          </Anchor>
          <Group noWrap className={classes.links}>
            {links.map((link, index) => {
              if (link.links) {
                return (
                  <Menu>
                    <Menu.Target>
                      <NavLink
                        noWrap
                        key={index}
                        label={link.label}
                        icon={link.icon}
                        variant={"filled"}
                        className={classes.link}
                      />
                    </Menu.Target>
                    <Menu.Dropdown>
                      {link.links.map((link, index) => (
                        <NavLink
                          key={index}
                          component={Link}
                          to={link.link}
                          label={link.label}
                          // icon={link.icon}
                        />
                      ))}
                    </Menu.Dropdown>
                  </Menu>
                );
              }

              return (
                <NavLink
                  noWrap
                  key={index}
                  component={Link}
                  to={link.link}
                  label={link.label}
                  icon={link.icon}
                  variant={"filled"}
                  className={classes.link}
                />
              );
            })}
          </Group>
          <Burger opened={opened} onClick={() => setOpened((o) => !o)} className={classes.burger} />
          {/* {opened && ( */}
          <Box className={cx(classes.burgerLinks, opened && classes.burgerLinksOpen)}>
            {links.map((link, index) => {
              const subLinks = link.links;
              if (subLinks) {
                return (
                  <>
                    <NavLink
                      key={index}
                      component={Link}
                      to={link.link}
                      label={link.label}
                      icon={link.icon}
                    />
                    {subLinks.map((sublink, index) => (
                      <NavLink
                        key={sublink.label}
                        component={Link}
                        to={sublink.link}
                        label={sublink.label}
                        icon={sublink.icon ?? <IconArrowRight />}
                        ml={20}
                      />
                    ))}
                  </>
                );
              }

              return (
                <NavLink
                  key={index}
                  component={Link}
                  to={link.link}
                  label={link.label}
                  icon={link.icon}
                />
              );
            })}
          </Box>
          {/* )} */}
        </Group>
      </Container>
    </Header>
  );
};

export default ICareHeader;
