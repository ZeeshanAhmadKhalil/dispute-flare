import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import {
    Box,
    styled,
    useTheme
} from '@mui/material';
import { useForm } from 'react-hook-form';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import { setCreditorDialog } from '../Store/creditorSlice';
import AddCreditorActions from './AddCreditorActions';
import {
    AddItemContainer
} from '@Components/StyledComponents/StyledComponents'

function AddCreditorDialog(props) {

    const defaultValues = {
    }

    const dispatch = useDispatch()
    const {
        palette: {
            tableSeparator,
            text,
        }
    } = useTheme()

    const {
        creditorDialog
    } = useSelector(state => state.creditor)

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
                dispatch(setCreditorDialog(false))
            }
            actionButtons={
                <AddCreditorActions
                    reset={reset}
                    handleSubmit={handleSubmit}
                    onClose={() =>
                        dispatch(setCreditorDialog(false))
                    }
                />
            }
            open={creditorDialog}
            closeBtnText="Creditor"
            title={"Add Creditor"}
        >
            <AddItemContainer>
            </AddItemContainer>
        </RightDialogLayout >
    );
}

export default AddCreditorDialog