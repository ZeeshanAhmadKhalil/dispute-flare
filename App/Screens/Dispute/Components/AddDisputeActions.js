import Button from '@Components/Button/Button';
import {
    Box, useTheme
} from '@mui/material';
import cls from 'classnames';
import { useDispatch } from 'react-redux';
import {
    setDisputeDialog,
    setFollowUpDialog
} from '../Store/disputeSlice';

import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const MyDoc = () => {

    <Document>
        <Page>

            hello
        </Page>
    </Document>
}

function AddDisputeActions(props) {

    const {
        onClose,
        handleSubmit,
        currentStep,
        setCurrentStep,
        totalSteps,
    } = props || {}

    const {
        palette: {
            text: {
                grey,
            },
        }
    } = useTheme()

    const dispatch = useDispatch()

    const handleCreateDispute = handleSubmit((data) => {

        console.log("data===>", data)
        dispatch(setDisputeDialog(false))
        dispatch(setFollowUpDialog(true))
    })

    const handleNext = () => {

        setCurrentStep(prev => {
            if (prev == totalSteps)
                return prev
            return prev + 1
        })
    }
    const handlePrev = () => {

        setCurrentStep(prev => {
            if (prev == 0)
                return prev
            return prev - 1
        })
    }

    return (
        <Box
            className={cls(
                'flex',
                'flex-1',
                'justify-between',
            )}
            sx={{
                border: '0px solid red',
            }}
        >
            <Box
                className={cls(
                    'flex'
                )}
                sx={{
                    border: '0px solid red',
                }}
            >
                {currentStep == totalSteps ?
                    <Button
                        onClick={handleCreateDispute}
                        color={"primary"}
                        style={{
                            borderRadius: 3,
                            paddingLeft: 20,
                            paddingRight: 20,
                            color: grey,
                            fontWeight: 'bold',
                        }}
                    >
                        CREATE DISPUTE
                    </Button>
                    :
                    <Button
                        onClick={handleNext}
                        color={"primary"}
                        style={{
                            borderRadius: 3,
                            paddingLeft: 20,
                            paddingRight: 20,
                            color: grey,
                            fontWeight: 'bold',
                        }}
                    >
                        NEXT
                    </Button>
                }
                {currentStep == 0 ?
                    <Button
                        color={"text"}
                        onClick={onClose}
                        disableElevation
                        style={{
                            color: grey,
                            fontWeight: 'bold',
                            marginLeft: 10,
                        }}
                    >
                        CLOSE
                    </Button>
                    :
                    <Button
                        variant="outlined"
                        color={"outlinedBtn"}
                        onClick={handlePrev}
                        disableElevation
                        style={{
                            color: grey,
                            fontWeight: 'bold',
                            marginLeft: 10,
                        }}
                    >
                        PREVIOUS
                    </Button>

                }
            </Box>
            {currentStep == totalSteps &&
                <Box
                    className={cls(
                        'flex'
                    )}
                    sx={{
                        border: '0px solid red',
                    }}
                >
                    <Button
                        variant="outlined"
                        color={"outlinedBtn"}
                        onClick={null}
                        disableElevation
                        style={{
                            color: grey,
                            fontWeight: 'bold',
                            marginLeft: 10,
                        }}
                    >
                        VIEW DISPUTE LETTER
                    </Button>
                    <Button
                        variant="outlined"
                        color={"outlinedBtn"}
                        onClick={null}
                        disableElevation
                        style={{
                            color: grey,
                            fontWeight: 'bold',
                            marginLeft: 10,
                        }}
                    >
                        DOWNLOAD AS PDF
                    </Button>
                    <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
                        {({ blob, url, loading, error }) =>
                            loading ? 'Loading document...' : 'Download now!'
                        }
                    </PDFDownloadLink>
                </Box>
            }
        </Box>
    )
}

export default AddDisputeActions