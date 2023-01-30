
import CollapsableForm from '@Components/CollapsableForm/CollapsableForm';
import DropDown from '@Components/DropDown/DropDown';
import TextInput from '@Components/TextInput/TextInput';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import {
    Box,
    Divider as MuiDivider,
    Grid,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import cls from 'classnames';
import Cross from 'public/Assets/Svgs/cross.svg'
import PlusCircle from 'public/Assets/Svgs/plus-circle.svg'

const Label = styled(Typography)(({ theme }) => {

    const {
        text: { xxxGrey },
    } = theme.palette

    return {
        color: xxxGrey,
        fontWeight: 500,
    }
})

const Divider = styled(MuiDivider)(({ theme: {
    palette: {
        tableSeparator,
    }
} }) => {
    return {
        backgroundColor: tableSeparator.dark,
        width: '100%',
        marginTop: 20,
    }
})

function AddFlowForm(props) {

    let itemTypeList = [
        { label: 'Item Type 1', value: 1 },
        { label: 'Item Type 2', value: 2 },
        { label: 'Item Type 3', value: 3 },
        { label: 'Item Type 4', value: 4 },
        { label: 'Item Type 5', value: 5 },
    ]

    let reasonList = [
        { label: 'Reason 1', value: 1 },
        { label: 'Reason 2', value: 2 },
        { label: 'Reason 3', value: 3 },
        { label: 'Reason 4', value: 4 },
        { label: 'Reason 5', value: 5 },
    ]

    let flowList = [
        { label: 'Flow 1', value: 1 },
        { label: 'Flow 2', value: 2 },
        { label: 'Flow 3', value: 3 },
        { label: 'Flow 4', value: 4 },
        { label: 'Flow 5', value: 5 },
        { label: 'Flow 6', value: 6 },
    ]

    const {
        register,
        control,
        errors,
        watch,
    } = props || {}

    const {
        palette: {
            tableSeparator,
            cancelled,
            lead,
        }
    } = useTheme()

    return (
        <CollapsableForm
            title="Create your new letter flow"
            defaultOpen={true}
        >
            <Grid
                container
                rowSpacing={3}

            >
                <Grid item xl="2" md="12" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Letter Flow Name
                    </Label>
                </Grid>
                <Grid
                    item
                    xl="10"
                    md="12"
                    xs="12"
                    sx={{
                        border: '0px solid red'
                    }}
                >
                    <TextInput
                        register={register("letterFlowName", {
                            required: true,
                        })}
                        name="Flow Name"
                        error={errors.letterFlowName}
                        containerStyle={{
                            width: '100%'
                        }}
                        width='85%'
                    />
                </Grid>
                <Divider />
                <Grid item xl="12" md="12" xs="12">
                    <Typography
                        color="text.xxGrey"
                        variant='subtitle2'
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
                        list={itemTypeList}
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
                        list={reasonList}
                        name="reason"
                        error={errors.reason}
                    />
                </Grid>
                <Divider />
                <Grid item xl="12" md="12" xs="12">
                    <Typography
                        color="text.xxGrey"
                        variant='subtitle2'
                    >
                        Then the following sequences if letter will begin:
                    </Typography>
                </Grid>
                <Grid
                    item
                    xl="2"
                    md="6"
                    xs="12"
                    sx={{
                        border: '0px solid red'
                    }}
                >
                    <Label
                        variant="subtitle1"
                    >
                        Bureau Flow
                    </Label>
                </Grid>
                <Grid
                    item
                    xl="4"
                    md="6"
                    xs="12"
                    sx={{
                        border: '0px solid red',
                    }}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                    >
                        <DropDown
                            watch={watch}
                            register={register("bureauFlow")}
                            list={flowList}
                            name="Furnish Flow"
                            error={errors.furnishFlow}
                            styles={{
                                marginRight: 1,
                            }}
                        />
                        <Box
                            className={cls(
                                'cursor-pointer'
                            )}
                        >
                            <Cross
                                height={10}
                                width={10}
                            />
                        </Box>
                    </Box>
                    <Box
                        className={cls(
                            'cursor-pointer'
                        )}
                        display="flex"
                        alignItems="center"
                        justifyContent="end"
                        sx={{
                            border: '0px solid red',
                            width: 275,
                            mt: 1,
                        }}
                    >
                        <AddCircleOutlineOutlinedIcon
                            sx={{
                                color: lead.main,
                                fontSize: 20,
                            }}
                        />
                        <Typography
                            color={lead.main}
                            sx={{
                                textDecoration: "underline",
                                marginLeft: "2px",
                            }}
                        >
                            AddLetter
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xl="2"
                    md="6"
                    xs="12"
                    sx={{
                        border: '0px solid red'
                    }}
                >
                    <Label
                        variant="subtitle1"
                    >
                        Furnisher Flow
                    </Label>
                </Grid>
                <Grid
                    item
                    xl="4"
                    md="6"
                    xs="12"
                    sx={{
                        border: '0px solid red',
                    }}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                    >
                        <DropDown
                            watch={watch}
                            register={register("furnishFlow")}
                            list={flowList}
                            name="Furnish Flow"
                            error={errors.furnishFlow}
                            styles={{
                                marginRight: 1,
                            }}
                        />
                        <Box
                            className={cls(
                                'cursor-pointer'
                            )}
                        >
                            <Cross
                                height={10}
                                width={10}
                            />
                        </Box>
                    </Box>
                    <Box
                        className={cls(
                            'cursor-pointer'
                        )}
                        display="flex"
                        alignItems="center"
                        justifyContent="end"
                        sx={{
                            border: '0px solid red',
                            width: 275,
                            mt: 1,
                        }}
                    >
                        <AddCircleOutlineOutlinedIcon
                            sx={{
                                color: lead.main,
                                fontSize: 20,
                            }}
                        />
                        <Typography
                            color={lead.main}
                            sx={{
                                textDecoration: "underline",
                                marginLeft: "2px",
                            }}
                        >
                            AddLetter
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </CollapsableForm >
    )
}

export default AddFlowForm