import {
    drawerClosedWidth,
    drawerWidth,
    headerHeight
} from '@Config/constants';
import styled from '@emotion/styled';
import { CssBaseline } from '@mui/material';
import MuiBox from '@mui/material/Box';
import cls from 'classnames';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './Components/Header/Header';
import RightBar from './Components/RightBar/RightBar';
import HoverSidebar from './Components/Sidebar/HoverSidebar';
import Sidebar from './Components/Sidebar/Sidebar';
import styles from './MainLayout.module.scss';

let ContentBox = styled(MuiBox, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    marginTop: headerHeight,
    marginRight: drawerClosedWidth,
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: open ? drawerWidth : drawerClosedWidth,
}))

function MainLayout(props) {

    const {
        children
    } = props

    const {
        sidebar,
    } = useSelector(state => state.layout)
    const {
        themes,
        selectedTheme,
    } = useSelector(state => state.theme)

    let selectedImagePath
        = themes
            .find(obj => obj.id == selectedTheme)
            ?.imagePath

    useEffect(() => {
    }, [])

    return (
        <MuiBox
            sx={{
                display: 'flex',
                background: `url('${selectedImagePath}')`,
                backgroundSize: 'cover',
            }}
            className={cls(
                styles.mainLayoutContainer,
                `h-screen`,
                `border-red-700`, `border-0 `,
            )}
        >
            <CssBaseline />
            <Header />
            <Sidebar />
            <HoverSidebar />
            <RightBar />
            <ContentBox
                open={sidebar}
                component="main"
                sx={{ flexGrow: 1, }}
                className={cls(
                    `border-red-700`, `border-0`,
                    `px-4`,
                )}
            >
                {children}
            </ContentBox>
        </MuiBox>
    )
}

export default MainLayout