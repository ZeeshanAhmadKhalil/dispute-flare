import { Box } from '@mui/material';

function Account(props) {

    const {
        account,
    } = props.row || {}

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <span>
                {account.slice(0, 5) + "***"}
            </span>
        </Box>
    )
}

export default Account