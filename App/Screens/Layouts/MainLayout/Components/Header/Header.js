import Button from '@Components/Button/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@Components/Avatar/Avatar';
import cls from 'classnames';
import * as React from 'react';
import { useSelector } from 'react-redux';
import styles from './Header.module.scss';

export default function Header() {

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const {
        user: {
            name = "",
            pfp = null,
        }
    } = useSelector(state => state.auth)

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                className={cls(
                    styles.customAppBar,
                    'border-0'
                )}
                position="static"
            >
                <Toolbar>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <img
                            src='/Assets/Images/logo.png'
                            className={cls(styles.logo)}
                        />
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
                                <img
                                    src='/Assets/Svgs/upgrade.svg'
                                    className={cls(styles.buttonIcon)}
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
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
