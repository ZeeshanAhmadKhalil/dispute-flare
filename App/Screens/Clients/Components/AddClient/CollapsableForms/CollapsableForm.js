import { Box, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CollapseDown from 'public/Assets/Svgs/collapse-down.svg';
import cls from 'classnames'

const Container = styled(Box)(({ theme }) => {
    return {

    }
})

const ArrowIcon = styled(Box)(({ theme }) => {
    return {

    }
})

const Collapse = styled(Box)(({ theme }) => {

    const {
        dialog: { xxxxOff }
    } = theme.palette

    return {
        padding: 20,
        backgroundColor: xxxxOff,
        borderRadius: 2,
    }
})

const Title = (props) => {
    const {
        children,
        onClick,
        open,
    } = props || {}

    return (
        <Box
            onClick={onClick}
            className={cls(
                'flex',
                'justify-between',
                'items-center',
                'border-red-700',
                'border-0',
                'h-[50px]',
                'px-[15px]',
            )}
        >
            <Typography>
                {children}
            </Typography>
            <ArrowIcon
                open={open}
            >
                <CollapseDown
                    height={10}
                    width={10}
                />
            </ArrowIcon>
        </Box>
    )
}

function CollapsableForm(props) {

    const {
        children,
        title,
    } = props || {}

    const [open, setOpen] = useState(true)

    return (
        <Container>
            <Title
                onClick={() => setOpen(!open)}
                open={open}
            >
                {title}
            </Title>
            <Collapse
                open={open}
            >
                {children}
            </Collapse>
        </Container>
    )
}

export default CollapsableForm