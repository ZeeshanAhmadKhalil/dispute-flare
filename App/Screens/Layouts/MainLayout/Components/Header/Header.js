import Avatar from '@Components/Avatar/Avatar';
import Button from '@Components/Button/Button';
import { drawerClosedWidth, drawerWidth } from '@Config/constants';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { setProfileDialog } from '@Screens/Shared/Store/sharedSlice';
import cls from 'classnames';
import Image from 'next/image';
import logo from 'public/Assets/Images/logo.png';
import Upgrade from 'public/Assets/Svgs/upgrade.svg';
import { useDispatch, useSelector } from 'react-redux';
import ProfileDialog from './Components/ProfileDialog';
import styles from './Header.module.scss';


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    paddingRight: 0,
    marginRight: drawerClosedWidth,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    width: `calc(100% - ${2 * drawerClosedWidth}px)`,
    ...(open && {
        marginLeft: drawerClosedWidth + drawerWidth,
        width: `calc(100% - ${drawerClosedWidth + drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function Header() {

    const dispatch = useDispatch()

    const {
        user
    } = useSelector(state => state.auth) || {}
    const {
        sidebar,
        hoverSidebar,
    } = useSelector(state => state.layout)

    return (
        <>
            <AppBar
                className={cls(
                    styles.customAppBar,
                    `border-red-600`, 'border-0',
                    `pr-0`
                )}
                position="fixed"
                open={sidebar || hoverSidebar}
            >
                <Toolbar
                    className={cls(
                        'header-toolbar'
                    )}
                >
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {(!sidebar && !hoverSidebar) &&
                            <Image
                                width={75}
                                height={45}
                                src={logo}
                            />
                        }
                    </Box>
                    <Box className='border-0' sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={() => dispatch(setProfileDialog(true))}
                            color={"text"}
                            variant="text"
                            startIcon={
                                <Avatar
                                    styles={{
                                        height: 30,
                                        width: 30,
                                    }}
                                />
                            }
                            endIcon={<ArrowDropDownIcon />}
                            style={{
                                borderRadius: 50,
                                marginRight: 40,
                            }}
                        >
                            {user?.name}
                        </Button>
                        <Button
                            color={"warning"}
                            startIcon={
                                <Upgrade
                                    height={25}
                                    width={25}
                                />
                            }
                            style={{
                                borderRadius: 50,
                                marginRight: 15,
                            }}
                        >
                            Upgrade Package
                        </Button>
                        <Button
                            color={"secondary"}
                            icon={null}
                            style={{
                                borderRadius: 50,
                            }}
                        >
                            Marketpalce
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <ProfileDialog />
        </>
    );
}
