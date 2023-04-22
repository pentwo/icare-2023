// REACT IMPORTS

import { Stack, Container, Loader, Group } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import React, { useState } from "react";

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

  return (
    <Container mt={60}>
      <Stack>
        {/* <Group position="center">{isLoading && <Loader size={48} color="pink" />}</Group> */}
        <iframe
          //   src="https://squareup.com/appointments/book/2scr8j5ghv08kg/HGVQ3HMRPZ4E7/start"
          src="https://icare-remedial-massage.square.site/"
          //   width={width - 60}
          height={height - 320}
          //   frameBorder={0}
          scrolling="auto"
          //   onLoad={() => setIsLoading(true)}
          style={{
            border: "none",
          }}
        ></iframe>
      </Stack>
    </Container>
  );
};

export default Booking;
