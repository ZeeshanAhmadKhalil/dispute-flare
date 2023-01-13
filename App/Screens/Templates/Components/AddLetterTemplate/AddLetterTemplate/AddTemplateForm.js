
import DropDown from '@Components/DropDown/DropDown';
import TextInput from '@Components/TextInput/TextInput';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {
    Divider,
    Grid,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import { palette } from '@mui/system';
import cls from 'classnames';
import { useSelector } from 'react-redux';
import styles from './ClientInformation.module.scss';
import Tags from '@Components/Tags/Tags';

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

    const {
        register,
        control,
        errors,
        watch,
    } = props || {}

    const {
        palette
    } = useTheme()


    const {
        cities,
        states,
        countries,
    } = useSelector(state => state.clients)

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
            />




            <Grid item xl="2" md="6" xs="12" padding="0px" >
                <Label sx={{ margin: "0px", padding: "0px" }}
                    variant="subtitle1"
                >Category
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
            <Grid item xl="10" md="12" xs="12">
                <Tags />
            </Grid>




        </Grid>
    )
}

export default AddTemplateForm