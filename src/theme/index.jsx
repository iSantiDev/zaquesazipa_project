import { createTheme } from "@mui/material/styles";
import * as typography from "./typography.jsx";

const colors = {
    text: {
        50: "#faf2eb",
        100: "#f4e5d7",
        200: "#eacaae",
        300: "#dfb086",
        400: "#d4955e",
        500: "#c97b36",
        600: "#a1622b",
        700: "#794a20",
        800: "#513115",
        900: "#28190b",
        950: "#140c05",
    },
    background: {
        50: "#f7f1ed",
        100: "#f0e3db",
        200: "#e1c8b7",
        300: "#d2ac93",
        400: "#c3916f",
        500: "#b4754b",
        600: "#905e3c",
        700: "#6c462d",
        800: "#482f1e",
        900: "#24170f",
        950: "#120c08",
    },
    primary: {
        50: "#fcf1e8",
        100: "#fae3d1",
        200: "#f5c8a3",
        300: "#f0ac75",
        400: "#eb9147",
        500: "#e67519",
        600: "#b85e14",
        700: "#8a460f",
        800: "#5c2f0a",
        900: "#2e1705",
        950: "#170c03",
    },
    secondary: {
        50: "#fdefe8",
        100: "#fbded0",
        200: "#f7bea1",
        300: "#f39d72",
        400: "#ef7c43",
        500: "#eb5c14",
        600: "#bc4910",
        700: "#8d370c",
        800: "#5e2508",
        900: "#2f1204",
        950: "#170902",
    },
    accent: {
        50: "#fcf1e8",
        100: "#fae3d1",
        200: "#f5c7a3",
        300: "#f0aa75",
        400: "#eb8e47",
        500: "#e67219",
        600: "#b85b14",
        700: "#8a440f",
        800: "#5c2e0a",
        900: "#2e1705",
        950: "#170b03",
    },
};

const darkPalette = {
    mode: "dark",
    primary: {
        main: colors.primary[400], // Lighter shade for dark mode
        light: colors.primary[200],
        dark: colors.primary[600],
        contrastText: colors.text[50],
    },
    secondary: {
        main: colors.secondary[400], // Lighter shade for dark mode
        light: colors.secondary[200],
        dark: colors.secondary[600],
        contrastText: colors.text[50],
    },
    accent: {
        main: colors.accent[400],
        light: colors.accent[200],
        dark: colors.accent[600],
        contrastText: colors.text[50],
    },
    error: {
        main: "#f44336",
    },
    warning: {
        main: colors.secondary[300], // Lighter for dark mode
    },
    info: {
        main: colors.primary[300],
    },
    success: {
        main: "#4caf50",
    },
    // DARK MODE BACKGROUNDS
    background: {
        default: colors.background[950], // Very dark background
        paper: colors.background[900], // Slightly lighter for cards/papers
    },
    // DARK MODE TEXT
    text: {
        primary: colors.text[100], // Light text on dark background
        secondary: colors.text[300], // Medium light for secondary text
        disabled: colors.text[500], // Darker for disabled text
    },
    // DARK MODE DIVIDERS AND BORDERS
    divider: colors.text[700], // Subtle divider color
    action: {
        hover: "rgba(255, 255, 255, 0.04)",
        selected: "rgba(255, 255, 255, 0.08)",
        disabled: "rgba(255, 255, 255, 0.26)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
    },
};

const theme = createTheme({
    palette: darkPalette,
    typography: typography,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: colors.background[950],
                    color: colors.text[100],
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: colors.background[900],
                    color: colors.text[100],
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: colors.background[900],
                    backgroundImage: "none", // Remove MUI's default gradient
                },
            },
        },
    },
});

export default theme;
