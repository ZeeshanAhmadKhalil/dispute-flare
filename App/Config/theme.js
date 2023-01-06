import { createTheme } from "@mui/material";

const themeObj = {
    breakpoints: {
        values: {
            xs: 0,
            xs1: 250,
            sm: 600,
            sm1: 650,
            xmd: 800,
            md: 900,
            md1: 1065,
            lg: 1250,
            xl: 1300,
            xl1: 1400,
        }
    },
    typography: {
        fontFamily: 'Segoe UI Emoji'
    },
    palette: {
        mode: 'dark',
        shadow: {
            main: "#00000088"
        },
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
            input: "#ACADAF",
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
        info: {
            main: '#02AEEE',
            contrastText: "#fff",
            hovered: "#299cc6"
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
            xGrey: "#858585",
            xGrey1: "#898989",
            xGrey2: "#898989",
            xGrey3: "#A7A8AA",
            xxGrey: "#888888",
            xxxGrey: "#707070",
            xxxGrey1: "#7D7D7D",
            grey: "#5F6163",
            lighter: "#A1A1A1",
            link: "#0E2FFFCC",
            secondarish: "#2D4766"
        },
        background: {
            xTrans: '#00000044'
        },
        xTrans: {
            main: "#00000044"
        },
        textOff: {
            main: '#7A7A7A',
        },
        link: {
            main: '#0E2FFFCC',
        },
        transWhite: {
            main: "#ffffff4c",
        },
        borders: {
            main: "#9EB6D3",
            secondary: "#10178288"
        },
        tableHeader: {
            main: "#F5F8FA"
        },
        tableSeparator: {
            dark: "#D4D4D4",
            main: "#D1D6DC",
            light: "#DFDFDF",

        },
        tableBody: {
            main: "#ffffffcc"
        },
        dialog: {
            main: "#fff",
            off: "#EEEEEE",
            xOff: "#F7F7F7",
            xxOff: "#DEDDE6",
            xxxOff: "#cccccc",
            xxxxOff: "#EEF2F4",
        },
    },
}

let darkTheme = createTheme(themeObj);
let lightTheme = createTheme({ //todo: we need opposite theme in some controlls
    ...themeObj,
    palette: {
        ...themeObj.palette,
        mode: 'light',
    }
});

export {
    lightTheme,
    darkTheme,
}
