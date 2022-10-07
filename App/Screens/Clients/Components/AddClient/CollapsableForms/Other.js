import DropDown from '@Components/DropDown/DropDown';
import {
    Grid,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import cls from 'classnames';
import { useSelector } from 'react-redux';
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

function Other(props) {

    const {
        watch,
        register,
        errors,
    } = props || {}

    const {
        palette: { }
    } = useTheme()

    const {
    } = useSelector(state => state.clients)

    let assignedToList = [
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
        { label: "Option 3", value: 3 },
        { label: "Option 4", value: 4 },
        { label: "Option 5", value: 5 },
    ]
    let refferedByList = [
        { label: "Zeeshan", value: 1 },
        { label: "Ali", value: 2 },
        { label: "Rafay", value: 3 },
        { label: "Usman", value: 4 },
        { label: "Showkat", value: 5 },
    ]
    let statusList = [
        { label: 'Lead', value: 1 },
        { label: 'Active', value: 2 },
        { label: 'Inactive', value: 3 },
        { label: 'Cancelled', value: 4 },
    ]

    return (
        <CollapsableForm
            title="Other"
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
                        Assigned To
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <DropDown
                        watch={watch}
                        register={register("assignedTo")}
                        list={assignedToList}
                        name="assignedTo"
                        error={errors.assignedTo}
                    />
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Reffered By
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <DropDown
                        watch={watch}
                        register={register("refferedBy")}
                        list={refferedByList}
                        name="refferedBy"
                        error={errors.refferedBy}
                    />
                </Grid>

                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Status
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <DropDown
                        watch={watch}
                        register={register("status")}
                        list={statusList}
                        name="status"
                        error={errors.status}
                    />
                </Grid>
            </Grid>
        </CollapsableForm >
    )
}

export default Other