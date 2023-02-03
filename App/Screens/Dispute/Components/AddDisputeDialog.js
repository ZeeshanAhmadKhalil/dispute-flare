import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import {
    Box, Divider,
    styled, Typography, useTheme
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import { setDisputeDialog } from '../Store/disputeSlice';
import AddDisputeActions from './AddDisputeActions';
import Overview from './CollapsableForm/Overview';
import SelectAnAccount from './CollapsableForm/SelectAnAccount';

const Container = styled(Box)(({ theme }) => {

    const {
        dialog: {
            main
        }
    } = theme.palette || {}

    return {
        backgroundColor: main,
        padding: 20,
        marginTop: 10,
    }
})

function AddDisputeDialog(props) {

    const bureauList = [
        { label: "TU", value: 1 },
        { label: "EXP", value: 2 },
        { label: "EQFX", value: 3 },
    ]

    const steps = [
        "Collections",
        "Late Payment",
        "Inquiries",
        "Chargeoffs",
        "Others",
    ]

    const defaultValues = {
        steps: [
            {
                name: "Collections",
                creditors: [
                    {
                        name: "HDEKE (Original Creditor: 09)",
                        reason: null,
                        bureaus: [],
                    },
                    {
                        name: "EISD (Original Creditor: 10A)",
                        reason: null,
                        bureaus: [],
                    },
                    {
                        name: "EWISD (Original Creditor: 11)",
                        reason: null,
                        bureaus: [],
                    },
                    {
                        name: "JEW (Original Creditor: 12 AT T)",
                        reason: null,
                        bureaus: [],
                    },
                ]
            },
            {
                name: "Late Payment",
                creditors: [
                    {
                        name: "HDEKE (Original Creditor: 09)",
                        reason: null,
                        bureaus: [],
                    },
                    {
                        name: "EISD (Original Creditor: 10A)",
                        reason: null,
                        bureaus: [],
                    },
                    {
                        name: "EWISD (Original Creditor: 11)",
                        reason: null,
                        bureaus: [],
                    },
                    {
                        name: "JEW (Original Creditor: 12 AT T)",
                        reason: null,
                        bureaus: [],
                    },
                ]
            },
            {
                name: "Inquiries",
                creditors: [
                    {
                        name: "HDEKE (Original Creditor: 09)",
                        reason: null,
                        bureaus: [],
                    },
                    {
                        name: "EISD (Original Creditor: 10A)",
                        reason: null,
                        bureaus: [],
                    },
                    {
                        name: "EWISD (Original Creditor: 11)",
                        reason: null,
                        bureaus: [],
                    },
                    {
                        name: "JEW (Original Creditor: 12 AT T)",
                        reason: null,
                        bureaus: [],
                    },
                ]
            },
            {
                name: "Chargeoffs",
                creditors: [
                    {
                        name: "HDEKE (Original Creditor: 09)",
                        reason: null,
                        bureaus: [],
                    },
                    {
                        name: "EISD (Original Creditor: 10A)",
                        reason: null,
                        bureaus: [],
                    },
                    {
                        name: "EWISD (Original Creditor: 11)",
                        reason: null,
                        bureaus: [],
                    },
                    {
                        name: "JEW (Original Creditor: 12 AT T)",
                        reason: null,
                        bureaus: [],
                    },
                ]
            },
            {
                name: "Others",
                creditors: [
                    {
                        name: "HDEKE (Original Creditor: 09)",
                        reason: null,
                        bureaus: [],
                    },
                    {
                        name: "EISD (Original Creditor: 10A)",
                        reason: null,
                        bureaus: [],
                    },
                    {
                        name: "EWISD (Original Creditor: 11)",
                        reason: null,
                        bureaus: [],
                    },
                    {
                        name: "JEW (Original Creditor: 12 AT T)",
                        reason: null,
                        bureaus: [],
                    },
                ]
            },
        ]
    }

    const dispatch = useDispatch()
    const {
        palette: {
            tableSeparator,
            text,
        }
    } = useTheme()

    const {
    } = useSelector(state => state.shared)
    const {
        addDisputeDialog
    } = useSelector(state => state.dispute)

    const [currentStep, setCurrentStep] = useState(0)

    const {
        register,
        control,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        defaultValues,
    });

    let watchSteps = watch('steps')

    return (
        <RightDialogLayout
            onClose={() =>
                dispatch(setDisputeDialog(false))
            }
            actionButtons={
                <AddDisputeActions
                    reset={reset}
                    handleSubmit={handleSubmit}
                    onClose={() =>
                        dispatch(setDisputeDialog(false))
                    }
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}

                    totalSteps={steps.length}
                    watchSteps={watchSteps}
                    bureauList={bureauList}
                />
            }
            open={addDisputeDialog}
            closeBtnText="DISPUTE"
            title={"Add Dispute"}
        >
            <Container>
                {currentStep == steps?.length ?
                    <Overview
                        watchSteps={watchSteps}
                        bureauList={bureauList}
                    />
                    :
                    <>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 'bold',
                                }}
                            >
                                Select an Account
                            </Typography>
                            <Typography
                                variant='subtitle2'
                                sx={{
                                    fontWeight: 'bold',
                                    color: text.link,
                                    mb: 1,
                                    cursor: 'pointer',
                                }}
                            >
                                View Complete Report
                            </Typography>
                        </Box>
                        <Divider
                            sx={{
                                backgroundColor: tableSeparator?.light
                            }}
                        />
                        <SelectAnAccount
                            register={register}
                            control={control}
                            errors={errors}
                            watch={watch}
                            currentStep={currentStep}
                            steps={steps}
                            bureauList={bureauList}
                        />
                    </>
                }
            </Container>
        </RightDialogLayout >
    );
}

export default AddDisputeDialog