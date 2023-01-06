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
import { setDisputeDialog } from '../Store/disputeSlice';
import AddCreditMonitoringInfoActions from './AddCreditMonitoringInfoActions';
import CreditMonitoringInformation from './CollapsableForm/CreditMonitoringInformation';
import SelectAnAccount from './CollapsableForm/SelectAnAccount';

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

function AddDisputeDialog(props) {

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
    } = useTheme()

    const {
    } = useSelector(state => state.shared)
    const {
        addDisputeDialog
    } = useSelector(state => state.dispute)

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
                dispatch(setDisputeDialog(false))
            }
            actionButtons={null}
            open={addDisputeDialog}
            closeBtnText="DISPUTE"
            title={"Add Dispute"}
        >
            <Container>
                <Divider
                    sx={{
                        backgroundColor: tableSeparator?.light
                    }}
                />
                <SelectAnAccount />
            </Container>
        </RightDialogLayout >
    );
}

export default AddDisputeDialog