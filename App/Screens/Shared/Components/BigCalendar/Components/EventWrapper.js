import { Box } from '@mui/material';
import cls from 'classnames'

function EventWrapper(props) {

    console.log("EventWrapper props===>", props)

    const {
        children
    } = props

    return (
        <Box
            className={cls(
                'border-red-700', 'border-0',
            )}
        >
            {children}
        </Box>
    )
}

export default EventWrapper