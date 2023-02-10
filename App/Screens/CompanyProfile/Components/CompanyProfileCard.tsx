import {
    Grid,
    Typography,
    useTheme
} from '@mui/material'
import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
function CompanyProfileCard() {

    const {
        palette: {
            dialog,
            text,
            primary
        }
    }: any = useTheme()
    return (

        <Grid
            container
            display="flex"
            padding="5px"
            flexDirection="column"
            maxWidth="306px"
            borderRadius="3px"
            sx={{
                backgroundColor: dialog.xxxxOff
            }}
        >

            <Grid item display="flex" justifyContent="space-between">
                <Typography variant='h6' color={text.contrastText}>Identity IQ</Typography>
                <ErrorIcon color="secondary" />
            </Grid>
            <Grid item justifyContent="center" display="flex" marginTop="1rem" marginBottom="0.5rem">
                <InsertDriveFileIcon sx={{ width: "64px", height: "84px", color: text.xGrey3 }} color={text.contrastText} />
            </Grid>
            <Grid item>
                <Typography
                    color={text.contrastText}
                    sx={{
                        backgroundColor: primary.main
                    }}
                    textAlign="center"
                >
                    LEARN HOW TO BECOME AN AFFILITAE
                </Typography>
            </Grid>

        </Grid>
    )
}

export default CompanyProfileCard