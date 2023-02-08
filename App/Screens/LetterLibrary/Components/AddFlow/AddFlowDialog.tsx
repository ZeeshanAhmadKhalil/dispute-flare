import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import {
    Box,
    Divider,
    styled, useTheme
} from '@mui/material';
import { setAddFlowDialog } from '@Screens/LetterLibrary/Store/letterlibrarySlice';
import { useForm } from 'react-hook-form';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import AddFlowActions from './AddFlowActions';
import AddFlowForm from './AddFlowForm/AddFlowForm';
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

function AddFlowDialog() {

    const defaultValues = {
        letterFlowName: null,
        itemType: null,
        reason: null,
        bureauFlow: [],
        furnishFlow: [],
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
        addFlowDialog
    } = useSelector((state: any) => state.letterLibrary)

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
            onClose={() => dispatch(setAddFlowDialog(false))}
            actionButtons={
                <AddFlowActions
                    handleSubmit={handleSubmit}
                    onClose={() =>
                        dispatch(setAddFlowDialog(false))
                    }
                />
            }
            open={addFlowDialog}
            closeBtnText="Flow"
            title={"Add a Letter Flow"}
        >
            <Container>
                <Divider
                    sx={{
                        backgroundColor: tableSeparator?.light
                    }}
                />
                <AddFlowForm
                    watch={watch}
                    register={register}
                    control={control}
                    errors={errors}
                />

            </Container>
        </RightDialogLayout >
    );
}

export default AddFlowDialog