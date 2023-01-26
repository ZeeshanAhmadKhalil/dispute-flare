import {
    Box, Typography,
    useTheme, styled
} from '@mui/material'
import React from 'react'
import FileSingle from './FileSingle';


const Container = styled(Box)(({ theme }) => {
    return {
        writingMode: "vertical-rl",
        textOrientation: "sideways-right",
        WebkitTransform: "rotate(180deg)",
        textAlign: "center",
        marginLeft: "10px"
    }
})
function UploadingDocuments() {

    const {
        palette
    } = useTheme()


    return (
        <Box sx={{ display: "flex", flexDirection: "row", columnGap: "1rem", marginTop: "1rem" }}>

            <Container>
                <Typography color={palette.text.lightSilver}>
                    <span style={{ left: "5px", position: "relative" }}> _____ </span>
                    Uploading Documents
                    <span style={{ right: "-5px", position: "relative" }}> _____ </span>

                </Typography>
            </Container>
            <FileSingle title="Passport" height="220px" width="175px" />
            <FileSingle title="Passport" height="220px" width="175px" />
            <FileSingle title="Passport" height="220px" width="175px" />

        </Box>
    )
}

export default UploadingDocuments