import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Components/Header/Header';
import styles from './MainLayout.module.scss'
import Box from '@mui/material/Box';
import cls from 'classnames';
import Sidebar from './Components/Sidebar/Sidebar';
import HoverSidebar from './Components/Sidebar/HoverSidebar';
import RightBar from './Components/RightBar/RightBar';


function MainLayout(props) {

    const {
        children
    } = props

    const dispatch = useDispatch()

    const { } = useSelector(state => state.shared)

    const [state, setState] = useState(null)

    useEffect(() => {
    }, [])

    return (
        <Box
            sx={{ display: 'flex' }}
            className={cls(
                styles.mainLayoutContainer,
                `h-screen`,
                `border-red-700`, `border-0 `,
                `bg-[url('/Assets/Images/background.png')]`,
                `bg-cover`,
            )}
        >
            <Header />
            <Sidebar />
            <HoverSidebar />
            <RightBar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {children}
            </Box>
        </Box>
    )
}

export default MainLayout