import { Box } from '@mui/material';
import moment from 'moment'

function DateCell(props: any) {

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
                {moment(value).format("MMMM DD, hh:mm a")}
            </span>
        </Box>
    )
}

export default DateCell