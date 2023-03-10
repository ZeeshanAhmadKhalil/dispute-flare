import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import {
    Box,
    DialogContent,
    DialogTitle,
    Divider,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import { setAddClientDialog } from '@Screens/Client/Store/clientsSlice';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import cls from 'classnames'
import styles from './AddClientDialog.module.scss'
import ClientInformation from './CollapsableForms/ClientInformation';
import { useForm } from 'react-hook-form';
import AddClientActions from './AddClientActions';
import CreditMonitoringInformation from './CollapsableForms/CreditMonitoringInformation';
import PortalSetting from './CollapsableForms/PortalSetting';
import Other from './CollapsableForms/Other';

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

function AddClientDialog() {

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
        addClientDialog
    } = useSelector((state: any) => state.clients)

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
            onClose={() => dispatch(setAddClientDialog(false))}
            actionButtons={
                <AddClientActions
                    handleSubmit={handleSubmit}
                    onClose={() =>
                        dispatch(setAddClientDialog(false))
                    }
                />
            }
            open={addClientDialog}
            closeBtnText="CLIENT"
            title={"Add Client"}
        >
            <Container>
                <Typography
                    color="text.xxGrey"
                    variant='subtitle2'
                    className={cls(
                        styles.formDesc
                    )}
                >
                    {"You can add a minimum of just the client's name and their email address when adding them. Clients can provide the other information themselves when completing their onboarding process."}
                </Typography>
                <Divider
                    sx={{
                        backgroundColor: tableSeparator?.light
                    }}
                />
                <ClientInformation
                    watch={watch}
                    register={register}
                    control={control}
                    errors={errors}
                />
                <CreditMonitoringInformation
                    watch={watch}
                    register={register}
                    control={control}
                    errors={errors}
                />
                <PortalSetting
                    watch={watch}
                    register={register}
                    control={control}
                    errors={errors}
                />
                <Other
                    watch={watch}
                    register={register}
                    control={control}
                    errors={errors}
                />
            </Container>
        </RightDialogLayout >
    );
}

export default AddClientDialog