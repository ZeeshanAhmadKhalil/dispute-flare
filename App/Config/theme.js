import { createTheme } from "@mui/material";

let theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            xmd: 800,
            md: 900,
            lg: 1250,
            xl: 1400,
        }
    },
    typography: {
        fontFamily: 'Segoe UI Emoji'
    },
    palette: {
        mode: 'dark',
        active: {
            main: "#29D652"
        },
        inactive: {
            main: "#EBA51C"
        },
        lead: {
            main: "#00428E"
        },
        cancelled: {
            main: "#D33C41"
        },
        icon: {
            active: "#000",
            inactive: "#707070",
            lightActive: "#ACADAF",
        },
        checkbox: {
            checked: "#37D667",
            unchecked: "#A4A7AB",
            checkBg: "#d2edf7",
        },
        primary: {
            main: '#B2E323',
            contrastText: "#fff",
            hovered: "#7C9E18"
        },
        secondary: {
            main: '#00428E',
            contrastText: "#fff",
            hovered: "#002E63",
        },
        warning: {
            main: '#EBA51C',
            contrastText: "#fff",
            hovered: "#A47313",
        },
        pink: {
            main: '#D14CC3',
            contrastText: "#fff",
            hovered: '#b229a2',
        },
        lightPink: {
            main: '#A182D6',
            contrastText: "#fff",
            hovered: '#8d6ac9',
        },
        text: {
            main: '#fff',
            contrastText: "#000",
            hovered: '#fff1',
            grey: "#5F6163",
        },
        transWhite: {
            main: "#ffffff4c",
        },
        borders: {
            main: "#9EB6D3",
        },
        tableHeader: {
            main: "#F5F8FA"
        },
        tableSeparator: {
            main: "#D1D6DC"
        },
        tableBody: {
            main: "#ffffffcc"
        },
        dialog: {
            main: "#fff",
        }
    },
});

export default theme