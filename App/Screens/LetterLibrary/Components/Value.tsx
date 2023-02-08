import { Avatar, Badge, Box } from '@mui/material';
import { useEffect } from 'react';

function Value(props) {

    const { value
    } = props || {}

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <span>{value}</span>
        </Box>
    )
}

export default Value