import { Box, Typography, useTheme } from "@mui/material"

function Header({
    label
}) {

    const {
        palette: {
            text,
        }
    } = useTheme()

    return (
        <Typography
            color={text.silver}
            variant="subtitle1"
        >
            {label}
        </Typography>
    )
}

export default Header