import CollapsableForm from '@Components/CollapsableForm/CollapsableForm';
import DropDown from '@Components/DropDown/DropDown';
import TextInput from '@Components/TextInput/TextInput';
import {
    Grid,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import cls from 'classnames';
import { useSelector } from 'react-redux';
import styles from './AddCreditor.module.scss';

const Label = styled(Typography)(({ theme }) => {

    const {
        text: { xxxGrey },
    } = theme.palette

    return {
        color: xxxGrey,
        fontWeight: 500,
    }
})

function AddCreditor(props) {

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
        providers,
    } = useSelector(state => state.dispute)

    return (
        <CollapsableForm
            title="Add Creditor"
            defaultOpen={true}
        >
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
                        Creditor Name
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <TextInput
                        register={register("creditorName", {
                            required: true,
                        })}
                        name="creditorName"
                        error={errors.creditorName}
                    />
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Phone
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <TextInput
                        register={register("phone", {
                            required: true,
                        })}
                        name="phone"
                        error={errors.phone}
                    />
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Address
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <TextInput
                        register={register("address", {
                            required: true,
                        })}
                        name="address"
                        error={errors.address}
                    />
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        State
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <TextInput
                        register={register("state", {
                            required: true,
                        })}
                        name="state"
                        error={errors.state}
                    />
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        City
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <TextInput
                        register={register("city", {
                            required: true,
                        })}
                        name="city"
                        error={errors.city}
                    />
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Zip code
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <TextInput
                        register={register("zipCode", {
                            required: true,
                        })}
                        name="zipCode"
                        error={errors.zipCode}
                    />
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Fax
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <TextInput
                        register={register("fax", {
                            required: true,
                        })}
                        name="fax"
                        error={errors.fax}
                    />
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Account Nature
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <TextInput
                        register={register("accountNature", {
                            required: true,
                        })}
                        name="accountNature"
                        error={errors.accountNature}
                    />
                </Grid>
            </Grid>
        </CollapsableForm >
    )
}

export default AddCreditor