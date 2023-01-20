
import {
    Typography,
    useTheme
} from '@mui/material';
export default function RequiredMark() {

    const {
        palette: {
            cancelled
        }
    } = useTheme()

    return <Typography color={cancelled.main} variant='span'>
        *
    </Typography>
}