import { drawerWidth } from '@Config/constants';
import { sidebarRoutes } from '@Config/routes';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import { setHoverSideBar, setSideBar } from '@Screens/Layouts/Store/layoutSlice';
import cls from 'classnames';
import LogoDark from 'public/Assets/Svgs/logo-dark.svg';
import YummyBurger from 'public/Assets/Svgs/yummy-burger.svg';
import { useDispatch, useSelector } from 'react-redux';
import AffilateButtom from './AffilateButtom';
import styles from './Sidebar.module.scss';
import SidebarItem from './SidebarItem';

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
    } = useSelector((state: any) => state.layout)

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
                        <SidebarItem
                            hoverSidebarItem
                            path={path}
                            icon={icon}
                            displayName={displayName}
                            collapsable={collapsable}
                        />
                    }
                </div>
            )
        })
    }

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
                                <YummyBurger
                                    width={20}
                                    height={20}
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
                                    <LogoDark
                                        width={85}
                                        height={45}
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