import Button from '@Components/Button/Button';
import {
    Box, useTheme
} from '@mui/material';
import cls from 'classnames';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useDispatch } from 'react-redux';
import {
    setDisputeDialog,
    setFollowUpDialog
} from '../Store/disputeSlice';

function AddDisputeActions(props) {

    const {
        onClose,
        handleSubmit,
        currentStep,
        setCurrentStep,
        totalSteps,
        watchSteps,
        bureauList
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
    const handlePrint = () => {

        let overviewWrapper = document.querySelector("#overview-wrapper")

        console.log("overviewWrapper===>", overviewWrapper)
        console.log("overviewWrapper.scrollWidth===>", overviewWrapper.scrollWidth)
        console.log("overviewWrapper.scrollHeight===>", overviewWrapper.scrollHeight)

        html2canvas(overviewWrapper, {
            windowWidth: overviewWrapper.scrollWidth + 550,
            windowHeight: overviewWrapper.scrollHeight
        }).then(canvas => {

            console.log("canvas===>", canvas)

            const imgData = canvas.toDataURL('image/png');

            console.log("imgData===>", imgData)

            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save("download.pdf");
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
                        onClick={() => handlePrint()}
                        disableElevation
                        style={{
                            color: grey,
                            fontWeight: 'bold',
                            marginLeft: 10,
                        }}
                    >
                        DOWNLOAD AS PDF
                    </Button>
                </Box>
            }
        </Box>
    )
}

export default AddDisputeActions