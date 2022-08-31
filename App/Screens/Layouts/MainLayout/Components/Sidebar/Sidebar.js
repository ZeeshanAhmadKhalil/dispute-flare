import { drawerWidth } from '@Config/constants';
import { sidebarRoutes } from '@Config/routes';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import MuiBox from '@mui/system/Box';
import { setHoverSideBar, setSideBar } from '@Screens/Layouts/Store/layoutSlice';
import cls from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/Assets/Images/logo.png';
import downArrow from 'public/Assets/Svgs/down-arrow.svg';
import yummyBurger from 'public/Assets/Svgs/yummy-burger.svg';
import { useDispatch, useSelector } from 'react-redux';
import AffilateButtom from './AffilateButtom';
import styles from './HoverSidebar.module.scss';

let openHoverSidebarTimeout = null

const openedMixin = (theme) => ({
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
    [theme.breakpoints.up('sm')]: {
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

const openedBoxMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
});

const closedBoxMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Box = styled(MuiBox, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        ...(open && {
            ...openedBoxMixin(theme),
            '& .MuiDrawer-paper': openedBoxMixin(theme),
        }),
        ...(!open && {
            ...closedBoxMixin(theme),
            '& .MuiDrawer-paper': closedBoxMixin(theme),
        }),
    }),
);

function Sidebar() {

    const dispatch = useDispatch()

    const {
        sidebar,
        hoverSidebar,
    } = useSelector(state => state.layout)

    function RenderListItems() {
        return sidebarRoutes.map((item, key) => {

            const {
                type,
                displayName,
                icon,
                collapsable,
                path,
            } = item || {}

            return (
                <div key={key}>
                    {type == "menu-item" &&
                        <Link href={path}>
                            <ListItem disablePadding sx={{ display: 'block' }}>
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
                        </Link>
                    }
                </div>
            )
        })
    }

    return (
        <Drawer
            onMouseLeave={() => {
                console.log("sidebar onMouseLeave")
                if (!hoverSidebar)
                    clearTimeout(openHoverSidebarTimeout)
                // dispatch(setHoverSideBar(false))
            }}
            onMouseOver={() => {
                console.log("sidebar onMouseOver")
            }}
            onMouseEnter={() => {
                console.log("sidebar onMouseEnter")
                if (!sidebar)
                    openHoverSidebarTimeout = setTimeout(() => {
                        dispatch(setHoverSideBar(true))
                    }, 500)
            }}
            className={cls(`border-red-700 border-0`)}
            variant="permanent"
            open={sidebar}
        >
            <div
                className={cls(
                    `border-red-700`, `border-0`,
                    `h-full`
                )}
            >
                <Box
                    open={sidebar}
                    className={cls(
                        `border-red-700`, `border-0`,
                        `h-full`,
                    )}
                >
                    <DrawerHeader>
                        <IconButton
                            className={cls(styles.yummyBurger)}
                            onClick={() => {
                                // if (sidebar) //! buggy
                                //     dispatch(setHoverSideBar(true))
                                if (!sidebar)
                                    clearTimeout(openHoverSidebarTimeout)
                                dispatch(setSideBar(!sidebar))
                            }}
                        >
                            <Image
                                width={20}
                                height={20}
                                src={}
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
                    <Box
                        className={cls(
                            `border-red-700`, `border-0`,
                        )}
                        sx={{ height: 65 }}
                    />
                </Box>
                <AffilateButtom />
            </div>
        </Drawer >
    );
}

export default Sidebar