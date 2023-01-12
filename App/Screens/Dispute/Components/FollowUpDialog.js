import { Box, Checkbox, FormControlLabel, ThemeProvider, useTheme } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import QuestionMark from 'public/Assets/Svgs/question-mark.svg';
import cls from 'classnames'
import { lightTheme } from '@Config/theme';
import { useState } from 'react';
import Button from '@Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setFollowUpDialog } from '../Store/disputeSlice';

function FollowUpDialog(props) {

    const {
        palette: {
            text: {
                main,
                grey,
                contrastText,
                lighter,
            },
        }
    } = useTheme()

    const dispatch = useDispatch()

    const {
        followUpDialog,
    } = useSelector(state => state.dispute)

    const [dontChange, setDontChange] = useState(false)

    return (
        <ThemeProvider theme={lightTheme}>
            <Dialog
                onClose={() =>
                    dispatch(setFollowUpDialog(false))
                }
                open={followUpDialog}
                maxWidth="xs"
            >
                <Box
                    className={cls(
                        'border-red-700 border-0',
                        'flex',
                        'items-center',
                        'flex-col',
                        'p-8'
                    )}
                >
                    <Box
                        className={cls(
                            'border-red-700 border-0',
                            'flex',
                            'justify-center',
                            'items-center',
                            'h-[80px]',
                            'w-[80px]',
                            'shadow-2xl',
                            'rounded-full',
                            'mb-4'
                        )}
                    >
                        <QuestionMark
                            height={65}
                            width={65}
                        />
                    </Box>
                    <Typography
                        variant='h6'
                        sx={{
                            fontWeight: 'bold',
                            lineHeight: 1.2,
                            textAlign: 'center'
                        }}
                        color={contrastText}
                    >
                        Add a task to follow-up on these disputes after 30 days
                    </Typography>
                    <Box
                        className={cls(
                            'border-red-700 border-0',
                            'flex',
                            'w-[100%]',
                            'justify-start',
                            'pl-4'
                        )}
                    >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="check-box"
                                    checked={dontChange}
                                    onChange={() =>
                                        setDontChange(prev => !prev)
                                    }
                                />
                            }
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 18
                                },
                                '& .MuiTypography-root': {
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    color: lighter,
                                },
                            }}
                            label={"Don't show this message again"}
                        />
                    </Box>
                    <Box
                        className={cls(
                            'flex',
                            'justify-center',
                            'border-red-700 border-0',
                            'w-[100%]',
                            'mt-5',
                        )}
                    >
                        <Button
                            onClick={() =>
                                dispatch(setFollowUpDialog(false))
                            }
                            color={"primary"}
                            style={{
                                borderRadius: 3,
                                paddingLeft: 20,
                                paddingRight: 20,
                                color: grey,
                                fontWeight: 'bold',
                                marginRight: 20,
                            }}
                        >
                            YES
                        </Button>
                        <Button
                            color={"outlinedBtn"}
                            onClick={() =>
                                dispatch(setFollowUpDialog(false))
                            }
                            style={{
                                borderRadius: 3,
                                paddingLeft: 20,
                                paddingRight: 20,
                                color: grey,
                                fontWeight: 'bold',
                                marginLeft: 20,
                            }}
                        >
                            <Box
                                sx={{
                                    color: main,
                                }}
                            >
                                NO
                            </Box>
                        </Button>
                    </Box>
                </Box>
            </Dialog>
        </ThemeProvider>
    );
}

export default FollowUpDialog