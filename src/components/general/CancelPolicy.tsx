// REACT IMPORTS

// NEXT IMPORTS

// COMPONENT IMPORTS

// MANTINE IMPORTS
import { Title, Text, Container, Stack, Anchor, Mark } from "@mantine/core";
import React from "react";

// NETWORK IMPORTS

// TYPE IMPORTS

// FUNCTION IMPORTS

// STYLE IMPORTS

interface Props {}

const CancelPolicy = (props: Props) => {
  return (
    <Container mt={30}>
      <Stack>
        <Title order={2} align={"center"}>
          Cancelation Policy
        </Title>
        <Text>
          Thank you for choosing our business. We understand that things can come up and you may
          need to reschedule or cancel your appointment. In order to better serve you, we kindly
          request that you give us a call at <Anchor href="tel:+61489080666">0489-080-666</Anchor>{" "}
          at least <Mark>24 hours in advance</Mark> if you need to change your appointment. If this
          is not possible, we ask that you please understand that a fee of{" "}
          <Mark>50% of the appointment cost may be incurred</Mark>. In the event that you miss your
          appointment without letting us know beforehand, a <Mark>full fee may be charged</Mark>. If
          you have an emergency that requires you to cancel your appointment, please don't hesitate
          to reach out to us and we will do our best to accommodate your situation. Thank you for
          your understanding and cooperation.
        </Text>
      </Stack>
    </Container>
  );
};

export default CancelPolicy;
