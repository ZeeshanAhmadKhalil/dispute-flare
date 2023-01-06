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

function ClientInformation(props) {

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
        <CollapsableForm
            title="Client Information"
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
                        Date of Birth
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <DatePicker
                        control={control}
                        name="dateOfBirth"
                        error={errors.dateOfBirth}
                    />
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        SSN Number
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <TextInput
                        register={register("ssnNumber")}
                        name="ssnNumber"
                        error={errors.ssnNumber}
                        placeholder="000-000-0000"
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
                        Contact Information
                    </Typography>
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Email ID
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <TextInput
                        register={register("emailId", {
                            required: true,
                        })}
                        name="emailId"
                        error={errors.emailId}
                        placeholder="luffy@onepiece.com"
                    />
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Mobile No.
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <TextInput
                        register={register("mobileNo")}
                        name="mobileNo"
                        error={errors.mobileNo}
                        placeholder="(000) 000-0000"
                    />
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Phone No.
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <TextInput
                        register={register("phoneNo")}
                        name="phoneNo"
                        error={errors.phoneNo}
                        placeholder="(000) 000-0000"
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
                        Country
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <DropDown
                        watch={watch}
                        register={register("country")}
                        list={countries}
                        name="country"
                        error={errors.country}
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
                    <Grid
                        container
                        rowSpacing={2}
                        className={cls(
                            'border-red-700',
                            'border-0',
                            'flex',
                            'items-center',
                        )}>
                        <Grid item xl="2" md="6" xs="12">
                            <Label
                                variant="subtitle1"
                            >
                                Previous Address
                            </Label>
                        </Grid>
                        <Grid item xl="4" md="6" xs="12">
                            <RadioBtns
                                control={control}
                                name="hasPreviousAddress"
                                error={errors.hasPreviousAddress}
                                list={[
                                    { label: "Yes", value: 1 },
                                    { label: "No", value: 0 },
                                ]}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                {watch("hasPreviousAddress") == 1 &&
                    <>
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
                                Previous Address
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
                                register={register("previousAddress")}
                                name="previousAddress"
                                error={errors.previousAddress}
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
                                register={register("previousCity")}
                                list={cities}
                                name="previousCity"
                                error={errors.previousCity}
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
                                register={register("previousState")}
                                list={states}
                                name="previousState"
                                error={errors.previousState}
                            />
                        </Grid>
                        <Grid item xl="2" md="6" xs="12">
                            <Label
                                variant="subtitle1"
                            >
                                Country
                            </Label>
                        </Grid>
                        <Grid item xl="4" md="6" xs="12">
                            <DropDown
                                watch={watch}
                                register={register("previousCountry")}
                                list={countries}
                                name="previousCountry"
                                error={errors.previousCountry}
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
                                register={register("previousZipCode")}
                                name="previousZipCode"
                                error={errors.previousZipCode}
                                placeholder="00000"
                            />
                        </Grid>
                    </>
                }
            </Grid>
        </CollapsableForm >
    )
}

export default ClientInformation