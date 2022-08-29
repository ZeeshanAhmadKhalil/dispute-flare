import routes from '@Config/routes';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { setHoverSideBar, setSideBar } from '@Screens/Layouts/Store/layoutSlice';
import cls from 'classnames';
import Image from 'next/image';
import logo from 'public/Assets/Images/logo.png';
import downArrow from 'public/Assets/Svgs/down-arrow.svg';
import yummyBurger from 'public/Assets/Svgs/yummy-burger.svg';
import { useDispatch, useSelector } from 'react-redux';
import AffilateButtom from './AffilateButtom';
import styles from './Sidebar.module.scss';

const drawerWidth = 240;
// let closeHoverSidebarTimeout = null

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

function HoverSidebar() {

    const dispatch = useDispatch()

    const {
        hoverSidebar,
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
                <div key={key}>
                    {type == "menu-item" &&
                        <ListItem disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: hoverSidebar ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: hoverSidebar ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Image
                                        width={20}
                                        height={20}
                                        src={icon}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={displayName} sx={{ opacity: hoverSidebar ? 1 : 0 }} />
                                {(hoverSidebar && collapsable) &&
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: hoverSidebar ? 3 : 'auto',
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
                </div>
            )
        })
    }

    //! closing if cursor is not moving
    // useEffect(() => {
    //     clearTimeout(closeHoverSidebarTimeout)
    //     if (hoverSidebar) {
    //         closeHoverSidebarTimeout = setTimeout(() => {
    //             dispatch(setHoverSideBar(false))
    //         }, 500)
    //     }
    // }, [hoverSidebar])

    return (
        <div
            className={cls(
                `border-red-700`, `border-0`,
            )}
        >
            <Drawer
                BackdropProps={{ invisible: true }}
                anchor={"left"}
                open={hoverSidebar}
            >
                <div
                    //! not working when cursor is not moving
                    // onMouseOver={() => {
                    //     console.log("hover sidebar onMouseOver")
                    //     clearTimeout(closeHoverSidebarTimeout)
                    // }}
                    // onMouseEnter={() => {
                    //     console.log("hover sidebar onMouseEnter")
                    //     clearTimeout(closeHoverSidebarTimeout)
                    // }}
                    className={cls(
                        `border-red-700`, `border-0`,
                        `h-full`
                    )}
                    onMouseLeave={() => {
                        console.log("hover sidebar onMouseLeave")
                        dispatch(setHoverSideBar(false))
                    }}
                >
                    <Box
                        className={cls(
                            `border-red-700`, `border-0`,
                            `h-full`
                        )}
                        sx={{
                            width: drawerWidth,
                        }}
                        role="presentation"
                    >
                        <DrawerHeader>
                            <IconButton
                                className={cls(styles.yummyBurger)}
                                onClick={() => {
                                    dispatch(setHoverSideBar(false))
                                    dispatch(setSideBar(true))
                                }}
                            >
                                <Image
                                    width={20}
                                    height={20}
                                    src={yummyBurger}
                                />
                            </IconButton>
                            {hoverSidebar &&
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
                    <AffilateButtom
                        isHoverSidebar={true}
                    />
                </div>
            </Drawer>
        </div>
    );
}

export default HoverSidebar