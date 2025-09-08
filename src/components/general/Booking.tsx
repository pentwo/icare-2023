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
    minHeight: "calc(100vh - 180px)",
    padding: "0 10px",
    
    [theme.fn.smallerThan('sm')]: {
      padding: "0 5px",
      minHeight: "calc(100vh - 160px)",
    },
  },
  
  stack: {
    width: "100%",
    maxWidth: "100%",
    gap: "10px",
    
    [theme.fn.smallerThan('sm')]: {
      gap: "5px",
    },
  },
  
  iframe: {
    border: "none",
    width: "100%",
    maxWidth: "100%",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    
    [theme.fn.smallerThan('sm')]: {
      borderRadius: "4px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
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
  const { height, width } = useViewportSize();
  const [isLoading, setIsLoading] = useState(true);
  const [iframeHeight, setIframeHeight] = useState(600);

  useEffect(() => {
    const handleResize = () => {
      // On mobile, account for header (60px), footer space (60px), and BookingAlert
      // Use a more conservative approach to avoid double scrollbars
      const isMobile = window.innerWidth <= 768;
      const headerHeight = 60;
      const footerSpace = 60;
      const alertSpace = 60; // approximate space for BookingAlert
      const reservedSpace = headerHeight + footerSpace + alertSpace;
      
      let newHeight;
      if (isMobile) {
        // On mobile, use full available height minus reserved space
        newHeight = Math.max(window.innerHeight - reservedSpace, 400);
      } else {
        // On desktop, use 80% of viewport height
        newHeight = Math.max(window.innerHeight * 0.8, 600);
      }
      
      setIframeHeight(newHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const timeoutId = setTimeout(handleResize, 100);

    // Track when booking page loads
    if (typeof window.dataLayer !== "undefined") {
      window.dataLayer.push({
        event: "booking_page_loaded",
        event_category: "engagement",
        event_label: "booking_page",
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Track iframe interactions
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
    <Container 
      mt={60} 
      className={classes.container}
    >
      <Stack 
        className={classes.stack}
        align="center"
      >
        <BookingAlert variant="fullwidth" />
        <iframe
          //   src="https://icare-health-massage.square.site/"
          src="https://l.yourpractice.pro/widget/service-menu/678ce44ba0cf0efb06612d27"
          height={iframeHeight}
          scrolling="auto"
          onLoad={handleIframeLoad}
          className={classes.iframe}
        ></iframe>
      </Stack>
    </Container>
  );
};

export default Booking;
