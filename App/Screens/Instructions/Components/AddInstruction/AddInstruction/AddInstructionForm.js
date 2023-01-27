import DropDown from '@Components/DropDown/DropDown';
import TextInput from '@Components/TextInput/TextInput';
import {
    Divider,
    Grid,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import Button from '@Components/Button/Button';
import { palette } from '@mui/system';
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


function AddInstructionForm(props) {


    let status = [
        { label: 'active', value: "active" },
        { label: 'inactive', value: "inactive" },
    ]

    const {
        register,
        control,
        errors,
        watch,
    } = props || {}

    const {
        palette
    } = useTheme()



    return (

        <Grid sx={{ backgroundColor: palette.tableSeparator.light, marginTop: "0", padding: "1rem 1rem 2rem 1rem" }}
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
                    Instruction
                </Label>
            </Grid>
            <Grid item xl="10" md="12" xs="12">
                <TextInput
                    register={register("Title", {
                        required: true,
                    })}
                    name="Instruction"
                    error={errors.instruction}
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
                >Status
                </Label>
            </Grid>
            <Grid item xl="4" md="6" xs="12" alignItems="center"
                justifyContent="center" >
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
    )
}

export default AddInstructionForm