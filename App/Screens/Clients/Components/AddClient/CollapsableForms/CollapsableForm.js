import { Box, styled, Typography } from '@mui/material';
import cls from 'classnames';
import CollapseDown from 'public/Assets/Svgs/collapse-down.svg';
import { useState } from 'react';

const Container = styled(Box)(({ theme }) => {
    return {
    }
})

const ArrowIcon = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => {
    return {
        borderTopLeftRadius: 10,
        transition: theme.transitions.create(['transform'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            transform: "rotate(180deg)",
        })
    }
})

const Collapse = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => {

    const {
        dialog: { xxxxOff }
    } = theme.palette

    return {
        backgroundColor: xxxxOff,
        borderRadius: 2,
        overflow: 'hidden',
        transition: theme.transitions.create(['max-height'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(!open && {
            maxHeight: 1,
        }),
        ...(open && {
            maxHeight: 1000,
        })
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
                'cursor-pointer',
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
                <div
                    className={cls(
                        'p-[20px]'
                    )}
                >
                    {children}
                </div>
            </Collapse>
        </Container>
    )
}

export default CollapsableForm