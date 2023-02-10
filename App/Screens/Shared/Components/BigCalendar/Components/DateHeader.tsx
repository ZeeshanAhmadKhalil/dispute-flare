import { Box, Typography, useTheme } from '@mui/material';
import cls from 'classnames';
import moment from 'moment';

function DateHeader(props: any) {

    const {
        label,
        date,
        isOffRange,
    } = props

    let isToday = moment(date)
        ?.isSame?.(new Date(), "day")

    let month = ""
    if (label == "01")
        month = moment(date).format("MMM")

    const {
        palette: {
            leadLight,
            text,
        }
    }: any = useTheme()

    return (
        <Box
            className={cls(
                'border-red-700', 'border-0',
                'flex',
                'justify-end',
                'mt-1'
            )}
        >
            <Typography
                variant='body1'
                sx={{
                    color: text.silver
                }}
            >
                {month}
            </Typography>
            <Box
                className={cls(
                    'border-red-700', 'border-0',
                    'rounded-full',
                    'h-[25px]',
                    'w-[25px]',
                    'flex',
                    'justify-center',
                    'items-center'
                )}
                sx={{
                    backgroundColor: isToday ?
                        leadLight.main
                        :
                        undefined
                }}
            >
                <Typography
                    variant='body1'
                    sx={{
                        fontWeight: isOffRange ?
                            undefined
                            :
                            'bold',
                        color: isOffRange ?
                            text.silver
                            :
                            isToday ?
                                text.main
                                :
                                text.contrastText
                    }}
                >
                    {parseInt(label)}
                </Typography>
            </Box>
        </Box>
    )
}

export default DateHeader