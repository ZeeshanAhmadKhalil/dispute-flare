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
    }
})
function UploadingDocuments() {



    return (
        <Box sx={{ display: "flex", flexDirection: "row", columnGap: "1rem", marginTop: "1rem" }}>

            <Container>
                _____  Uploading Documents _____

            </Container>
            <FileSingle title="Passport" height="240px" width="190px" />
            <FileSingle title="Passport" height="240px" width="190px" />
            <FileSingle title="Passport" height="240px" width="190px" />

        </Box>
    )
}

export default UploadingDocuments