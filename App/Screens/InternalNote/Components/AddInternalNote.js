import CollapsableForm from '@Components/CollapsableForm/CollapsableForm';
import TextInput from '@Components/TextInput/TextInput';
import AddIcon from '@mui/icons-material/Add';
import {
    Box,
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

function AddInternalNote(props) {

    const {
        register,
        control,
        errors,
        watch,
    } = props || {}

    return (
        <CollapsableForm
            title="Add Notes"
            defaultOpen={true}
        >
            <Grid
                container
                rowSpacing={3}
                className={cls(
                    'border-red-700',
                    'border-0',
                    'flex',
                    'items-start',
                )}
            >
                <Grid
                    item
                    xl="2"
                    md="6"
                    xs="12"
                >
                    <Label
                        variant="subtitle1"
                    >
                        Description
                    </Label>
                </Grid>
                <Grid
                    item
                    xl="4"
                    md="6"
                    xs="12"
                >
                    <TextInput
                        register={register("description", {
                            required: true,
                        })}
                        name="description"
                        error={errors.description}
                        multiline={true}
                        rows={8}
                    />
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Attachment
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <AddIcon
                            fontSize='10'
                            color="link"
                        />
                        <Typography
                            className={cls(
                                'underline',
                                'decoration-dashed',
                            )}
                            variant='subtitle2'
                            color="text.link"
                            sx={{
                                mt: '3px',
                            }}
                        >
                            Add Attachment
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </CollapsableForm >
    )
}

export default AddInternalNote