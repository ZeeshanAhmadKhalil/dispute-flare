import React from 'react'
import { Button, styled, useTheme } from '@mui/material'
import styles from './Tags.module.scss'



function Tags() {

    const {
        palette
    } = useTheme()


    return (
        <button className={styles.btn22} style={{ backgroundColor: "#296BB4" }}><span className={styles.btn23} style={{ backgroundColor: "#296BB4" }}>Client</span></button>
    )
}

export default Tags