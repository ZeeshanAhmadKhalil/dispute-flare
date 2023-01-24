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

function AddTask(props) {

    const categoryList = [
        { label: "Dragon style and White Crane", value: 1 },
        { label: "Wing Chun", value: 2 },
        { label: "Hung Gar", value: 3 },
        { label: "Luohanquan", value: 4 },
        { label: "Fut Gar", value: 5 },
        { label: "Fut", value: 6 },
        { label: "Choy Li", value: 7 },
    ]
    const priorityList = [
        { label: "High", value: 1 },
        { label: "Medium", value: 2 },
        { label: "Low", value: 3 },
    ]

    const {
        register,
        control,
        errors,
        watch,
    } = props || {}

    const {
        palette: {
        }
    } = useTheme()

    return (
        <CollapsableForm
            title="Add Task"
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
                    md="6"
                    xs="12"
                >
                    <Label
                        variant="subtitle1"
                    >
                        Title
                    </Label>
                </Grid>
                <Grid
                    item
                    xl="10"
                    md="6"
                    xs="12"
                >
                    <TextInput
                        register={register("title", {
                            required: true,
                        })}
                        name="title"
                        error={errors.title}
                        containerStyle={{
                            width: '100%'
                        }}
                        width='100%'
                    />
                </Grid>
                <Grid
                    item
                    xl="2"
                    md="6"
                    xs="12"
                >
                    <Label
                        variant="subtitle1"
                    >
                        Category
                    </Label>
                </Grid>
                <Grid
                    item
                    xl="4"
                    md="6"
                    xs="12"
                >
                    <DropDown
                        watch={watch}
                        register={register("category")}
                        list={categoryList}
                        name="category"
                        error={errors.category}
                    />
                </Grid>
                <Grid
                    item
                    xl="2"
                    md="6"
                    xs="12"
                >
                    <Label
                        variant="subtitle1"
                    >
                        Priority
                    </Label>
                </Grid>
                <Grid
                    item
                    xl="4"
                    md="6"
                    xs="12"
                >
                    <DropDown
                        watch={watch}
                        register={register("priority")}
                        list={priorityList}
                        name="priority"
                        error={errors.priority}
                    />
                </Grid>
                <Grid
                    item
                    xl="2"
                    md="6"
                    xs="12"
                >
                    <Label
                        variant="subtitle1"
                    >
                        Date
                    </Label>
                </Grid>
                <Grid
                    item
                    xl="4"
                    md="6"
                    xs="12"
                >
                    <DatePicker
                        control={control}
                        name="date"
                        error={errors.date}
                    />
                </Grid>
                <Grid
                    item
                    xl="2"
                    md="6"
                    xs="12"
                >
                    <Label
                        variant="subtitle1"
                    >
                        Time
                    </Label>
                </Grid>
                <Grid
                    item
                    xl="4"
                    md="6"
                    xs="12"
                >

                </Grid>
            </Grid>
        </CollapsableForm >
    )
}

export default AddTask