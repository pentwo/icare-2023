// REACT IMPORTS

import { Stack, Container, Loader, Group, Alert, Anchor, Mark } from "@mantine/core";
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

interface Props {}
const Booking = (props: Props) => {
  const { height, width } = useViewportSize();
  const [isLoading, setIsLoading] = useState(true);
  const [iframeHeight, setIframeHeight] = useState(600);

  useEffect(() => {
    const handleResize = () => {
      const newHeight = Math.max(window.innerHeight * 0.8, 600);
      setIframeHeight(newHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const timeoutId = setTimeout(handleResize, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Container mt={60} style={{ display: "flex", justifyContent: "center" }}>
      <Stack style={{ height: "100%" }} align="center">
        <BookingAlert variant="fullwidth" />
        <iframe
          //   src="https://icare-health-massage.square.site/"
          src="https://l.yourpractice.pro/widget/service-menu/678ce44ba0cf0efb06612d27"
          height={iframeHeight}
          scrolling="auto"
          style={{
            border: "none",
            width: "100%",
            // maxWidth: "768px",
            // minHeight: "600px",
          }}
        ></iframe>
      </Stack>
    </Container>
  );
};

export default Booking;
