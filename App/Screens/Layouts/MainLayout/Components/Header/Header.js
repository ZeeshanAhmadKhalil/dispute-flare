import Avatar from '@Components/Avatar/Avatar';
import Button from '@Components/Button/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import cls from 'classnames';
import Image from 'next/image';
import logo from 'public/Assets/Images/logo.png';
import upgrade from 'public/Assets/Svgs/upgrade.svg';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.scss';

const drawerWidth = 240;
const drawerClosedWidth = 65;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    width: `calc(100% - ${drawerClosedWidth}px)`,
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function Header() {

    const dispatch = useDispatch()

    const {
        user: {
            name = "",
        }
    } = useSelector(state => state.auth)
    const {
        sidebar,
    } = useSelector(state => state.layout)

    return (
        <AppBar
            className={cls(
                styles.customAppBar,
                `border-red-600`, 'border-0',
            )}
            position="fixed"
            open={sidebar}
        >
            <Toolbar>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {!sidebar &&
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
                        round={true}
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
                        {name}
                    </Button>
                    <Button
                        round={true}
                        color={"warning"}
                        startIcon={
                            <Image
                                src={upgrade}
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
                        round={true}
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
    );
}
