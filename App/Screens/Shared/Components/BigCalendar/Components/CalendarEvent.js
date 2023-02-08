import { Box, Typography, useTheme } from '@mui/material';
import cls from 'classnames';
import High from 'public/Assets/Svgs/high.svg';
import Medium from 'public/Assets/Svgs/medium.svg';
import Low from 'public/Assets/Svgs/low.svg';

function CalendarEvent(props) {

    const {
        title,
        event: {
            type,
            value,
        }
    } = props

    const {
        palette: {
            text,
            event,
        }
    } = useTheme()


    let background
    if (type == "high")
        background = event.high
    else if (type == "medium")
        background = event.medium
    else
        background = event.low

    return (
        <Box
            className={cls(
                'border-red-700', 'border-0',
                'p-1',
                'pl-2',
                'rounded-md',
                'flex',
                'items-center',
            )}
            sx={{
                background,
            }}
        >
            {type == "high" &&
                <High
                    height={15}
                    width={15}
                />
            }
            {type == "medium" &&
                <Medium
                    height={15}
                    width={15}
                />
            }
            {type == "low" &&
                <Low
                    height={15}
                    width={15}
                />
            }
            <Typography
                variant='body2'
                sx={{
                    color: text.contrastText,
                    ml: 0.5,
                }}
            >
                {title}
            </Typography>
        </Box>
    )
}

export default CalendarEvent