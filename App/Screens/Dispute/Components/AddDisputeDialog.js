import PrintDialog from '@Components/PrintDialog/PrintDialog';
import DefaultCell from '@Components/Table/Components/DefaultCell/DefaultCell';
import SecretCell from '@Components/Table/Components/SecretCell/SecretCell';
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

function AddDisputeDialog({
    columns,
    rows,
}) {

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
                        reason: 'Unverified account',
                        bureaus: [],
                    },
                    {
                        name: "EISD (Original Creditor: 10A)",
                        reason: 'Unverified account',
                        bureaus: [],
                    },
                    {
                        name: "EWISD (Original Creditor: 11)",
                        reason: 'Unverified account',
                        bureaus: [],
                    },
                    {
                        name: "JEW (Original Creditor: 12 AT T)",
                        reason: 'Unverified account',
                        bureaus: [],
                    },
                ]
            },
            {
                name: "Late Payment",
                creditors: [
                    {
                        name: "HDEKE (Original Creditor: 09)",
                        reason: 'Unverified account',
                        bureaus: [],
                    },
                    {
                        name: "EISD (Original Creditor: 10A)",
                        reason: 'Unverified account',
                        bureaus: [],
                    },
                    {
                        name: "EWISD (Original Creditor: 11)",
                        reason: 'Unverified account',
                        bureaus: [],
                    },
                    {
                        name: "JEW (Original Creditor: 12 AT T)",
                        reason: 'Unverified account',
                        bureaus: [],
                    },
                ]
            },
            {
                name: "Inquiries",
                creditors: [
                    {
                        name: "HDEKE (Original Creditor: 09)",
                        reason: 'Unverified account',
                        bureaus: [],
                    },
                    {
                        name: "EISD (Original Creditor: 10A)",
                        reason: 'Unverified account',
                        bureaus: [],
                    },
                    {
                        name: "EWISD (Original Creditor: 11)",
                        reason: 'Unverified account',
                        bureaus: [],
                    },
                    {
                        name: "JEW (Original Creditor: 12 AT T)",
                        reason: 'Unverified account',
                        bureaus: [],
                    },
                ]
            },
            {
                name: "Chargeoffs",
                creditors: [
                    {
                        name: "HDEKE (Original Creditor: 09)",
                        reason: 'Unverified account',
                        bureaus: [],
                    },
                    {
                        name: "EISD (Original Creditor: 10A)",
                        reason: 'Unverified account',
                        bureaus: [],
                    },
                    {
                        name: "EWISD (Original Creditor: 11)",
                        reason: 'Unverified account',
                        bureaus: [],
                    },
                    {
                        name: "JEW (Original Creditor: 12 AT T)",
                        reason: 'Unverified account',
                        bureaus: [],
                    },
                ]
            },
            {
                name: "Others",
                creditors: [
                    {
                        name: "HDEKE (Original Creditor: 09)",
                        reason: 'Unverified account',
                        bureaus: [],
                    },
                    {
                        name: "EISD (Original Creditor: 10A)",
                        reason: 'Unverified account',
                        bureaus: [],
                    },
                    {
                        name: "EWISD (Original Creditor: 11)",
                        reason: 'Unverified account',
                        bureaus: [],
                    },
                    {
                        name: "JEW (Original Creditor: 12 AT T)",
                        reason: 'Unverified account',
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
        setValue,
    } = useForm({
        mode: 'onChange',
        defaultValues,
    });

    let watchSteps = watch('steps')

    const tables = watchSteps.map(
        (item, key) => {

            const {
                name,
                creditors,
            } = item

            rows = creditors.map((subItem, key) => {

                const {
                    name,
                    reason,
                    bureaus,
                } = subItem

                let bureausString = []

                bureauList.map(obj => {

                    if (bureaus.includes(obj.value))
                        bureausString.push(obj.label)
                })

                bureausString = bureausString.join(", ")

                return {
                    ...rows[key],
                    bureaus: bureausString,
                    reason,

                }
            })

            return {
                name,
                rows,
            }
        })

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
                        columns={columns}
                        tables={tables}
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
                            watchSteps={watchSteps}
                            setValue={setValue}
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
            <PrintDialog
                columns={columns}
                tables={tables}
            />
        </RightDialogLayout >
    );
}

export default AddDisputeDialog