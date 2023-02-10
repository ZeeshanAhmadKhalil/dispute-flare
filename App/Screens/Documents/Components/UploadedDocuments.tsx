import {
    Box,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import FileSingle from './FileSingle';


const Container = styled(Box)(() => {
    return {
        WebkitTransform: "rotate(180deg)",
        textAlign: "center",
        writingMode: "vertical-rl",
    }
})

function UploadedDocuments() {

    const {
        palette: {
            text,
        }
    }: any = useTheme()

    return (
        <Box sx={{ display: "flex", flexDirection: "row", columnGap: "1rem", marginTop: "1rem" }}>

            <Container>
                <Typography color={text.lightSilver}>
                    <span style={{ left: "5px", position: "relative" }}> _____ </span>
                    Uploaded Documents
                    <span style={{ right: "-5px", position: "relative" }}> _____ </span>

                </Typography>
            </Container>
            <FileSingle actions={true} title="Bank Copy" height="220px" width="175px" />
            <FileSingle actions={true} title="School Certificate" height="220px" width="175px" />
            <FileSingle actions={true} title="Passport" height="220px" width="175px" />

        </Box>
    )
}

export default UploadedDocuments