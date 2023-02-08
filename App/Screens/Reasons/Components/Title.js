import { Avatar, Badge, Box } from '@mui/material';
import { useEffect } from 'react';

function Title(props) {

    const {
        title,
        creditorPfp,
    } = props.row || {}

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >

            <span>{title}</span>
        </Box>
    )
}

export default Title