import { Badge, Box } from '@mui/material';
import { useEffect } from 'react';

function ClientName(props) {

    const {
        clientName,
        status,
    } = props.row || {}

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Badge
                color={status.toLowerCase()}
                variant="dot"
                sx={{
                    mr: 1,
                }}
            />
            <span>{clientName}</span>
        </Box>
    )
}

export default ClientName