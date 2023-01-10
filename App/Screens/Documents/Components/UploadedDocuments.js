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
function UploadedDocuments() {

    return (
        <Box sx={{ display: "flex", flexDirection: "row", columnGap: "1rem", marginTop: "1rem" }}>

            <Container>
                _____  Uploaded Documents _____

            </Container>
            <FileSingle actions={true} title="Bank Copy" height="240px" width="190px" />
            <FileSingle actions={true} title="Bank Copy" height="240px" width="190px" />
            <FileSingle actions={true} title="Bank Copy" height="240px" width="190px" />

        </Box>
    )
}

export default UploadedDocuments