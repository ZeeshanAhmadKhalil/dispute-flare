import Button from '@Components/Button/Button';
import {
    Box, useTheme
} from '@mui/material';
import { useRef } from 'react';
import cls from 'classnames';
import jsPDF from 'jspdf';
import { useDispatch } from 'react-redux';
import { useReactToPrint } from "react-to-print";
import {
    setDisputeDialog,
    setFollowUpDialog
} from '../Store/disputeSlice';
import Overview from './CollapsableForm/Overview';

function AddDisputeActions(props) {

    const componentRef = useRef(null);
    const OverviewRef = useRef(null);
    const handleGeneratePdf = async () => {
        const doc = new jsPDF({
            format: 'a4',
            unit: 'px',
        });

        // Adding the fonts.
        doc.setFont('Inter-Regular', 'normal');

        await doc.html(OverviewRef.current, {
            async callback(doc) {
                await doc.save('document');
            },
        });
    };

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

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


            <div>
                <button className="button" onClick={handleGeneratePdf}>
                    Generate PDF
                </button>
                <div style={{ display: "none" }}>
                    <div ref={OverviewRef}>
                        <Overview
                            watchSteps={watchSteps}
                            bureauList={bureauList}
                        />
                    </div>
                </div>
            </div>

        </Box>
    )
}

export default AddDisputeActions