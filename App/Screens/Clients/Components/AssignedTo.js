import { Avatar, Badge, Box } from '@mui/material';
import { useEffect } from 'react';

function AssignedTo(props) {

    const {
        assignedTo,
        assignedToPfp,
    } = props.row || {}

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Avatar
                src={assignedToPfp}
                sx={{
                    width: 24,
                    height: 24,
                    mr: 1,
                }}
            />
            <span>{assignedTo}</span>
        </Box>
    )
}

export default AssignedTo