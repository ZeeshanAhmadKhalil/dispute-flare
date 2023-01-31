import { Grid, Typography, Button, useTheme, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import DropDown from '@Components/DropDown/DropDown';
import { Box } from '@mui/system';
function Footer() {
    const {
        palette
    } = useTheme()

    const langs = [
        { label: "English", value: 1 },
        { label: "Spanish", value: 2 },
        { label: "Hispo", value: 3 },
        { label: "Hindi", value: 4 },
    ]

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Grid sx={{ position: "absolute", bottom: "10px", marginBottom: "10px" }} display="flex" flexDirection="row" alignItems="center">

            <Button
                //    onClick={handleFlowClient}
                color={"text"}
                style={{
                    borderRadius: 3,
                    paddingLeft: "2 20 2 20",
                    border: "1px solid white",
                    //      color: grey,
                    fontWeight: 'bold',

                }}
            >
                {"DISPUTE FLARE"}
            </Button>
            <FormControl size='small' sx={{ padding: "0", marginLeft: 3, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">English</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    sx={{
                        border: "1px solid white",
                        padding: "0px",
                        '&:focus': {
                            //   boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
                            borderColor: palette.text.main,
                        },
                    }}
                >
                    <MenuItem value={10}>English</MenuItem>
                    <MenuItem value={20}>Urdu</MenuItem>
                    <MenuItem value={30}>French</MenuItem>
                </Select>
            </FormControl>
            <Box sx={{ marginLeft: "1rem" }}>
                <Typography>
                    <CopyrightIcon />2022 Dispute Flare
                </Typography>
            </Box>
            <Box sx={{ border: "1px solid white", borderTop: "0", borderBottom: "0", padding: "0 1rem 0 1rem", marginLeft: "1rem" }}>
                Themes
            </Box>
        </Grid>
    )
}

export default Footer