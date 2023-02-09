import {
    Box
} from '@mui/material'
import React from 'react'
import {
    styled
} from '@mui/material'
import FileSingle from './FileSingle';



const Container = styled(Box)(() => {
    return {
        display: "flex",
        flexDirection: "row",
        columnGap: "1rem",
        marginTop: "1rem"
    }
})

function TilesView() {
    return (
        <Container>
            <FileSingle
                title="File 1"
                height="200px"
                width="160px"
                dropdown={true}
            />
            <FileSingle
                title="File 2"
                height="200px"
                width="160px"
                dropdown={true}
            />
            <FileSingle
                title="File 3"
                height="200px"
                width="160px"
                dropdown={true}
            />
        </Container>
    )
}

export default TilesView