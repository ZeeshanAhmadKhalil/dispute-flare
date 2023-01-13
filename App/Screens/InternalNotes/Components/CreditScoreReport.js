import { darkTheme } from '@Config/theme';
import CircularProgress from '@mui/joy/CircularProgress';
import { Box, Divider, Grid, Typography, useTheme } from '@mui/material';
import {
    Experimental_CssVarsProvider as CssVarsProvider
} from '@mui/material/styles';
import cls from 'classnames';
import Hi from 'public/Assets/Svgs/hi.svg';
import UpArrow from 'public/Assets/Svgs/up-arrow.svg';
import React from 'react';
import { Container, ShadowCard } from './StyledComponents';

function CreditScoreReport() {

    const {
        palette: {
            text: {
                lighter1,
                lighter2,
                secondarish,
                contrastText,
            },
            tableSeparator: {
                light,
            },
            active,
            inactive,
        }
    } = useTheme()

    return (
        <CssVarsProvider theme={darkTheme}>
            <Container>
                <Box
                    className={cls(
                        'border-red-700 border-0',
                        'flex',
                        'justify-center',
                    )}
                >
                    <Typography
                        variant='h6'
                        className={cls(
                        )}
                        sx={{
                            fontWeight: 'bold'
                        }}
                        color={secondarish}
                    >
                        CREDIT SCORE REPORT
                    </Typography>
                </Box>
                <Box
                    className={cls(
                        'border-red-700 border-0',
                    )}
                >
                    <Box
                        className={cls(
                            'flex',
                            'border-red-700 border-0',
                        )}
                    >
                        <Typography
                            sx={{
                                fontWeight: 500
                            }}
                            variant='h6'
                            color={secondarish}
                        >
                            Hi, itachi uchiha!
                        </Typography>
                        <Hi
                            height={25}
                            width={25}
                        />
                    </Box>
                    <Typography
                        sx={{
                            fontWeight: 700
                        }}
                        variant='subtitle2'
                        color={lighter1}
                    >
                        Here is your Score Report as 08/10/2022
                    </Typography>
                </Box>
                <Box
                    className={cls(
                        'flex',
                        'items-center',
                        'justify-between',
                        'mt-10'
                    )}
                >
                    <Typography
                        sx={{
                            fontWeight: 500
                        }}
                        variant='h6'
                        color={secondarish}
                    >
                        Your Credit Score
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 700
                        }}
                        variant='body2'
                        color={lighter2}
                    >
                        08/10/2022
                    </Typography>
                </Box>
                <Divider
                    sx={{
                        backgroundColor: light
                    }}
                />
                <Grid
                    container
                >
                    <Grid
                        item
                        xs="4"
                        className={cls(
                            'flex',
                            'justify-center'
                        )}
                    >
                        <ShadowCard
                            className={cls(
                                'flex',
                                'flex-col',
                                'w-[250px]',
                                'items-center',
                                'mt-5',
                                'p-3'
                            )}
                        >
                            <Box
                                className={cls(
                                    'border-red-700 border-2',
                                )}
                            >
                                {/* <CircularProgress
                                    variant='outlined'
                                    determinate
                                    size="lg"
                                    value={20}
                                /> */}
                            </Box>
                            <Box
                                className={cls(
                                    'flex',
                                    'items-center',
                                    'border-red-700 border-0',
                                )}
                            >
                                <UpArrow
                                    height={15}
                                    width={15}
                                />
                                <Typography
                                    variant='body1'
                                    color={active.main}
                                    sx={{
                                        fontWeight: 'bold',
                                        marginLeft: 1,
                                    }}
                                >
                                    0 pt
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
                                TRANSUNION
                            </Typography>
                        </ShadowCard>
                    </Grid>
                </Grid>
            </Container>
        </CssVarsProvider>
    )
}

export default CreditScoreReport