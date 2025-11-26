import {
  Title,
  Text,
  Container,
  Stack,
  List,
  ThemeIcon,
  Group,
  Button,
  Grid,
  Card,
  Badge,
  Box,
  createStyles,
} from "@mantine/core";
import React from "react";
import SEO from "../../components/general/Seo";
import { Layout } from "../../components/Layout/Layout";
import { IconFlower, IconCheck, IconHeart, IconBabyCarriage } from "@tabler/icons";
import ColoredBox from "../../components/ui/ColoredBox";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const useStyles = createStyles((theme) => ({
  packageCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: theme.shadows.md,
    },
  },
  priceText: {
    fontSize: 28,
    fontWeight: 700,
    color: theme.colors.yellow[7],
  },
  savingsText: {
    color: theme.colors.green[6],
    fontWeight: 600,
  },
  cardContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  idealFor: {
    marginTop: "auto",
    paddingTop: theme.spacing.md,
  },
}));

interface PackageCardProps {
  title: string;
  subtitle: string;
  price: string;
  savings: string;
  included: string[];
  benefits?: { title: string; items: string[] };
  idealFor: string[];
  badge?: string;
  badgeColor?: string;
}

const PackageCard = ({
  title,
  subtitle,
  price,
  savings,
  included,
  benefits,
  idealFor,
  badge,
  badgeColor = "yellow",
}: PackageCardProps) => {
  const { classes } = useStyles();

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder className={classes.packageCard}>
      <Stack spacing="md" className={classes.cardContent}>
        {badge && (
          <Badge color={badgeColor} variant="filled" size="lg">
            {badge}
          </Badge>
        )}
        <Title order={3}>{title}</Title>
        <Text size="sm" color="dimmed">
          {subtitle}
        </Text>

        <Box>
          <Text className={classes.priceText}>{price}</Text>
          <Text className={classes.savingsText}>{savings}</Text>
        </Box>

        <Box>
          <Text weight={600} mb="xs">
            What's included:
          </Text>
          <List
            spacing="xs"
            size="sm"
            icon={
              <ThemeIcon variant="light" size="sm" color="green">
                <IconCheck size={14} />
              </ThemeIcon>
            }
          >
            {included.map((item, index) => (
              <List.Item key={index}>{item}</List.Item>
            ))}
          </List>
        </Box>

        {benefits && (
          <Box>
            <Text weight={600} mb="xs">
              {benefits.title}
            </Text>
            <List
              spacing="xs"
              size="sm"
              icon={
                <ThemeIcon variant="light" size="sm" color="pink">
                  <IconHeart size={14} />
                </ThemeIcon>
              }
            >
              {benefits.items.map((item, index) => (
                <List.Item key={index}>{item}</List.Item>
              ))}
            </List>
          </Box>
        )}

        <Box className={classes.idealFor}>
          <Text weight={600} mb="xs">
            Ideal for:
          </Text>
          <List
            spacing="xs"
            size="sm"
            icon={
              <ThemeIcon variant="light" size="sm" color="yellow">
                <IconFlower size={14} />
              </ThemeIcon>
            }
          >
            {idealFor.map((item, index) => (
              <List.Item key={index}>{item}</List.Item>
            ))}
          </List>
        </Box>

        <Button component={Link} to="/booking" color="yellow.5" fullWidth mt="md">
          Book This Package
        </Button>
      </Stack>
    </Card>
  );
};

const PregnancyPackages = () => {
  const packages: PackageCardProps[] = [
    {
      title: "PLAN A: Foundation Care",
      subtitle: "3 x 90-Minute Pregnancy Massage Sessions",
      price: "$430",
      savings: "Save $78",
      included: [
        "Three extended 90-minute pregnancy massage sessions",
        "Full body relaxation and targeted work on problem areas",
        "Gentle stretching and mobilization techniques",
        "Comfortable side-lying positioning with supportive cushions",
        "Self-care advice for managing discomfort between sessions",
      ],
      idealFor: [
        "Mums experiencing significant back, hip, or pelvic discomfort",
        "Those who benefit from longer, more thorough sessions",
        "Second and third trimester when physical challenges intensify",
        "Anyone wanting dedicated time for deep relaxation",
      ],
    },
    {
      title: "PLAN B: Pregnancy Through Postnatal",
      subtitle: "3 Pregnancy Massage + 1 Postnatal Fertility Massage",
      price: "$536",
      savings: "Save $100",
      badge: "Most Popular",
      badgeColor: "pink",
      included: [
        "Three pregnancy massage sessions during your pregnancy",
        "One specialized postnatal fertility massage after birth",
        "Continuity of care from pregnancy through early recovery",
        "Support for your body's transition into the postnatal period",
      ],
      benefits: {
        title: "The postnatal session helps:",
        items: [
          "Address post-birth muscle tension and alignment",
          "Support pelvic floor recovery",
          "Ease the physical transition after delivery",
          "May support those planning future pregnancies",
        ],
      },
      idealFor: [
        "Mums wanting comprehensive care through pregnancy and beyond",
        "Those planning to conceive again in the future",
        "Anyone recognizing the importance of postnatal recovery",
        "First-time mothers navigating the postpartum period",
      ],
    },
    {
      title: "PLAN C: Complete Family Wellness",
      subtitle: "3 Pregnancy Massage + 1 Postnatal Fertility Massage + Infant Massage Introduction",
      price: "$600",
      savings: "Save $186",
      badge: "Best Value",
      badgeColor: "green",
      included: [
        "Everything in Plan B, PLUS:",
        "Infant massage introduction session",
        "Learn gentle techniques to use with your baby",
        "Practical skills for daily bonding and comfort",
        "Written materials and demonstration",
      ],
      benefits: {
        title: "Infant massage may help:",
        items: [
          "Support bonding and attachment with your baby",
          "Soothe fussiness and colic discomfort",
          "Promote better sleep patterns",
          "Support your baby's development",
          "Create calming bedtime routines",
        ],
      },
      idealFor: [
        "Parents wanting comprehensive family wellness support",
        "Those interested in learning infant massage techniques",
        "Mums seeking tools to support their baby's comfort",
        "Families valuing the importance of nurturing touch",
      ],
    },
  ];

  return (
    <Layout>
      <Container mt={60}>
        <SEO title="Pregnancy Care Packages" />
        <Stack spacing="xl">
          <Title order={1} sx={{ fontSize: 42 }}>
            Pregnancy Care Packages
          </Title>

          <ColoredBox title="Nurturing Care for Every Stage of Pregnancy" color="yellow.1">
            <Text>
              Pregnancy is a beautiful journey of transformation, but it often comes with physical
              challenges. Back pain, hip discomfort, swelling, muscle tension, and sleep
              difficulties are common as your body adapts to support your growing baby.
            </Text>
            <Text>
              Our specialized Pregnancy Care Packages provide consistent, gentle support throughout
              your pregnancy and into the postnatal period – helping you feel more comfortable as
              you prepare to welcome your little one.
            </Text>
          </ColoredBox>

          <Title order={2} align="center" mt="xl">
            Choose Your Package
          </Title>

          <Grid gutter="lg">
            {packages.map((pkg, index) => (
              <Grid.Col key={index} sm={12} md={4}>
                <PackageCard {...pkg} />
              </Grid.Col>
            ))}
          </Grid>

          <ColoredBox title="Questions About Our Packages?" color="yellow.1">
            <Text>
              Not sure which package is right for you? I'm happy to discuss your specific needs and
              help you choose the best option for your pregnancy journey. Each package can be
              customized to address your unique concerns and comfort needs.
            </Text>
            <Text italic>
              Please note: While pregnancy massage is generally safe, it's always recommended to
              consult with your healthcare provider before beginning any new treatment during
              pregnancy.
            </Text>
            <Group position="center" mt="md">
              <Button size="lg" component={Link} to="/booking" color="yellow.5">
                Book a Consultation
              </Button>
              <Button
                size="lg"
                component={Link}
                to="/service/pregnancy"
                variant="outline"
                color="yellow.7"
              >
                Learn More About Pregnancy Massage
              </Button>
            </Group>
          </ColoredBox>
        </Stack>
      </Container>
    </Layout>
  );
};

export default PregnancyPackages;
