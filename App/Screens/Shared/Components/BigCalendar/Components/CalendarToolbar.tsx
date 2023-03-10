import {
    Box,
    IconButton,
    Typography,
    useTheme
} from "@mui/material"
import cls from 'classnames'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function CalendarToolbar(props: any) {

    let navigate = {
        PREVIOUS: 'PREV',
        NEXT: 'NEXT',
        TODAY: 'TODAY',
        DATE: 'DATE',
        MONTH: 'MONTH',
        WEEK: 'WEEK',
        DAY: 'DAY',
        AGENDA: 'AGENDA',
    }

    const {
        label,
        onNavigate
    } = props || {}

    const {
        palette: {
            text,
            outlinedBtn,
        },
    }: any = useTheme()

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
            <IconButton
                onClick={() =>
                    onNavigate(navigate.PREVIOUS)
                }
            >
                <ChevronLeftIcon
                    sx={{
                        color: outlinedBtn.main
                    }}
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
            <IconButton
                onClick={() =>
                    onNavigate(navigate.NEXT)
                }
            >
                <ChevronRightIcon
                    sx={{
                        color: outlinedBtn.main
                    }}
                    fontSize="large"
                />
            </IconButton>
        </Box>
    )
}

export default CalendarToolbar