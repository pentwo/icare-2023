import React, { useState } from "react";
import { useHotkeys } from "@mantine/hooks";
import { MantineProvider, ColorSchemeProvider, ColorScheme, AppShell, Space } from "@mantine/core";
import { iCareTheme } from "../styles/iCareTheme";
import Header from "./Header";

import "../../styles/index.css";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={iCareTheme}>
      <AppShell
        padding={0}
        // navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
        header={<Header />}
        footer={<Footer />}
        styles={(theme) => ({
          paddingBottom: 20,
          main: {
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        })}
      >
        {children}
        <Space h={60} />
      </AppShell>
    </MantineProvider>
  );
}
