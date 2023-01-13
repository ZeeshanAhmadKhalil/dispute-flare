import { compare } from '@Config/helper';
import {
    Box,
    Typography,
    useTheme
} from '@mui/material';
import cls from 'classnames';
import {
    buildStyles, CircularProgressbarWithChildren
} from 'react-circular-progressbar';
import RadialSeparators from './RadialSeparators';
import CircuarLabels from './RadialSeparators copy';

function SpeedOMeter({
    value
}) {

    const {
        palette: {
            text: {
                contrastText,
            },
            background,
            background: {
                main,
            },
            active,
            rating,
        }
    } = useTheme()
    const labels = [
        {
            index: 0,
            value: 580,
            text: "Normal",
            color: rating.normal,
        },
        {
            index: 1,
            value: 640,
            text: "Good",
            color: rating.good,
        },
        {
            index: 2,
            value: 700,
            text: "Excellent",
            color: rating.excellent,
        },
        {
            index: 3,
            value: 850,
            text: "Excellent",
            color: rating.excellent,
        },
        {
            index: 9,
            value: 300,
            text: "Bad",
            color: rating.bad,
        },
    ]

    let totalPoints = parseInt((value - 300) / (850 - 300) * 100)

    let sortedLabels = labels.sort(compare)
    let currentLabel = sortedLabels.find(
        (obj, index) =>
            value >= obj.value
            && value <= sortedLabels[index + 1]?.value
    )

    return (
        <Box
            className={cls(
                'border-red-700 border-0',
                'w-[165px]',
                'h-[165px]',
                'relative',
            )}
        >
            <Box
                className={cls(
                    'border-red-700 border-0',
                    'w-[150px]',
                    'h-[150px]',
                    'absolute',
                    'rounded-full',
                    'flex',
                    'justify-center',
                    'items-center',
                )}
                sx={{
                    backgroundColor: background.light,
                    top: 8,
                    left: 8,
                }}
            >
                <Box
                    className={cls(
                        'rounded-full',
                        'w-[100px]',
                        'h-[100px]',
                        'flex',
                        'justify-center',
                        'items-center',
                    )}
                    sx={{
                        backgroundColor: background.main
                    }}
                >
                    <Box
                        className={cls(
                            'rounded-full',
                            'w-[85px]',
                            'h-[85px]',
                            'border-red-700 border-2',
                            'flex',
                            'flex-col',
                            'justify-center',
                            'items-center',
                        )}
                        sx={{
                            backgroundColor: background.main,
                            borderColor: background.light,
                        }}
                    >
                        <Typography
                            variant='h6'
                            color={contrastText}
                            sx={{
                                fontWeight: 'bold',
                            }}
                        >
                            {value}
                        </Typography>
                        <Typography
                            variant='subtitle2'
                            color={currentLabel?.color}
                            sx={{
                                fontWeight: 'bold',
                            }}
                        >
                            {currentLabel?.text}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <CircularProgressbarWithChildren
                value={totalPoints}
                strokeWidth={5}
                circleRatio={0.5}
                styles={buildStyles({
                    rotation: -0.25,
                    pathColor: currentLabel?.color,
                    trailColor: main,
                })}
            >
                <CircuarLabels
                    count={12}
                    labels={labels}
                    style={{
                        background: main,
                        width: "2px",
                        height: `8px`
                    }}
                />
                <RadialSeparators
                    count={12}
                    style={{
                        background: main,
                        width: "2px",
                        height: `8px`
                    }}
                />
            </CircularProgressbarWithChildren>
        </Box>
    )
}

export default SpeedOMeter