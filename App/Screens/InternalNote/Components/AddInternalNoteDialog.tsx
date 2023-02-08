import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import {
    Box,
    Divider,
    styled,
    useTheme
} from '@mui/material';
import { useForm } from 'react-hook-form';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import { setAddInternalNoteDialog } from '../Store/internalNoteSlice';
import AddInternalNote from './AddInternalNote';
import AddInternalNoteActions from './AddInternalNoteActions';

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

function AddInternalNoteDialog() {

    const defaultValues = {
        description: null,
        attachment: null,
    }

    const dispatch = useDispatch()
    const {
        palette: {
            tableSeparator
        }
    }: any = useTheme()

    const {
        addInternalNoteDialog
    } = useSelector((state: any) => state.internalNote)

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
                dispatch(setAddInternalNoteDialog(false))
            }
            actionButtons={
                <AddInternalNoteActions
                    handleSubmit={handleSubmit}
                    onClose={() =>
                        dispatch(setAddInternalNoteDialog(false))
                    }
                />
            }
            open={addInternalNoteDialog}
            closeBtnText="NOTES"
            title={"Add Notes"}
        >
            <Container>
                <Divider
                    sx={{
                        backgroundColor: tableSeparator?.light
                    }}
                />
                <AddInternalNote
                    watch={watch}
                    register={register}
                    control={control}
                    errors={errors}
                />
            </Container>
        </RightDialogLayout >
    );
}

export default AddInternalNoteDialog