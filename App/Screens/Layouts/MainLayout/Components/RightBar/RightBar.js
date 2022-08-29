import MuiBox from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cls from 'classnames';
import { styled } from '@mui/material/styles';

const drawerClosedWidth = 65;

const Box = styled(MuiBox)(({ theme }) => ({
    width: drawerClosedWidth,
    height: '100%',
    position: 'fixed',
    right: 0,
}),
);

function RightBar(props) {

    const dispatch = useDispatch()

    const { } = useSelector(state => state.shared)

    const [state, setState] = useState(null)

    useEffect(() => {
    }, [])

    return (
        <Box
            className={cls(
                `border-red-600`, 'border-2',
            )}
        >

        </Box>
    )
}

export default RightBar