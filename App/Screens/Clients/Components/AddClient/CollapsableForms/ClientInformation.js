import TextInput from '@Components/TextInput/TextInput';
import {
    Divider,
    Grid,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import cls from 'classnames';
import styles from './ClientInformation.module.scss';
import CollapsableForm from './CollapsableForm';

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
        errors,
    } = props

    const {
        palette: {
            tableSeparator: { light }
        }
    } = useTheme()

    return (
        <CollapsableForm
            title="Client Information"
        >
            <Typography
                variant="subtitle2"
                className={cls(
                    styles.groupTitle
                )}
            >
                Personal Information
            </Typography>
            <Grid
                container
                className={cls(
                    'border-red-700',
                    'border-0',
                    'flex',
                    'items-center',
                    'mt-[15px]',
                )}
            >
                <Grid xs="2">
                    <Label
                        variant="subtitle1"
                    >
                        First Name
                    </Label>
                </Grid>
                <Grid xs="4">
                    <TextInput
                        register={register("firstName")}
                        name="firstName"
                        error={errors.firstName}
                    />
                </Grid>
                <Grid xs="2">
                    <Label
                        variant="subtitle1"
                    >
                        Last Name
                    </Label>
                </Grid>
                <Grid xs="4">
                    <TextInput
                        register={register("lastName")}
                        name="lastName"
                        error={errors.lastName}
                    />
                </Grid>
            </Grid>
            <Grid
                container
                className={cls(
                    'border-red-700',
                    'border-0',
                    'flex',
                    'items-center',
                    'mt-[15px]',
                    'mb-[25px]',
                )}
            >
                <Grid xs="2">
                    <Label
                        variant="subtitle1"
                    >
                        Date of Birth
                    </Label>
                </Grid>
                <Grid xs="4">
                    <TextInput
                        register={register("dateOfBirth")}
                        name="dateOfBirth"
                        error={errors.dateOfBirth}
                    />
                </Grid>
                <Grid xs="2">
                    <Label
                        variant="subtitle1"
                    >
                        SSN Number
                    </Label>
                </Grid>
                <Grid xs="4">
                    <TextInput
                        register={register("ssnNumber")}
                        name="ssnNumber"
                        error={errors.ssnNumber}
                        placeholder="000-000-0000"
                    />
                </Grid>
            </Grid>
            <Divider
                sx={{
                    backgroundColor: light
                }}
            />
            <Typography
                variant="subtitle2"
                className={cls(
                    styles.groupTitle,
                    styles.groupTitleMargin,
                )}
            >
                Contact Information
            </Typography>
            <Grid
                container
                className={cls(
                    'border-red-700',
                    'border-0',
                    'flex',
                    'items-center',
                    'mt-[15px]',
                )}
            >
                <Grid xs="2">
                    <Label
                        variant="subtitle1"
                    >
                        Email ID
                    </Label>
                </Grid>
                <Grid xs="4">
                    <TextInput
                        register={register("emailId")}
                        name="emailId"
                        error={errors.emailId}
                        placeholder="luffy@onepiece.com"
                    />
                </Grid>
                <Grid xs="2">
                    <Label
                        variant="subtitle1"
                    >
                        Mobile No.
                    </Label>
                </Grid>
                <Grid xs="4">
                    <TextInput
                        register={register("mobileNo")}
                        name="mobileNo"
                        error={errors.mobileNo}
                        placeholder="(000) 000-0000"
                    />
                </Grid>
            </Grid>
            <Grid
                container
                className={cls(
                    'border-red-700',
                    'border-0',
                    'flex',
                    'items-center',
                    'mt-[15px]',
                    'mb-[25px]',
                )}
            >
                <Grid xs="2">
                    <Label
                        variant="subtitle1"
                    >
                        Phone No.
                    </Label>
                </Grid>
                <Grid xs="4">
                    <TextInput
                        register={register("phoneNo")}
                        name="phoneNo"
                        error={errors.phoneNo}
                        placeholder="(000) 000-0000"
                    />
                </Grid>
                <Grid xs="2">
                    <Label
                        variant="subtitle1"
                    >
                        Website
                    </Label>
                </Grid>
                <Grid xs="4">
                    <TextInput
                        register={register("website")}
                        name="website"
                        error={errors.website}
                        placeholder="https://"
                    />
                </Grid>
            </Grid>
            <Divider
                sx={{
                    backgroundColor: light
                }}
            />
        </CollapsableForm>
    )
}

export default ClientInformation