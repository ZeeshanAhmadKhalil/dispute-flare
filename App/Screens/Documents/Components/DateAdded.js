import { Box } from '@mui/material';
import moment from 'moment'

function DateAdded(props) {

    const {
        dateAdded,
    } = props.row || {}

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <span>
                {moment(dateAdded).format("MMMM DD, hh:mm a")}
            </span>
        </Box>
    )
}

export default DateAdded