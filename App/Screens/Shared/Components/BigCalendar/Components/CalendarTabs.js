import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import MuiTabs from '@mui/material/Tabs'
import MuiTab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import * as React from 'react'


const Tabs = styled(MuiTabs)(({ theme }) => {

    const {
        text: {
            main,
        },
    } = theme.palette || {}

    return {
        '& .MuiTab-root.Mui-selected': {
            color: main,
        },
        '& .MuiTabs-indicator': {
            backgroundColor: main,
        },
    }
})
const Tab = styled(MuiTab)(({ theme }) => {

    const {
    } = theme.palette || {}

    return {
        '&': {
            textTransform: "none",

        },
    }
})

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

function CalendarTabs({
    view,
    setView,
}) {

    const handleChange = (event, newValue) => {
        setView(newValue)
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={view}
                onChange={handleChange}
                aria-label=""
            >
                <Tab
                    label="Day"
                    value={"day"}
                />
                <Tab
                    label="Week"
                    value={"week"}
                />
                <Tab
                    label="Month"
                    value={"month"}
                />
            </Tabs>
        </Box>
    )
}

export default CalendarTabs