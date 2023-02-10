import {
    Box,
    Typography,
    useTheme
} from '@mui/material';
import cls from 'classnames';

function StatsTile({
    icon,
    name,
    value,
    styles,
    valueColor,
    nameColor = null,
}: any) {

    const {
        palette: {
            text: {
                xGrey1
            },
            background: {
                light1,
            }
        }
    }: any = useTheme()

    return (
        <Box
            className={cls(
                'flex',
                'flex-col',
                'w-[280px]',
                'mt-5',
                'p-4',
                'rounded-lg',
            )}
            sx={{
                background: light1,
                ...styles,
            }}
        >
            <Box
                className={cls(
                    'border-red-700', 'border-0',
                    'flex',
                    'justify-between',
                    'items-center',
                )}
            >
                {icon}
                <Box
                    className={cls(
                        'border-red-700', 'border-0',
                        'flex',
                        'flex-col',
                        'items-end'
                    )}
                >
                    <Typography
                        color={nameColor ?
                            nameColor
                            :
                            xGrey1
                        }
                        variant="h6"
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant="h5"
                        color={valueColor}
                        sx={{
                            fontWeight: 900,
                            marginTop: 1.5,
                        }}
                    >
                        {value}
                    </Typography>
                </Box>
            </Box>
        </Box >
    )
}

export default StatsTile