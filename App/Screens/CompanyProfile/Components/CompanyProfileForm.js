
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

import LogoDark from 'public/Assets/Svgs/logo-wo-text.svg';
import RequiredMark from '@Components/RequiredMark/RequiedMark';
const Label = styled(Typography)(({ theme }) => {

    const {
        text: { xxxGrey },
        cancelled
    } = theme.palette

    return {
        color: xxxGrey,
        fontWeight: 500,
    }
})



function CompanyProfileForm(props) {

    const {
        register,
        control,
        errors,
        watch,
    } = props || {}

    const {
        palette: {
            tableSeparator: { light },
            dialog, text
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
            sx={{ backgroundColor: dialog.xxxxOff, marginTop: "10px" }}
            className={cls(
                'border-red-700',
                'border-0',
                'flex',
                'items-center', 'p-[20px]',
            )}
        >

            <Grid item xs="12" >
                <Grid sx={{ paddingTop: "0", }}>

                    <Typography
                        variant="h5"
                        color={text.grey}
                    >
                        DISPUTE FLARE
                    </Typography>
                    <LogoDark
                        width={100}
                        height={60}
                    />
                </Grid>
            </Grid>
            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Company Name <RequiredMark />
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <TextInput
                    register={register("companyName", {
                        required: true,
                    })}
                    name="companyName"
                    error={errors.companyName}

                />
            </Grid>
            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Email <RequiredMark />
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <TextInput
                    register={register("email", {
                        required: true,
                    })}
                    name="email"
                    error={errors.email}
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
                    placeholder=""
                />
            </Grid>
            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Time Zone
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <DropDown
                    watch={watch}
                    register={register("timezone")}
                    list={states}
                    name="timezone"
                    error={errors.state}
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
                    color={text.contrastText}
                    className={cls(
                        styles.groupTitle,
                    )}
                >
                    Address <RequiredMark />
                </Typography>
            </Grid>
            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Mailing Address
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <TextInput
                    register={register("mailingAddress")}
                    name="mailingAddress"
                    error={errors.mailingAddress}
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
            <Grid item xl="2" md="6" xs="12">
                <Label
                    variant="subtitle1"
                >
                    Phone
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12">
                <TextInput
                    register={register("phone")}
                    name="phone"
                    error={errors.phone}
                    placeholder="(000) 000-000"
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
                    register={register("fax")}
                    name="fax"
                    error={errors.fax}
                    placeholder="(000) 000-000"
                />
            </Grid>


        </Grid>

    )
}

export default CompanyProfileForm