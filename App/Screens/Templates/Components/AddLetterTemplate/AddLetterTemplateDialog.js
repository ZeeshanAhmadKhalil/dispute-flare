import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import {
    Box,
    Divider,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import { setAddLetterTemplateDialog } from '@Screens/Templates/Store/templatesSlice';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import cls from 'classnames'
import styles from './AddTemplateDialog.module.scss'
import { useForm } from 'react-hook-form';
import AddTemplateAction from './AddTemplateAction';
import AddTemplateForm from './AddLetterTemplate/AddTemplateForm';

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

function AddLetterTemplateDialog(props) {

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
                <Typography
                    color="text.xxGrey"
                    variant='subtitle2'
                    className={cls(
                        styles.formDesc
                    )}
                >
                    {"Create your new letter template"}
                </Typography>
                <Divider
                    sx={{
                        backgroundColor: tableSeparator?.light
                    }}
                />
                <AddTemplateForm
                    watch={watch}
                    register={register}
                    control={control}
                    errors={errors}
                />

            </Container>
        </RightDialogLayout >
    );
}

export default AddLetterTemplateDialog