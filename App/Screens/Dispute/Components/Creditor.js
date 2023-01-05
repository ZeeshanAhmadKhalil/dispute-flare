import { Avatar, Badge, Box } from '@mui/material';
import { useEffect } from 'react';

function Creditor(props) {

    const {
        creditor,
        creditorPfp,
    } = props.row || {}

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Avatar
                src={creditorPfp}
                sx={{
                    width: 24,
                    height: 24,
                    mr: 1,
                }}
            />
            <span>{creditor}</span>
        </Box>
    )
}

export default Creditor