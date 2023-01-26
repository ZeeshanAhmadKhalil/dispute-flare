import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import {
    Box,
    Divider,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import { setAddTeamDialog } from '@Screens/Team/Store/teamsSlice';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import cls from 'classnames'
import styles from './AddFlowDialog.module.scss'
import { useForm } from 'react-hook-form';
import AddTeamForm from './AddTeamForm/AddTeamForm';
import AddTeamActions from './AddTeamActions';
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

function AddTeamDialog(props) {

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
        addTeamDialog
    } = useSelector(state => state.teams)

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
            onClose={() => dispatch(setAddTeamDialog(false))}
            actionButtons={
                <AddTeamActions
                    handleSubmit={handleSubmit}
                    onClose={() =>
                        dispatch(setAddTeamDialog(false))
                    }
                />
            }
            open={addTeamDialog}
            closeBtnText="Team"
            title={"Add Team"}
        >
            <Container>
                <Typography
                    color="text.xxGrey"
                    variant='subtitle2'
                    className={cls(
                        styles.formDesc
                    )}
                >
                    {"Create your new team"}
                </Typography>
                <Divider
                    sx={{
                        backgroundColor: tableSeparator?.light
                    }}
                />
                <AddTeamForm
                    watch={watch}
                    register={register}
                    control={control}
                    errors={errors}
                />

            </Container>
        </RightDialogLayout >
    );
}

export default AddTeamDialog