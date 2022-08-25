import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Components/Header/Header';
import styles from './MainLayout.module.scss'
import Box from '@mui/material/Box';
import cls from 'classnames';


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
            className={cls(
                styles.mainLayoutContainer,
                `h-screen`,
                `border-0 `,
                `border-red-600`,
                `bg-[url('/Assets/Images/background.png')]`,
                `bg-cover`,
            )}
        >
            <Header />
            {children}
        </Box>
    )
}

export default MainLayout