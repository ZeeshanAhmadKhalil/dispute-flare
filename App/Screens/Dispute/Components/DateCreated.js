import { Box } from '@mui/material';
import moment from 'moment'

function DateCreated(props) {

    const {
        dateCreated,
    } = props.row || {}

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <span>
                {moment(dateCreated).format("MMMM DD, hh:mm a")}
            </span>
        </Box>
    )
}

export default DateCreated