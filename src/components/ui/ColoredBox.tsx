import { Box, Stack, Title, Text } from "@mantine/core";
import React from "react";

interface ColoredBoxProps {
  title: string;
  children: React.ReactNode;
  color?: string;
}

export default function ColoredBox({ title, children, color = "pink.2" }: ColoredBoxProps) {
  const colorName = color.split(".")[0];
  const colorShade = color.split(".")[1];

  return (
    <Box
      p={24}
      sx={(theme) => ({
        backgroundColor: theme.colors[colorName][colorShade],
        borderRadius: "16px",
      })}
    >
      <Stack>
        <Title order={2}>{title}</Title>
        {children}
      </Stack>
    </Box>
  );
}
