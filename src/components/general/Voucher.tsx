import { Stack } from "@mantine/core";
import { Container } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import React, { useEffect, useState } from "react";

export default function Voucher() {
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
    <Container mt={60}>
      <Stack style={{ height: "100%" }}>
        <iframe
          src="https://giftup.app/place-order/78de4eb9-a9b2-4edb-38fd-08dd210f130d?platform=hosted&language=en-AU"
          height={iframeHeight}
          scrolling="auto"
          style={{
            border: "none",
            width: "100%",
            minHeight: "600px",
          }}
        ></iframe>
      </Stack>
    </Container>
  );
}
