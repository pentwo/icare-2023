import { MantineThemeOverride } from "@mantine/core";

export const iCareTheme: MantineThemeOverride = {
  // Defines color scheme for all components, defaults to "light"
  colorScheme: "light",

  // Controls focus ring styles:
  // auto – display focus ring only when user navigates with keyboard (default)
  // always – display focus ring when user navigates with keyboard and mouse
  // never – focus ring is always hidden (not recommended)
  focusRing: "auto",

  // Change focus ring styles
  // focusRingStyles: {
  //   styles(theme: MantineThemeBase): CSSObject;
  //   resetStyles(theme: MantineThemeBase): CSSObject;
  //   inputStyles(theme: MantineThemeBase): CSSObject;
  // };

  // Determines whether motion based animations should be disabled for
  // users who prefer to reduce motion in their OS settings
  // respectReducedMotion: boolean;

  // Determines whether elements that do not have pointer cursor by default
  // (checkboxes, radio, native select) should have it
  cursorType: "pointer",

  // Default border-radius used for most elements
  defaultRadius: "md",

  // White and black colors, defaults to '#fff' and '#000'
  white: "#eee",
  black: "#111",

  // Object of arrays with 10 colors
  colors: {
    pink: [
      "#FDFBFB",
      "#F6EAEA",
      "#F1D8D8",
      "#EEC5C5",
      "#E5B8B8",
      "#DBADAD",
      "#D1A3A3",
      "#C79B9B",
      "#BD9393",
      "#B38C8C",
    ],
  },

  // Key of theme.colors
  primaryColor: "pink",

  // Index of color from theme.colors that is considered primary, Shade type is 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  primaryShade: 3,

  // Default gradient used in components that support `variant="gradient"` (Button, ThemeIcon, etc.)
  // defaultGradient: { deg: number; from: MantineColor; to: MantineColor };

  // font-family and line-height used in most components
  fontFamily: "'Helvetica', 'Arial', sans-serif",
  // lineHeight: string | number;

  // Timing function used for animations, defaults to 'ease'
  // transitionTimingFunction: string;

  // Monospace font-family, used in Code, Kbd and Prism components
  // fontFamilyMonospace: string;

  // Sizes for corresponding properties
  // fontSizes: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;
  // radius: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;
  // spacing: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;

  // Values used for box-shadow
  // shadows: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>;

  // Breakpoints used in some components to add responsive styles
  // breakpoints: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;

  // Styles added to buttons with `:active` pseudo-class
  // activeStyles: CSSObject;

  // h1-h6 styles, used in Title and TypographyStylesProvider components
  headings: {
    fontFamily: "'Caveat', 'cursive'",
    fontWeight: 600,
    sizes: {
      //   See heading options below
      h1: { fontSize: "48px" },
      h2: { fontSize: "36px" },
      //   h3: {fontSize: "20px"},
      //   h4: Heading;
      //   h5: Heading;
      //   h6: Heading;
    },
  },

  // theme functions, see in theme functions guide
  // fn: MantineThemeFunctions;

  // Left to right or right to left direction, see RTL Support guide to learn more
  // dir: 'ltr' | 'rtl';

  // Default loader used in Loader and LoadingOverlay components
  loader: "oval",

  // Default date format used in DatePicker and DateRangePicker components
  // dateFormat: string;

  // Default dates formatting locale used in every @mantine/dates component
  // datesLocale: string;

  // defaultProps, styles and classNames for components
  // components: ComponentsOverride;

  components: {
    Button: {
      styles: {
        root: {
          color: "#111",
        },
      },
    },
  },

  // Global styles
  //   globalStyles: (theme) => ({
  //     "*, *::before, *::after": {
  //       boxSizing: "border-box",
  //     },
  //   }),

  // Add your own custom properties on Mantine theme
  // other: Record<string, any>;
};
