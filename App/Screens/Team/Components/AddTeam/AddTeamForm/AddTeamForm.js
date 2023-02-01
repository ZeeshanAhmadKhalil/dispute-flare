
import CollapsableForm from '@Components/CollapsableForm/CollapsableForm';
import RequiredMark from '@Components/RequiredMark/RequiedMark';
import TextInput from '@Components/TextInput/TextInput';
import {
    Grid,
    styled,
    Typography
} from '@mui/material';
import cls from 'classnames';

const Label = styled(Typography)(({ theme }) => {

    const {
        text: { xxxGrey },
    } = theme.palette

    return {
        color: xxxGrey,
        fontWeight: 500,
    }
})

function AddTeamForm(props) {

    const {
        register,
        errors,
    } = props || {}

    return (
        <CollapsableForm
            title="Create your new team"
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
                        First Name <RequiredMark />
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <TextInput
                        register={register("firstName", {
                            required: true,
                        })}
                        name="firstName"
                        error={errors.firstName}
                        placeholder="John"

                    />
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Last Name <RequiredMark />
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <TextInput
                        register={register("lastName", {
                            required: true,
                        })}
                        name="last"
                        placeholder="Doe"
                        error={errors.lastName}
                    />
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Contact
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <TextInput
                        register={register("contact", {
                            required: true,
                        })}
                        name="contact"
                        error={errors.contact}
                        placeholder="(000) 000-000"
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
                        placeholder="Johan@gmail.com"
                    />
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Department
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <TextInput
                        register={register("department", {
                            required: true,
                        })}
                        name="department"
                        error={errors.department}
                    />
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Position
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <TextInput
                        register={register("position", {
                            required: true,
                        })}
                        name="position"
                        error={errors.position}
                    />
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Address  <RequiredMark />
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


            </Grid>
        </CollapsableForm>
    )
}

export default AddTeamForm