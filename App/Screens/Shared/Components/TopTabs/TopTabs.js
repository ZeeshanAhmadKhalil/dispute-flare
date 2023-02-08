import {
    topTabsHeight
} from '@Config/constants';
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import {
    styled,
    useTheme
} from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import {
    useRouter
} from 'next/router';

const AntTabs = styled(Tabs)(({ theme }) => {

    const {
        text: {
            xxxGrey1,
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
const AntTab = styled(Tab)(({ theme, index }) => {

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
        marginRight: index == 0 ?
            "2rem"
            :
            null,
    }
});

function TopTabs({
    tabs,
    left = null
}) {

    const {
        palette: {
            text: {
                xGrey2,
            }
        }
    } = useTheme()

    const router = useRouter()

    const handleTabChange = (event, newValue) => {
        router.push(`/${newValue}`)
    }

    const renderTabs =
        tabs.map((item, key) => {

            return (
                <AntTab
                    key={key}
                    index={key}
                    label={item.label}
                    value={item.value}
                />
            )
        })

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
                    <Divider
                        sx={{
                            height: topTabsHeight,
                            backgroundColor: xGrey2,
                            position: 'absolute',
                            left: left ?
                                left
                                :
                                45 + tabs[0].label.length * 10,
                        }}
                        flexItem
                        orientation="vertical"
                    />
                    {tabs &&
                        renderTabs
                    }

                </AntTabs>
            </Box>
        </Box>
    );
}

export default TopTabs