import { Box } from '@mui/material';

function SecretCell(props) {

    const {
        value,
    } = props || {}

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <span>
                {value.slice(0, 5) + "***"}
            </span>
        </Box>
    )
}

export default SecretCell