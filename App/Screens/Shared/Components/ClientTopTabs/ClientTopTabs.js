import { topTabsHeight } from '@Config/constants';
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
const AntTab = styled(Tab)(({ theme, i }) => {

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

        borderLeft: i == 1 ? `1px solid ${xGrey2}` : null,
        marginRight: i == 0 ? "1rem" : "",


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
                width: '100%',
                border: '0px solid blue',
                height: topTabsHeight,
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

                        return <AntTab label={item.label} value={item.value} i={i} />
                    })
                    }

                </AntTabs>
            </Box>
        </Box>
    );
}

export default ClientTopTabs