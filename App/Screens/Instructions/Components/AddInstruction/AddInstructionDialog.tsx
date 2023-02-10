import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import {
    Box,
    Divider,
    styled, useTheme
} from '@mui/material';
import { setAddInstructionsDialog } from '@Screens/Instructions/Store/instructionsSlice';
import { useForm } from 'react-hook-form';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import AddInstructionForm from './AddInstruction/AddInstructionForm';
import AddInstructionActions from './AddInstructionActions';

const Container = styled(Box)(({ theme }) => {

    const {
        dialog: {
            main
        }
    }: any = theme.palette || {}

    return {
        backgroundColor: main,
        padding: 20,
        marginTop: 10,
    }
})

function AddInstructionDialog() {

    const defaultValues = {
        firstName: null,
        lastName: null,
        ssnNumber: null,
        emailId: null,
        mobileNo: null,
        phoneNo: null,
        website: null,
        address: null,
        city: null,
        state: null,
        country: null,
        zipCode: null,
        hasPreviousAddress: null,
        previousAddress: null,
        previousCity: null,
        previousState: null,
        previousCountry: null,
        previousZipCode: null,
        provider: null,
        username: null,
        password: null,
        ssn: null,
        hasAttachmentAgreement: null,
        attachmentAgreement: null,
        requiredDocuments: [],
        otherRequiredDocument: null
    }

    const dispatch = useDispatch()
    const {
        palette: {
            tableSeparator
        }
    }: any = useTheme()

    const {

    } = useSelector((state: any) => state.shared)
    const {
        addInstructionsDialog
    } = useSelector((state: any) => state.instructions)

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
            onClose={() => dispatch(setAddInstructionsDialog(false))}
            actionButtons={
                <AddInstructionActions
                    handleSubmit={handleSubmit}
                    onClose={() =>
                        dispatch(setAddInstructionsDialog(false))
                    }
                />
            }
            open={addInstructionsDialog}
            closeBtnText="Reason"
            title={"Add Instruction"}
        >
            <Container>
                <Divider
                    sx={{
                        backgroundColor: tableSeparator?.light
                    }}
                />
                <AddInstructionForm
                    watch={watch}
                    register={register}
                    control={control}
                    errors={errors}
                />

            </Container>
        </RightDialogLayout >
    );
}

export default AddInstructionDialog