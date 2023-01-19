import CollapsableForm from '@Components/CollapsableForm/CollapsableForm';
import DatePicker from '@Components/DatePicker/DatePicker';
import DropDown from '@Components/DropDown/DropDown';
import RadioBtns from '@Components/RadioBtns/RadioBtns';
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

function AddAffiliateForm(props) {

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
            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    First Name
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <TextInput
                    register={register("firstName", {
                        required: true,
                    })}
                    name="firstName"
                    error={errors.firstName}
                />
            </Grid>
            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Last Name
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <TextInput
                    register={register("lastName", {
                        required: true,
                    })}
                    name="lastName"
                    error={errors.lastName}
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
                    register={register("phoneNumber")}
                    name="phoneNumber"
                    error={errors.phoneNumber}
                    placeholder="000-000-0000"
                />
            </Grid>
            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Mobile
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <TextInput
                    register={register("mobile")}
                    name="mobile"
                    error={errors.mobile}
                    placeholder="000-000-0000"
                />
            </Grid>
            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Email
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <TextInput
                    register={register("email")}
                    name="email"
                    error={errors.email}
                    placeholder="john@cena.com"
                />
            </Grid>

            <Grid item xs="12">
                <Divider
                    sx={{
                        backgroundColor: light
                    }}
                />
            </Grid>

            <Grid item xs="12">
                <Typography
                    variant="subtitle2"
                    className={cls(
                        styles.groupTitle,
                    )}
                >
                    Address Information
                </Typography>
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
                    register={register("address")}
                    name="address"
                    error={errors.address}
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
                <DropDown
                    watch={watch}
                    register={register("city")}
                    list={cities}
                    name="city"
                    error={errors.city}
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
                <DropDown
                    watch={watch}
                    register={register("state")}
                    list={states}
                    name="state"
                    error={errors.state}
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
                    register={register("zipCode")}
                    name="zipCode"
                    error={errors.zipCode}
                    placeholder="00000"
                />
            </Grid>
            <Grid item xs="12">
                <Typography
                    variant="subtitle2"
                    className={cls(
                        styles.groupTitle,
                    )}
                >
                    Company Information
                </Typography>
            </Grid>
            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Company Name
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <TextInput
                    register={register("companyName", {
                        required: true,
                    })}
                    name="companyName"
                    error={errors.companyName}
                    placeholder="Company Name"
                />
            </Grid>


            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Website
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <TextInput
                    register={register("website")}
                    name="website"
                    error={errors.website}
                    placeholder="https://"
                />
            </Grid>
            <Grid item xs="12">
                <Divider
                    sx={{
                        backgroundColor: light
                    }}
                />
            </Grid>
            <Grid item xs="12">
                <Typography
                    variant="subtitle2"
                    className={cls(
                        styles.groupTitle,
                    )}
                >
                    Set rate
                </Typography>
            </Grid>
            <Grid item xs="12">
                <Grid
                    container
                    rowSpacing={2}
                    className={cls(
                        'border-red-700',
                        'border-0',
                        'flex',
                        'items-center',
                    )}>

                    <Grid item xl="4" md="6" xs="12">
                        <RadioBtns
                            control={control}
                            name="hasPreviousAddress"
                            error={errors.hasPreviousAddress}
                            list={[
                                { label: "Use Standard rates", value: 1 },
                                { label: "Use custom rates", value: 0 },
                            ]}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Rate
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <TextInput
                    register={register("rate")}
                    name="rate"
                    error={errors.rate}
                />
            </Grid>
            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Paid For
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <DropDown
                    watch={watch}
                    register={register("paidfor")}
                    list={cities}
                    name="paidfor"
                    error={errors.paidfor}
                />
            </Grid>


            <Grid item xs="12">
                <Divider
                    sx={{
                        backgroundColor: light
                    }}
                />
            </Grid>

            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Status
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <DropDown
                    watch={watch}
                    register={register("status")}
                    list={states}
                    name="status"
                    error={errors.status}
                />
            </Grid>



            <Grid item xs="12">
                <Divider
                    sx={{
                        backgroundColor: light
                    }}
                />
            </Grid>





        </Grid>

    )
}

export default AddAffiliateForm