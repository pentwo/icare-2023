// REACT IMPORTS

import { Stack, Container, Loader, Group, Alert, Anchor, Mark, createStyles } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { IconAlertCircle } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import BookingAlert from "./BookingAlert";

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "0 10px",
    paddingBottom: "40px",

    [theme.fn.smallerThan("sm")]: {
      padding: "0 5px",
      paddingBottom: "20px",
    },
  },

  stack: {
    width: "100%",
    maxWidth: "100%",
    gap: "10px",

    [theme.fn.smallerThan("sm")]: {
      gap: "5px",
    },
  },

  iframe: {
    display: "block", // iframes are inline by default
    border: "0px", // Reset default border
    height: "100vh", // Viewport-relative units
    width: "100%", // Use 100% instead of 100vw to fit container
    borderRadius: "8px",

    [theme.fn.smallerThan("sm")]: {
      borderRadius: "4px",
    },
  },
}));

// Extend Window interface for dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

interface Props {}
const Booking = (props: Props) => {
  const { classes } = useStyles();

  useEffect(() => {
    // Track when booking page loads
    if (typeof window.dataLayer !== "undefined") {
      window.dataLayer.push({
        event: "booking_page_loaded",
        event_category: "engagement",
        event_label: "booking_page",
      });
    }
  }, []);

  // Simple iframe load handler
  const handleIframeLoad = () => {
    if (typeof window.dataLayer !== "undefined") {
      window.dataLayer.push({
        event: "booking_widget_loaded",
        event_category: "engagement",
        event_label: "booking_widget",
      });
    }
  };

  return (
    <Container mt={60} className={classes.container}>
      <Stack className={classes.stack} align="center">
        <BookingAlert variant="fullwidth" />
        <iframe
          //   src="https://icare-health-massage.square.site/"
          src="https://l.yourpractice.pro/widget/service-menu/678ce44ba0cf0efb06612d27"
          scrolling="no"
          onLoad={handleIframeLoad}
          className={classes.iframe}
          title="Booking Widget"
        ></iframe>
      </Stack>
    </Container>
  );
};

export default Booking;
