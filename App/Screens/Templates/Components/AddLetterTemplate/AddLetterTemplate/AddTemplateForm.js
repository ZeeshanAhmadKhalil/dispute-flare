
import Button from '@Components/Button/Button';
import CollapsableForm from '@Components/CollapsableForm/CollapsableForm';
import DropDown from '@Components/DropDown/DropDown';
import Tags from '@Components/Tags/Tags';
import TextEditor from '@Components/TextEditor/TextEditor';
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

function AddTemplateForm(props) {

    let providers = [
        { label: 'Zeeshan Ahmad', value: 1 },
        { label: 'Rafay', value: 2 },
        { label: 'Ali', value: 3 },
        { label: 'Usman', value: 4 },
        { label: 'Mudasir', value: 5 },
    ]

    const buttons = [
        { label: "CLIENT FULL NAME" },
        { label: "CLIENT ADDRESS" },
        { label: "CITY" },
        { label: "STATE" },
        { label: "ZIP CODE" },
        { label: "SSN" },
        { label: "PHONE NUMBER" },
        { label: "DISPUTE REASON" },
        { label: "DATE OF BIRTH" },
        { label: "ACCOUNT NUMBER" },
        { label: "ACCOUNT INFO LIST" },
        { label: "DATE" },
    ]

    const {
        register,
        errors,
        watch,
    } = props || {}

    const {
        palette
    } = useTheme()

    const renderButtons
        = buttons.map((item) =>
            <Button
                color={"tags"}
                style={{
                    borderRadius: 3,
                    marginRight: 10,
                    marginBottom: 10

                }}
            >
                {item.label}
            </Button>
        )

    return (
        <CollapsableForm
            title="Create your new letter template"
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

                <Grid item xl="2" md="12" xs="12">
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
                        error={errors.letterFlowName}
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
                    <Label sx={{ margin: "0px", padding: "0px" }}
                        variant="subtitle1"
                    >
                        Category
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12" alignItems="center"
                    justifyContent="center" >
                    <Grid item xl="12" md="12" xs="12" alignItems="center">
                        <DropDown
                            watch={watch}
                            register={register("category")}
                            list={providers}
                            name="Category"
                            error={errors.furnishFlow}
                        />
                    </Grid>
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Type
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <Grid item xl="12" md="12" xs="12">
                        <DropDown
                            watch={watch}
                            register={register("type")}
                            list={providers}
                            name="type"
                            error={errors.furnishFlow}
                        />
                    </Grid>
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        keys
                    </Label>
                </Grid>
                <Grid
                    item
                    xl="10"
                    md="12"
                    xs="12"
                    display="flex"
                    flexDirection="row"
                >
                    <Tags />
                    <Tags />
                    <Tags />
                    <Tags />
                    <Typography
                        color={palette.lead.main}
                        sx={{ textDecoration: "underline" }}
                    >
                        Show All
                    </Typography>

                </Grid>
                <Grid
                    item
                    xl="12"
                    md="12"
                    xs="12"
                    display="flex"
                    flexDirection="row"
                    flexWrap="wrap"
                >
                    {buttons && renderButtons}
                </Grid>
                <Grid
                    item
                    xl="12"
                    md="12"
                    xs="12"
                    display="flex"
                    flexDirection="row"
                    flexWrap="wrap"
                >
                    <TextEditor />
                </Grid>
            </Grid>
        </CollapsableForm>
    )
}

export default AddTemplateForm