
import TextInput from '@Components/TextInput/TextInput';
import {
    Divider,
    Grid,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import cls from 'classnames';
import { useSelector } from 'react-redux';
import styles from './ClientInformation.module.scss';

const Label = styled(Typography)(({ theme }) => {

    const {
        text: { xxxGrey },
    } = theme.palette

    return {
        color: xxxGrey,
        fontWeight: 500,
    }
})

function RecordPaymentForm(props) {

    const {
        register,
        control,
        errors,
        watch,
    } = props || {}

    const {
        palette: {
            tableSeparator: { light }
        }
    } = useTheme()

    const {
        cities,
        states,
        countries,
    } = useSelector(state => state.clients)

    return (

        <Grid
            container
            rowSpacing={3}
            className={cls(
                'border-red-700',
                'border-0',
                'flex',
                'items-center',
            )}
        >

            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Date Paid
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <TextInput
                    register={register("datePaid", {
                        required: true,
                    })}
                    name="datePaid"
                    error={errors.datePaid}
                />
            </Grid>
            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Method
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <TextInput
                    register={register("method", {
                        required: true,
                    })}
                    name="method"
                    error={errors.method}
                />
            </Grid>

            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Amount Paid
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <TextInput
                    register={register("amountPaid")}
                    name="amountPaid"
                    error={errors.amountPaid}
                    placeholder="000-000-0000"
                />
            </Grid>




        </Grid>

    )
}

export default RecordPaymentForm