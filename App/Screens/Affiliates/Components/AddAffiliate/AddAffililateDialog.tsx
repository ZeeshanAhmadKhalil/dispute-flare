import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import {
    Box,
    Divider,
    Grid,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import { setAddAffiliatesDialog } from '@Screens/Affiliates/Store/affiliatesSlice'
import {
    useDispatch,
    useSelector
} from 'react-redux';
import cls from 'classnames'
import styles from './AddAffiliateDialog.module.scss'
import { useForm } from 'react-hook-form';
import AddInstructionActions from './AddAffiliteActions';
import AddAffiliateForm from './AddInstruction/AddAffiliateForm';
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

function AddAffiliateDialog() {

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
            tableSeparator,
            dialog,
        }
    }: any = useTheme()
    const {
        addAffiliatesDialog
    } = useSelector((state: any) => state.affiliates)

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
            onClose={() => dispatch(setAddAffiliatesDialog(false))}
            actionButtons={
                <AddInstructionActions
                    handleSubmit={handleSubmit}
                    onClose={() =>
                        dispatch(setAddAffiliatesDialog(false))
                    }
                />
            }
            open={addAffiliatesDialog}
            closeBtnText="Affiliates"
            title={"Add Affiliates"}
        >
            <Container>
                <Typography
                    color="text.xxGrey"
                    variant='subtitle2'

                    className={cls(
                        styles.formDesc
                    )}
                >
                    {"You can add a minimum of the affiliate name, email and their pay rate when adding them."}
                </Typography>
                <Divider
                    sx={{
                        backgroundColor: tableSeparator?.light
                    }}
                />

                <Grid item xs={12}>
                    <Typography
                        variant="subtitle1"
                        className={cls(
                            styles.groupTitle
                        )}
                    >
                        Company Information
                    </Typography>
                </Grid>
                <Grid
                    container
                    rowSpacing={3}
                    sx={{ backgroundColor: dialog.xxxxOff, marginTop: "10px" }}
                    className={cls(
                        'border-red-700',
                        'border-0',
                        'flex',
                        'items-center', 'p-[20px]',
                    )}
                >
                    <AddAffiliateForm
                        watch={watch}
                        register={register}
                        control={control}
                        errors={errors}
                    />

                </Grid>

            </Container>
        </RightDialogLayout >
    );
}

export default AddAffiliateDialog