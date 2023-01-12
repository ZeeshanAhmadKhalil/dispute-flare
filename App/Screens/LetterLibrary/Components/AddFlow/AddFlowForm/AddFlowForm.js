
import DropDown from '@Components/DropDown/DropDown';
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

function AddFlowForm(props) {


    let providers = [
        { label: 'Zeeshan Ahmad', value: 1 },
        { label: 'Rafay', value: 2 },
        { label: 'Ali', value: 3 },
        { label: 'Usman', value: 4 },
        { label: 'Mudasir', value: 5 },
    ]

    const {
        register,
        control,
        errors,
        watch,
    } = props || {}

    const {
        palette: {
            tableSeparator
        }
    } = useTheme()


    const {
        cities,
        states,
        countries,
    } = useSelector(state => state.clients)

    return (

        <Grid sx={{ backgroundColor: tableSeparator.light, marginTop: "0", padding: "1rem 1rem 2rem 1rem" }}
            container
            rowSpacing={3}
            className={cls(
                'border-red-700',
                'border-0',
                'flex',
                'items-center',
            )}

        >
            <Grid item xs="12">
                <Typography
                    variant="subtitle2"
                    className={cls(
                        styles.groupTitle
                    )}
                >
                    Personal Information
                </Typography>
            </Grid>
            <Grid item xl="2" md="12" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Letter Flow Name
                </Label>
            </Grid>
            <Grid item xl="10" md="12" xs="12">
                <TextInput
                    register={register("letterFlowName", {
                        required: true,
                    })}
                    name=" Letter Flow Name"
                    error={errors.letterFlowName}
                    width="85%"
                    fullWidth
                />
            </Grid>
            <Divider
                sx={{
                    backgroundColor: tableSeparator.dark
                }}
            />

            <Grid item xl="12" md="12" xs="12">
                <Typography
                    color="text.xxGrey"
                    variant='subtitle2'
                    className={cls(
                        styles.formDesc
                    )}
                >

                    When a new dispute is created, if the following match:

                </Typography>
            </Grid>
            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Item Type
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <DropDown
                    watch={watch}
                    register={register("itemType")}
                    list={providers}
                    name="Item Type"
                    error={errors.itemType}
                />
            </Grid>
            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Reason
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <DropDown
                    watch={watch}
                    register={register("reason")}
                    list={providers}
                    name="reason"
                    error={errors.reason}
                />
            </Grid>
            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >Bureau Flow
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <DropDown
                    watch={watch}
                    register={register("bureauFlow")}
                    list={providers}
                    name="Bureau Flow"
                    error={errors.bureauFlow}
                />
            </Grid>
            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Furnisher Flow
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <DropDown
                    watch={watch}
                    register={register("furnishFlow")}
                    list={providers}
                    name="Furnish Flow"
                    error={errors.furnishFlow}
                />
            </Grid>




        </Grid>
    )
}

export default AddFlowForm