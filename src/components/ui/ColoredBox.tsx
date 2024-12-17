import { Box, Stack, Title, Text, useMantineTheme } from "@mantine/core";
import React from "react";

interface ColoredBoxProps {
  title: string;
  children: React.ReactNode;
  color?: string;
}

export default function ColoredBox({ title, children, color = "pink.2" }: ColoredBoxProps) {
  const theme = useMantineTheme();

  const colorName = color.split(".")[0];
  const colorShade = color.split(".")[1] || 2;

  const bgColor = colorName === "white" ? "white" : theme.colors[colorName][colorShade];

  return (
    <Box
      p={24}
      sx={(theme) => ({
        backgroundColor: bgColor,
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
