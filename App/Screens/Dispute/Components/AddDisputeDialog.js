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

    const steps = [
        "Collections",
        "Late Payment",
        "Inquiries",
        "Chargeoffs",
        "Others",
    ]

    const defaultValues = {
        provider: null,
        username: null,
        password: null,
        ssn: null,
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

    return (
        <RightDialogLayout
            onClose={() =>
                dispatch(setDisputeDialog(false))
            }
            actionButtons={
                <AddDisputeActions
                    handleSubmit={handleSubmit}
                    onClose={() =>
                        dispatch(setDisputeDialog(false))
                    }
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    totalSteps={steps.length}
                />
            }
            open={addDisputeDialog}
            closeBtnText="DISPUTE"
            title={"Add Dispute"}
        >
            <Container>
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
                    currentStep={currentStep}
                    steps={steps}
                />
            </Container>
        </RightDialogLayout >
    );
}

export default AddDisputeDialog