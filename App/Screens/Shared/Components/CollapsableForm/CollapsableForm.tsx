import { Box, styled, Typography } from '@mui/material';
import cls from 'classnames';
import CollapseDown from 'public/Assets/Svgs/collapse-down.svg';
import { useState } from 'react';

const ArrowIcon = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }: any) => {
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
})(({
    theme,
    open,
    collapseBgColor,
}: any) => {

    const {
        dialog: { xxxxOff }
    }: any = theme.palette

    return {
        backgroundColor: collapseBgColor ?
            collapseBgColor
            :
            xxxxOff,
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

const Title = (props: any) => {
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
                {...{
                    open: open
                }}
            >
                <CollapseDown
                    height={10}
                    width={10}
                />
            </ArrowIcon>
        </Box>
    )
}

function CollapsableForm(props: any) {

    const {
        children,
        title,
        defaultOpen = false,
        collapseBgColor,
    } = props || {}

    const [open, setOpen] = useState(defaultOpen)

    return (
        <Box>
            <Title
                onClick={() => setOpen(!open)}
                open={open}
            >
                {title}
            </Title>
            <Collapse
                {...{
                    open: open,
                    collapseBgColor: collapseBgColor
                }}
            >
                <div
                    className={cls(
                        'p-[20px]',
                    )}
                >
                    {children}
                </div>
            </Collapse>
        </Box>
    )
}

export default CollapsableForm