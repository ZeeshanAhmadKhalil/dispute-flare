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
            xl2: 1650,
        }
    },
    typography: {
        fontFamily: 'Segoe UI Emoji'
    },
    palette: {
        mode: 'dark',
        toggleSwitch: {
            borderInactive: '#9CA1A5',
            borderActive: '#fff'
        },
        event: {
            high: "#FDDBD7",
            medium: "#A8E9D2",
            low: "#CCC3DE",
        },
        chart: {
            line: "#C1D2DF",
            dot: "#5C86B7",
            gridLine: "#B4B9BF"
        },
        shadow: {
            main: "#00000088"
        },
        rating: {
            bad: "#ee3168",
            normal: "#8660dd",
            good: "#6786f6",
            vGood: "#4bb6de",
            excellent: "#58e29c",
        },
        active: {
            main: "#29D652"
        },
        tags: {
            main: "#6193CB"
        },
        inactive: {
            main: "#EBA51C"
        },
        lead: {
            main: "#00428E"
        },
        leadLight: {
            main: "#06AEEE"
        },
        cancelled: {
            main: "#D33C41"
        },
        icon: {
            dark: "#fff",
            active: "#000",
            inactive: "#707070",
            inactive1: "#8DA6C4",
            blue: "#1B4D87",
            lightActive: "#ACADAF",
            input: "#ACADAF",
        },
        iconblue: {
            active: "#327ab1",
            inactive: "#707070",
            lightActive: "#327ab1",
            input: "#ACADAF",
        },
        icongreen: {
            active: "#37B555",
            inactive: "#707070",
            lightActive: "#37B555",
            input: "#ACADAF",
            light: "#19C5B4",
            light1: "#99BC51",
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
        success: {
            main: '#0F7E3B',
        },
        secondary: {
            main: '#00428E',
            contrastText: "#fff",
            hovered: "#002E63",
        },
        secondaryOff: {
            main: "#25617B"
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
        danger: {
            main: "#ee3168"
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
        lighterPink: {
            main: '#6E6694',
            contrastText: "#fff",
            hovered: '#8d6ac9',
        },
        text: {
            main: '#fff',
            contrastText: "#000",
            contrastText1: "#4E4E4E",
            hovered: '#fff1',
            lightSilver: "##E6E7E7",
            silver: "#c6ced3",
            xGrey: "#858585",
            xGrey1: "#898989",
            xGrey2: "#898989",
            xGrey3: "#A7A8AA",
            xGrey4: "#8F9AA8",
            xxGrey: "#888888",
            xxxGrey: '#707070',
            xxxGrey1: "#7D7D7D",
            grey: "#5F6163",
            lighter: "#A1A1A1",
            lighter1: "#BAC1CC",
            lighter2: "#8D97AA",
            link: "#0E2FFFCC",
            secondarish: "#2D4766",
            secondarish1: "#173456",
        },
        outlinedBtn: {
            main: '#C9C9C9',
            contrastText: "#000",
        },
        background: {
            main: "#fff",
            light: "#F3F4FA",
            light1: "#fffd",
            xTrans: '#00000044',
            dark: "#000",
        },
        xTrans: {
            main: "#00000044"
        },
        textOff: {
            main: '#7A7A7A',
        },
        link: {
            main: '#0E2FFFCC',
            light: '#3D8BE5'
        },
        transWhite: {
            main: "#ffffff4c",
        },
        borders: {
            light: "#fff",
            main: "#9EB6D3",
            secondary: "#10178288"
        },
        tableHeader: {
            main: "#F5F8FA",
            none: "#fff",
        },
        tableRow: {
            main: "#F4F5F7",
        },
        tableSeparator: {
            dark: "#D4D4D4",
            main: "#D1D6DC",
            light: "#DFDFDF",
            none: "#fff",

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
