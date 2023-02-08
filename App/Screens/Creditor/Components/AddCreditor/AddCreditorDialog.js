import {
    AddItemContainer
} from '@Components/StyledComponents/StyledComponents';
import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import { useForm } from 'react-hook-form';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import { setCreditorDialog } from '../../Store/creditorSlice';
import AddCreditor from './AddCreditor';
import AddCreditorActions from './AddCreditorActions';

function AddCreditorDialog(props) {

    const defaultValues = {
        creditorName: null,
        address: null,
        city: null,
        fax: null,
        phone: null,
        state: null,
        zipCode: null,
        accountNature: null,
    }

    const dispatch = useDispatch()

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
                <AddCreditor
                    watch={watch}
                    register={register}
                    control={control}
                    errors={errors}
                />
            </AddItemContainer>
        </RightDialogLayout >
    );
}

export default AddCreditorDialog