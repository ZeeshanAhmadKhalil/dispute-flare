import { Avatar, Badge, Box } from '@mui/material';
import { useEffect } from 'react';

function AvatarNameCell(props) {

    const {
        row: {
            pfp
        },
        value,
    } = props || {}

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Avatar
                src={pfp}
                sx={{
                    width: 24,
                    height: 24,
                    mr: 1,
                }}
            />
            <span>{value}</span>
        </Box>
    )
}

export default AvatarNameCell