import DropDown from '@Components/DropDown/DropDown'
import { darkTheme } from '@Config/theme'
import CopyrightIcon from '@mui/icons-material/Copyright'
import {
    Grid,
    Typography,
    useTheme
} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import Button from '@Components/Button/Button';

function Footer() {

    const priorityList = [
        { label: "English", value: 1 },
        { label: "Spanish", value: 2 },
        { label: "French", value: 3 },
    ]

    const {
        palette: {
            borders,
            text,
        }
    } = useTheme()

    const [language, setLanguage] = useState(1)

    return (

        <Box
            sx={{
                border: '0px solid red',
                marginTop: 1,
            }}
            display="flex"
            flexDirection="row"
            alignItems="center"
        >

            <Button
                color={"white"}
                variant="outlined"
                startIcon={null}
                style={{
                    borderRadius: 3,
                    marginRight: 10
                }}
            >
                {"DISPUTE FLARE"}
            </Button>
            <DropDown
                list={priorityList}
                name="language"
                customChange={{
                    value: language,
                    onChange: setLanguage,
                }}
                hideTextField={true}
                theme={darkTheme}
                styles={{
                    marginLeft: 1,
                    border: `0.5px solid ${borders.light}`,
                    height: 35,
                }}
            />
            <Box sx={{ marginLeft: "1rem" }}>
                <Typography>
                    <CopyrightIcon />
                    2022 Dispute Flare
                </Typography>
            </Box>
            <Box
                sx={{
                    border: `1px solid ${text.main}`,
                    borderTop: "0",
                    borderBottom: "0",
                    padding: "0 1rem 0 1rem",
                    marginLeft: "1rem"
                }}
            >
                Themes
            </Box>
        </Box>
    )
}

export default Footer