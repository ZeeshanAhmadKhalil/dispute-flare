import CollapsableForm from '@Components/CollapsableForm/CollapsableForm';
import DatePicker from '@Components/DatePicker/DatePicker';
import DropDown from '@Components/DropDown/DropDown';
import TextInput from '@Components/TextInput/TextInput';
import {
    Grid,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import cls from 'classnames';
import TotalCommission from 'public/Assets/Svgs/total-commission.svg';
import { useSelector } from 'react-redux';

const Label = styled(Typography)(({ theme }) => {

    const {
        text: { xxxGrey },
    } = theme.palette

    return {
        color: xxxGrey,
        fontWeight: 500,
    }
})

function SetStandardRate(props) {

    const paidForList = [
        { label: "Steve Rogers", value: 1 },
        { label: "Hela", value: 2 },
        { label: "Doctor Strange", value: 3 },
        { label: "Thor", value: 4 },
        { label: "Captain Marvel", value: 5 },
        { label: "Scarlet Witch", value: 6 },
        { label: "Thanos", value: 7 },
        { label: "Dormammu", value: 8 },
        { label: "Eternity", value: 9 },
        { label: "Arishem", value: 10 },
    ]

    const {
        register,
        control,
        errors,
        watch,
    } = props || {}

    const {
        palette: {
            icon,
        }
    } = useTheme()

    const {
        providers,
    } = useSelector(state => state.dispute)

    return (
        <CollapsableForm
            title="Set Standard Rate"
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
                        Rate
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <TextInput
                        register={register("rate", {
                            required: true,
                        })}
                        name="rate"
                        error={errors.rate}
                        icon={
                            <TotalCommission
                                color={icon?.lightActive}
                                height={15}
                                width={15}
                            />
                        }
                    />
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Paid For
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <DropDown
                        watch={watch}
                        register={register("paidFor")}
                        list={paidForList}
                        name="paidFor"
                        error={errors.paidFor}
                    />
                </Grid>
                <Grid item xl="2" md="6" xs="12">
                    <Label
                        variant="subtitle1"
                    >
                        Applicable From
                    </Label>
                </Grid>
                <Grid item xl="4" md="6" xs="12">
                    <Grid item xl="4" md="6" xs="12">
                        <DatePicker
                            control={control}
                            name="applicableFrom"
                            error={errors.dateOfBirth}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </CollapsableForm >
    )
}

export default SetStandardRate