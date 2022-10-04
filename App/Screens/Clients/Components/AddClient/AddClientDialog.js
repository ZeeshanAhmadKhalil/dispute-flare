import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import {
    Box,
    DialogContent,
    DialogTitle, Divider, styled,
    Typography,
    useTheme
} from '@mui/material';
import { setAddClientDialog } from '@Screens/Clients/Store/clientsSlice';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import cls from 'classnames'
import styles from './AddClientDialog.module.scss'
import ClientInformation from './CollapsableForms/ClientInformation';
import { useForm } from 'react-hook-form';

const Container = styled(Box)(({ theme }) => {

    const {
        dialog: {
            main
        }
    } = theme.palette || {}

    return {
        backgroundColor: main,
        padding: 20,
    }
})

function AddClientDialog(props) {

    const defaultValues = {
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
        addClientDialog
    } = useSelector(state => state.clients)

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        defaultValues,
    });

    return (
        <RightDialogLayout
            onClose={() => dispatch(setAddClientDialog(false))}
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
                    register={register}
                    control={control}
                    errors={errors}
                />
            </Container>
        </RightDialogLayout >
    );
}

export default AddClientDialog