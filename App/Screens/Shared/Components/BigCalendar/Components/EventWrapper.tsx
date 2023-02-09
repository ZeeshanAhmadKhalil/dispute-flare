import { Box } from '@mui/material';
import cls from 'classnames'

function EventWrapper(props: any) {

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