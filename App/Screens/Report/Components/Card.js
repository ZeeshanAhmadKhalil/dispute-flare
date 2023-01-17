import SpeedOMeter from '@Components/SpeedoMeter/SpeedOMeter';
import {
    Box, Typography, useTheme
} from '@mui/material';
import cls from 'classnames';
import UpArrow from 'public/Assets/Svgs/up-arrow.svg';
import {
    ShadowCard
} from './StyledComponents';

function Card({
    name,
    value,
    newPoints,
}) {

    const {
        palette: {
            text: {
                contrastText,
            },
            active,
            cancelled,
        }
    } = useTheme()

    return (
        <ShadowCard
            className={cls(
                'flex',
                'flex-col',
                'w-[250px]',
                'items-center',
                'mt-5',
                'p-3',
                'pt-10'
            )}
        >
            <SpeedOMeter
                value={value}
            />
            <Box
                className={cls(
                    'flex',
                    'items-center',
                    'border-red-700 border-0',
                    'mt-5',
                )}
            >
                <Box
                    sx={{
                        transform: newPoints >= 0 ?
                            null
                            :
                            `rotate(180deg)`,
                    }}
                >
                    <UpArrow
                        color={
                            newPoints >= 0 ?
                                active.main
                                :
                                cancelled.main
                        }
                        height={15}
                        width={15}
                    />
                </Box>
                <Typography
                    variant='body1'
                    color={
                        newPoints >= 0 ?
                            active.main
                            :
                            cancelled.main
                    }
                    sx={{
                        fontWeight: 'bold',
                        marginLeft: 1,
                    }}
                >
                    {newPoints}
                </Typography>
            </Box>
            <Typography
                variant='h6'
                color={contrastText}
                sx={{
                    fontWeight: 'bold',
                    marginTop: 3,
                }}
            >
                {name}
            </Typography>
        </ShadowCard >
    )
}

export default Card