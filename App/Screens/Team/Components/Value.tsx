import { Box } from '@mui/material';

function Value(props: any) {

    const {
        value
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