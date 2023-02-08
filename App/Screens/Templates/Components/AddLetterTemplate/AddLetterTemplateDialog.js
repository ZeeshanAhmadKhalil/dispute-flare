import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import {
    Box,
    Divider,
    styled, useTheme
} from '@mui/material';
import { setAddLetterTemplateDialog } from '@Screens/Templates/Store/templatesSlice';
import { useForm } from 'react-hook-form';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import AddLetterTemplate from './AddLetterTemplate';
import AddTemplateAction from './AddTemplateAction';

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

function AddLetterTemplateDialog() {

    const defaultValues = {
        title: null,
        category: null,
        type: null,
        keys: [],
        details: null,
    }

    const dispatch = useDispatch()
    const {
        palette: {
            tableSeparator
        }
    } = useTheme()

    const {

    } = useSelector(state => state.shared)
    const {
        addLetterTemplateDialog
    } = useSelector(state => state.templates)

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

    return (
        <RightDialogLayout
            onClose={() => dispatch(setAddLetterTemplateDialog(false))}
            actionButtons={
                <AddTemplateAction
                    handleSubmit={handleSubmit}
                    onClose={() =>
                        dispatch(setAddLetterTemplateDialog(false))
                    }
                />
            }
            open={addLetterTemplateDialog}
            closeBtnText="Template"
            title={"Add Letter Template"}
        >
            <Container>
                <Divider
                    sx={{
                        backgroundColor: tableSeparator?.light
                    }}
                />
                <AddLetterTemplate
                    watch={watch}
                    register={register}
                    control={control}
                    errors={errors}
                    setValue={setValue}
                />
            </Container>
        </RightDialogLayout >
    );
}

export default AddLetterTemplateDialog