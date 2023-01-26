import {
    Box
} from '@mui/material'
import React from 'react'
import {
    theme, styled
} from '@mui/material'
import FileSingle from './FileSingle';



const Container = styled(Box)(({ theme }) => {
    return {
        display: "flex", flexDirection: "row", columnGap: "1rem", marginTop: "1rem"
    }
})

function TilesView() {
    return (
        <Container>

            {/* <Box sx={{
                writingMode: "vertical-rl", textOrientation: "sideways-right",
                WebkitTransform: "rotate(180deg)", textAlign: "center",
            }}>
                _____  Uploading Documents _____

            </Box> */}
            <FileSingle title="Passport" height="200px" width="160px" dropdown={true} />

            <FileSingle title="Passport" height="200px" width="160px" dropdown={true} />
            <FileSingle title="Passport" height="200px" width="160px" dropdown={true} />
        </Container>
    )
}

export default TilesView