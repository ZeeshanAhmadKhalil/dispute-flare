import {
    AddItemContainer
} from '@Components/StyledComponents/StyledComponents';
import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import {
    setStandardRateDialog
} from '@Screens/Commission/Store/commissionSlice';
import { useForm } from 'react-hook-form';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import SetStandardRate from './SetStandardRate';
import SetStandardRateActions from './SetStandardRateActions';

function SetStandardRateDialog() {

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
        standardRateDialog
    } = useSelector((state: any) => state.commission)

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
                dispatch(setStandardRateDialog(false))
            }
            actionButtons={
                <SetStandardRateActions
                    reset={reset}
                    handleSubmit={handleSubmit}
                    onClose={() =>
                        dispatch(setStandardRateDialog(false))
                    }
                />
            }
            open={standardRateDialog}
            closeBtnText="RATE"
            title={"Set Standard Rate"}
        >
            <AddItemContainer>
                <SetStandardRate
                    watch={watch}
                    register={register}
                    control={control}
                    errors={errors}
                />
            </AddItemContainer>
        </RightDialogLayout >
    );
}

export default SetStandardRateDialog