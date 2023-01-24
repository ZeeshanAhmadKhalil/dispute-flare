import { Box, Typography } from '@mui/material';
import Repaired from 'public/Assets/Svgs/repaired.svg';
import Negative from 'public/Assets/Svgs/negative.svg';

function ConditionCell(props) {

    const {
        value,
        row: {
            text = null,
        }
    } = props || {}

    return (
        <Box
            sx={{
                display: "flex"
            }}
        >
            {typeof value == "number" ?
                <>
                    {value == 1 ?
                        <>
                            <Repaired
                                heigth={15}
                                width={15}
                            />
                            <Typography
                                variant='body2'
                                sx={{
                                    fontWeight: 'bold',
                                    ml: 1
                                }}
                            >
                                {text ?
                                    text
                                    :
                                    "Repaired"
                                }
                            </Typography>
                        </>
                        :
                        <>
                            <Negative
                                heigth={15}
                                width={15}
                            />
                            <Typography
                                variant='body2'
                                sx={{
                                    fontWeight: 'bold',
                                    ml: 1
                                }}
                            >
                                {text ?
                                    text
                                    :
                                    "Negative"
                                }
                            </Typography>
                        </>
                    }
                </>
                :
                <Typography
                    variant='body2'
                    sx={{
                        fontWeight: 'bold'
                    }}
                >
                    {value}
                </Typography>
            }
        </Box>
    )
}

export default ConditionCell