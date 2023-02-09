
import CollapsableForm from '@Components/CollapsableForm/CollapsableForm';
import DropDown from '@Components/DropDown/DropDown';
import { FormDivider } from '@Components/StyledComponents/StyledComponents';
import TextInput from '@Components/TextInput/TextInput';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {
    Box,
    Grid,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import cls from 'classnames';
import Cross from 'public/Assets/Svgs/cross.svg';
import { useState } from 'react';

const Label = styled(Typography)(({ theme }) => {

    const {
        text: { xxxGrey },
    }: any = theme.palette

    return {
        color: xxxGrey,
        fontWeight: 500,
    }
})

function AddFlowForm(props: any) {

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
        errors,
        watch,
    } = props || {}

    const {
        palette: {
            lead,
        }
    }: any = useTheme()

    const [bureauFlows, setBureauFlows] = useState(1)
    const [furnishFlows, setFurnishFlows] = useState(1)

    const renderBureauFlow =
        [...Array(bureauFlows)].map((item: any, key) => (
            <DropDown
                key={key}
                watch={watch}
                register={register(`bureauFlow[${key}]`)}
                list={flowList}
                name={`bureauFlow[${key}]`}
                error={errors.furnishFlow}
                styles={{
                    marginBottom: 1,
                }}
            />

        ))
    const renderFurnishFlow =
        [...Array(furnishFlows)].map((item: any, key) => (
            <DropDown
                key={key}
                watch={watch}
                register={register(`furnishFlow[${key}]`)}
                list={flowList}
                name={`furnishFlow[${key}]`}
                error={errors.furnishFlow}
                styles={{
                    marginBottom: 1,
                }}
            />

        ))


    return (
        <CollapsableForm
            title="Create your new letter flow"
            defaultOpen={true}
        >
            <Grid
                container
                rowSpacing={3}

            >
                <Grid item xl={2} md={12} xs={12}>
                    <Label
                        variant="subtitle1"
                    >
                        Letter Flow Name
                    </Label>
                </Grid>
                <Grid
                    item
                    xl={10}
                    md={12}
                    xs={12}
                    sx={{
                        border: '0px solid red'
                    }}
                >
                    <TextInput
                        register={register("letterFlowName", {
                            required: true,
                        })}
                        name="letterFlowName"
                        error={errors.letterFlowName}
                        containerStyle={{
                            width: '100%'
                        }}
                        width='85%'
                    />
                </Grid>
                <FormDivider />
                <Grid item xl={12} md={12} xs={12}>
                    <Typography
                        color="text.xxGrey"
                        variant='subtitle2'
                    >
                        When a new dispute is created, if the following match:
                    </Typography>
                </Grid>
                <Grid item xl={2} md={6} xs={12}>
                    <Label
                        variant="subtitle1"
                    >
                        Item Type
                    </Label>
                </Grid>
                <Grid item xl={4} md={6} xs={12}>
                    <DropDown
                        watch={watch}
                        register={register("itemType")}
                        list={itemTypeList}
                        name="itemType"
                        error={errors.itemType}
                    />
                </Grid>
                <Grid item xl={2} md={6} xs={12}>
                    <Label
                        variant="subtitle1"
                    >
                        Reason
                    </Label>
                </Grid>
                <Grid item xl={4} md={6} xs={12}>
                    <DropDown
                        watch={watch}
                        register={register("reason")}
                        list={reasonList}
                        name="reason"
                        error={errors.reason}
                    />
                </Grid>
                <FormDivider />
                <Grid item xl={12} md={12} xs={12}>
                    <Typography
                        color="text.xxGrey"
                        variant='subtitle2'
                    >
                        Then the following sequences if letter will begin:
                    </Typography>
                </Grid>
                <Grid
                    item
                    xl={2}
                    md={6}
                    xs={12}
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
                    xl={4}
                    md={6}
                    xs={12}
                    sx={{
                        border: '0px solid red',
                    }}
                >
                    {bureauFlows > 0 &&
                        <Box
                            display="flex"
                            justifyContent="start"
                            sx={{
                                border: '0px solid red'
                            }}
                        >
                            <Box
                                sx={{
                                    border: '0px solid red',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                {renderBureauFlow}
                            </Box>
                            <Box
                                onClick={() => setBureauFlows(
                                    prev => prev - 1
                                )}
                                className={cls(
                                    'cursor-pointer'
                                )}
                                sx={{
                                    ml: 1,
                                    mt: 1.5,
                                }}
                            >
                                <Cross
                                    height={10}
                                    width={10}
                                />
                            </Box>
                        </Box>
                    }
                    <Box
                        onClick={() => setBureauFlows(
                            prev => prev + 1
                        )}
                        className={cls(
                            'cursor-pointer'
                        )}
                        display="flex"
                        alignItems="center"
                        justifyContent="end"
                        sx={{
                            border: '0px solid red',
                            width: 275,
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
                            Add Letter
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xl={2}
                    md={6}
                    xs={12}
                    sx={{
                        border: '0px solid red'
                    }}
                >
                    <Label
                        variant="subtitle1"
                    >
                        Furnish Flow
                    </Label>
                </Grid>
                <Grid
                    item
                    xl={4}
                    md={6}
                    xs={12}
                    sx={{
                        border: '0px solid red',
                    }}
                >
                    {furnishFlows > 0 &&
                        <Box
                            display="flex"
                            justifyContent="start"
                            sx={{
                                border: '0px solid red'
                            }}
                        >
                            <Box
                                sx={{
                                    border: '0px solid red',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                {renderFurnishFlow}
                            </Box>
                            <Box
                                onClick={() => setFurnishFlows(
                                    prev => prev - 1
                                )}
                                className={cls(
                                    'cursor-pointer'
                                )}
                                sx={{
                                    ml: 1,
                                    mt: 1.5,
                                }}
                            >
                                <Cross
                                    height={10}
                                    width={10}
                                />
                            </Box>
                        </Box>
                    }
                    <Box
                        onClick={() => setFurnishFlows(
                            prev => prev + 1
                        )}
                        className={cls(
                            'cursor-pointer'
                        )}
                        display="flex"
                        alignItems="center"
                        justifyContent="end"
                        sx={{
                            border: '0px solid red',
                            width: 275,
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
                            Add Letter
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </CollapsableForm >
    )
}

export default AddFlowForm