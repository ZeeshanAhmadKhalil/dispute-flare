import {
    Box,
    IconButton,
    Typography,
    useTheme
} from "@mui/material"
import cls from 'classnames'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function CalendarToolbar({
    label,
    date,
    views,
    view,
    onView,
    onNavigate
}) {


    const {
        palette: {
            text,
        }
    } = useTheme()

    return (
        <Box
            className={cls(
                'border-red-700', 'border-0',
                'flex',
                'justify-center',
                'items-center',
            )}
            sx={{
                mb: 4,
            }}
        >
            <IconButton>
                <ChevronLeftIcon
                    color="outlinedBtn"
                    fontSize="large"
                />
            </IconButton>
            <Typography
                color={text.contrastText1}
                variant="h5"
                sx={{
                    fontWeight: 'bold',
                }}
            >
                {label}
            </Typography>
            <IconButton>
                <ChevronRightIcon
                    color="outlinedBtn"
                    fontSize="large"
                />
            </IconButton>
        </Box>
    )
}

export default CalendarToolbar