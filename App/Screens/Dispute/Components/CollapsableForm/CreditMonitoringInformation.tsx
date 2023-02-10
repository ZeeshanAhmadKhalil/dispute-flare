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
import styles from './CreditMonitoringInformation.module.scss';

const Label = styled(Typography)(({ theme }) => {

    const {
        text: { xxxGrey },
    }: any = theme.palette

    return {
        color: xxxGrey,
        fontWeight: 500,
    }
})

function CreditMonitoringInformation(props: any) {

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
    }: any = useTheme()

    const {
        providers,
    } = useSelector((state: any) => state.dispute)

    return (
        <CollapsableForm
            title="Credit Monitoring Information"
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
                <Grid item xs={12}>
                    <Typography
                        variant="subtitle2"
                        className={cls(
                            styles.groupTitle
                        )}
                    >
                        Credit Monitoring Information
                    </Typography>
                </Grid>
                <Grid item xl={2} md={6} xs={12}>
                    <Label
                        variant="subtitle1"
                    >
                        Select Provider
                    </Label>
                </Grid>
                <Grid item xl={4} md={6} xs={12}>
                    <DropDown
                        watch={watch}
                        register={register("provider", {
                            required: true,
                        })}
                        list={providers}
                        name="provider"
                        error={errors.provider}
                    />
                </Grid>
                <Grid item xl={2} md={6} xs={12}>
                    <Label
                        variant="subtitle1"
                    >
                        Username
                    </Label>
                </Grid>
                <Grid item xl={4} md={6} xs={12}>
                    <TextInput
                        register={register("username", {
                            required: true,
                        })}
                        name="username"
                        error={errors.username}
                    />
                </Grid>
                <Grid item xl={2} md={6} xs={12}>
                    <Label
                        variant="subtitle1"
                    >
                        Password
                    </Label>
                </Grid>
                <Grid item xl={4} md={6} xs={12}>
                    <TextInput
                        register={register("password", {
                            required: true,
                        })}
                        name="password"
                        error={errors.password}
                        placeholder="****"
                    />
                </Grid>
                <Grid item xl={2} md={6} xs={12}>
                    <Label
                        variant="subtitle1"
                    >
                        SSN (last 4 digits)
                    </Label>
                </Grid>
                <Grid item xl={4} md={6} xs={12}>
                    <TextInput
                        register={register("ssn", {
                            required: true,
                        })}
                        name="ssn"
                        error={errors.ssn}
                        placeholder="0000"
                    />
                </Grid>
            </Grid>
        </CollapsableForm >
    )
}

export default CreditMonitoringInformation