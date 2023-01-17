import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import {
    Box,
    Divider,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import { setAddReasonDialog } from '@Screens/Reasons/Store/reasonsSlice'
import {
    useDispatch,
    useSelector
} from 'react-redux';
import cls from 'classnames'
import styles from './AddReasonDialog.module.scss'
import { useForm } from 'react-hook-form';
import AddReasonActions from './AddReasonActions';
import AddReasonForm from './AddReason/AddReasonForm'

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

function AddReasonDialog(props) {

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
        addReasonDialog
    } = useSelector(state => state.reasons)

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
            onClose={() => dispatch(setAddReasonDialog(false))}
            actionButtons={
                <AddReasonActions
                    handleSubmit={handleSubmit}
                    onClose={() =>
                        dispatch(setAddReasonDialog(false))
                    }
                />
            }
            open={addReasonDialog}
            closeBtnText="Reason"
            title={"Add a Reason"}
        >
            <Container>
                <Typography
                    color="text.xxGrey"
                    variant='subtitle2'
                    className={cls(
                        styles.formDesc
                    )}
                >
                    {"Add a new Reason"}
                </Typography>
                <Divider
                    sx={{
                        backgroundColor: tableSeparator?.light
                    }}
                />
                <AddReasonForm
                    watch={watch}
                    register={register}
                    control={control}
                    errors={errors}
                />

            </Container>
        </RightDialogLayout >
    );
}

export default AddReasonDialog