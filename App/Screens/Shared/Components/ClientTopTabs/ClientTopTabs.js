import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import {
    useRouter
} from 'next/router';
import {
    useEffect
} from 'react';

const AntTabs = styled(Tabs)(({ theme }) => {

    const {
        text: {
            xxxGrey1,
            xGrey2,
        },
        secondary: {
            main
        }
    } = theme.palette || {}

    return {
        borderBottom: '1px solid #e8e8e8',

        '& .MuiTab-textColorSecondary': {
            color: xxxGrey1,
        },
        '& .MuiTab-textColorSecondary.Mui-selected': {
            color: main,
        },
    }
});

function ClientTopTabs(props) {

    const {
        palette: {
            text: {
                xGrey2,
            },
        }
    } = useTheme()


    const tabs = props.tabs || [];
    const router = useRouter()

    const handleTabChange = (event, newValue) => {
        router.push(`/${newValue}`)
    }

    useEffect(() => {

    }, router)

    return (
        <Box
            sx={{
                width: '100%'
            }}
        >
            <Box
                sx={{
                    bgcolor: '#fff',
                    px: 2,
                }}
            >
                <AntTabs
                    value={router.pathname.replace('/', '')}
                    onChange={handleTabChange}
                    textColor='secondary'
                    indicatorColor='secondary'

                >
                    {tabs && tabs.map((item, i) => {

                        return <Tab label={item.label} value={item.value} />
                    })
                    }

                </AntTabs>
            </Box>
        </Box>
    );
}

export default ClientTopTabs