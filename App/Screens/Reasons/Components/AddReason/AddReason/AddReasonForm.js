import CollapsableForm from '@Components/CollapsableForm/CollapsableForm';
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

const Label = styled(Typography)(({ theme }) => {

    const {
        text: { xxxGrey },
    } = theme.palette

    return {
        color: xxxGrey,
        fontWeight: 500,
    }
})

const Elements = styled(Typography)(({ theme }) => {

    const {
        text: { xxxGrey },
    } = theme.palette

    return {
        color: xxxGrey,
        fontWeight: 500,
    }
})


function AddReasonForm(props) {


    let status = [
        { label: 'active', value: "active" },
        { label: 'inactive', value: "inactive" },
    ]

    const {
        register,
        errors,
        watch,
    } = props || {}

    const {
        palette
    } = useTheme()

    return (
        <CollapsableForm
            title="Add a new Reason"
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
                <Grid
                    item
                    xl="2"
                    md="12"
                    xs="12"
                >
                    <Label
                        variant="subtitle1"
                    >
                        Title
                    </Label>
                </Grid>
                <Grid item xl="10" md="12" xs="12">
                    <TextInput
                        register={register("Title", {
                            required: true,
                        })}
                        name="Title"
                        error={errors.title}
                        width="85%"
                        fullWidth
                    />
                </Grid>
                <Divider
                    sx={{
                        backgroundColor: palette.tableSeparator.dark
                    }}
                    color="pink"
                />
                <Grid item xl="2" md="6" xs="12" padding="0px" >
                    <Label
                        sx={{
                            margin: "0px",
                            padding: "0px"
                        }}
                        variant="subtitle1"
                    >
                        Status
                    </Label>
                </Grid>
                <Grid
                    item
                    xl="4"
                    md="6"
                    xs="12"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xl="12" md="12" xs="12" alignItems="center">
                        <DropDown
                            watch={watch}
                            register={register("status")}
                            list={status}
                            name="status"
                            error={errors.status}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </CollapsableForm>
    )
}

export default AddReasonForm