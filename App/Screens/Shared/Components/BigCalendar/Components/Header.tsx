import { Typography, useTheme } from "@mui/material"

function Header({
    label
}: any) {

    const {
        palette: {
            text,
        }
    }: any = useTheme()

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