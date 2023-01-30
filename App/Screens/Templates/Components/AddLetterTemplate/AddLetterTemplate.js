
import Button from '@Components/Button/Button';
import CollapsableForm from '@Components/CollapsableForm/CollapsableForm';
import DropDown from '@Components/DropDown/DropDown';
import { FormDivider } from '@Components/StyledComponents/StyledComponents';
import Tag from '@Components/Tag/Tag';
import TextEditor from '@Components/TextEditor/TextEditor';
import TextInput from '@Components/TextInput/TextInput';
import {
    Box,
    Grid,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import cls from 'classnames';
import { useState } from 'react';

const Label = styled(Typography)(({ theme }) => {

    const {
        text: { xxxGrey },
    } = theme.palette

    return {
        color: xxxGrey,
        fontWeight: 500,
    }
})

function AddLetterTemplate({
    register,
    errors,
    watch,
    setValue,
}) {

    let categoryList = [
        { label: 'Category 1', value: 1 },
        { label: 'Category 2', value: 2 },
        { label: 'Category 3', value: 3 },
        { label: 'Category 4', value: 4 },
        { label: 'Category 5', value: 5 },
    ]
    let typeList = [
        { label: 'Type 1', value: 1 },
        { label: 'Type 2', value: 2 },
        { label: 'Type 3', value: 3 },
        { label: 'Type 4', value: 4 },
        { label: 'Type 5', value: 5 },
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
    const keys = [
        {
            id: 1,
            name: 'Client'
        },
        {
            id: 2,
            name: 'Bureau'
        },
        {
            id: 3,
            name: 'Dispute'
        },
        {
            id: 4,
            name: 'Business Agency'
        },
        {
            id: 5,
            name: 'Contractor'
        },
    ]

    let watchKeys = watch('keys')

    const {
        palette: {
            lead,
            tags,
        }
    } = useTheme()

    const [showAll, setShowAll] = useState(false)

    const handleTagClick = (id) => {

        if (watchKeys.includes(id))
            setValue(
                'keys',
                watchKeys.filter(
                    obj => obj != id
                )
            )
        else
            setValue(
                'keys',
                [...watchKeys, id]
            )
    }

    const renderButtons
        = buttons.map((item) =>
            <Button
                size="small"
                color={"leadLight1"}
                style={{
                    borderRadius: 3,
                    marginRight: 10,
                    marginBottom: 10
                }}
            >
                {item.label}
            </Button>
        )

    const renderKeys
        = keys.map((item, key) => {

            const {
                id,
                name,
            } = item

            if (!showAll && key > 3)
                return

            return (
                <Tag
                    onClick={() => handleTagClick(id)}
                    key={key}
                    color={watchKeys.includes(id) ?
                        tags.active
                        :
                        tags.inactive
                    }
                    name={name}
                />
            )
        })

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
                        register={register("title", {
                            required: true,
                        })}
                        name="title"
                        error={errors.letterFlowName}
                        containerStyle={{
                            width: '100%'
                        }}
                        width='85%'
                    />
                </Grid>
                <FormDivider />
                <Grid item xl="2" md="6" xs="12" padding="0px" >
                    <Label
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
                            list={categoryList}
                            name="category"
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
                            list={typeList}
                            name="type"
                            error={errors.type}
                        />
                    </Grid>
                </Grid>
                <FormDivider />
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Keys
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
                    {renderKeys}
                    <Box
                        onClick={() =>
                            setShowAll(prev => !prev)
                        }
                    >
                        <Typography
                            color={lead.main}
                            sx={{
                                textDecoration: "underline",
                                cursor: 'pointer'
                            }}
                        >
                            {showAll ?
                                "Show Less"
                                :
                                "Show All"
                            }
                        </Typography>
                    </Box>
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
                    {buttons &&
                        renderButtons
                    }
                </Grid>
                <Grid
                    item
                    xl="12"
                    md="12"
                    xs="12"
                    display="flex"
                    flexDirection="row"
                    flexWrap="wrap"
                    sx={{
                        border: '0px solid red'
                    }}
                >
                    <TextEditor />
                </Grid>
            </Grid>
        </CollapsableForm>
    )
}

export default AddLetterTemplate