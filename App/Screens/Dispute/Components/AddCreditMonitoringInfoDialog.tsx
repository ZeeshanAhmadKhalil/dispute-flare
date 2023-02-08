import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import {
    Box, Divider,
    styled, useTheme
} from '@mui/material';
import { useForm } from 'react-hook-form';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import { setAddCreditMonitoringInfoDialog } from '../Store/disputeSlice';
import AddCreditMonitoringInfoActions from './AddCreditMonitoringInfoActions';
import CreditMonitoringInformation from './CollapsableForm/CreditMonitoringInformation';

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

function AddCreditMonitoringInfoDialog() {

    const defaultValues = {
        provider: null,
        username: null,
        password: null,
        ssn: null,
    }

    const dispatch = useDispatch()
    const {
        palette: {
            tableSeparator
        }
    }: any = useTheme()

    const {
        addCreditMonitoringInfoDialog
    } = useSelector((state: any) => state.dispute)

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
                dispatch(setAddCreditMonitoringInfoDialog(false))
            }
            actionButtons={
                <AddCreditMonitoringInfoActions
                    handleSubmit={handleSubmit}
                    onClose={() =>
                        dispatch(setAddCreditMonitoringInfoDialog(false))
                    }
                />
            }
            open={addCreditMonitoringInfoDialog}
            closeBtnText="CREDIT"
            title={"Add Credit Monitoring Information"}
        >
            <Container>
                <Divider
                    sx={{
                        backgroundColor: tableSeparator?.light
                    }}
                />
                <CreditMonitoringInformation
                    watch={watch}
                    register={register}
                    control={control}
                    errors={errors}
                />
            </Container>
        </RightDialogLayout >
    );
}

export default AddCreditMonitoringInfoDialog