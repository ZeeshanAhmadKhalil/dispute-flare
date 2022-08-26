import routes from '@Config/routes';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { setSideBar } from '@Screens/Layouts/Store/layoutSlice';
import cls from 'classnames';
import Image from 'next/image';
import logo from 'public/Assets/Images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import yummyBurger from 'public/Assets/Svgs/yummy-burger.svg'
import downArrow from 'public/Assets/Svgs/down-arrow.svg'
import styles from './Sidebar.module.scss'

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {

    const dispatch = useDispatch()

    const {
        sidebar
    } = useSelector(state => state.layout)

    function RenderListItems() {
        return routes.map((item, key) => {

            const {
                type,
                displayName,
                icon,
                collapsable
            } = item || {}

            return (
                <>
                    {type == "menu-item" &&
                        <ListItem key={key} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: sidebar ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: sidebar ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Image
                                        width={20}
                                        height={20}
                                        src={icon}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={displayName} sx={{ opacity: sidebar ? 1 : 0 }} />
                                {(sidebar && collapsable) &&
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: sidebar ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Image
                                            width={10}
                                            height={10}
                                            src={downArrow}
                                        />
                                    </ListItemIcon>
                                }
                            </ListItemButton>
                        </ListItem>
                    }
                </>
            )
        })
    }

    return (
        <Drawer
            className={cls(`border-red-700 border-0`)}
            variant="permanent"
            open={sidebar}
        >
            <DrawerHeader>
                <IconButton
                    className={cls(styles.yummyBurger)}
                    onClick={() => dispatch(setSideBar(!sidebar))}
                >
                    <Image
                        width={20}
                        height={20}
                        src={yummyBurger}
                    />
                </IconButton>
                {sidebar &&
                    <Box
                        className={cls(
                            `border-red-700`, `border-0`,
                            `flex flex-1`,
                            `justify-center`,
                            `pr-5`,
                        )}
                    // sx={{ flex: 1 }}
                    >
                        <Image
                            width={75}
                            height={45}
                            src={logo}
                        />
                    </Box>
                }
            </DrawerHeader>
            <Divider />
            <List>
                {RenderListItems()}
            </List>
        </Drawer >
    );
}
