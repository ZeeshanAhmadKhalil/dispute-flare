import { Box } from "@mui/material"
import cls from 'classnames'

function EventContainerWrapper() {

    return (
        <Box
            className={cls(
                'border-red-700', 'border-0',
            )}
        >
        </Box>
    )
}

export default EventContainerWrapper