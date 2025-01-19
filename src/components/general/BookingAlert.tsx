import { Alert, Anchor, Mark } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons";
import React from "react";

interface Props {
  variant: "fullwidth" | "short";
}
const BookingAlert = ({ variant }: Props) => {
  return (
    <Alert
      title="Notice before you make booking"
      color="red.2"
      variant="outline"
      icon={<IconAlertCircle />}
      sx={(theme) => ({
        color: theme.colors.red[9],
      })}
    >
      This Home Studio Booking is for <Mark color="red.2">Female ONLY</Mark>.{" "}
      {variant === "short" && <br />}
      Male patients please contact{" "}
      <Anchor href="tel:0893815565">Bodyworks Subiaco (08) 9381 5565</Anchor>
    </Alert>
  );
};

export default BookingAlert;
