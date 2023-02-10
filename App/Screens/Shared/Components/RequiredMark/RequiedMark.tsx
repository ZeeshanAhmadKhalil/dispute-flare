
import {
    Typography,
    useTheme
} from '@mui/material';

export default function RequiredMark() {

    const {
        palette: {
            cancelled
        }
    }: any = useTheme()

    return (
        <Typography
            color={cancelled.main}
        >
            *
        </Typography>
    )
}