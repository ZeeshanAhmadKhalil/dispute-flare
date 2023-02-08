import {
    AddItemContainer
} from '@Components/StyledComponents/StyledComponents';
import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import { useForm } from 'react-hook-form';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import { setAddTaskDialog } from '../../Store/calendarSlice';
import AddTask from './AddTask';
import AddTaskActions from './AddTaskActions';

function AddTaskDialog(props) {

    const defaultValues = {
        title: null,
        category: null,
        priority: null,
        date: null,
        startTime: null,
        endTime: null,
        teamMembers: [],
        clients: [],
        notes: null,
    }

    const dispatch = useDispatch()

    const {
        addTaskDialog
    } = useSelector(state => state.calendar)

    const {
        register,
        control,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        defaultValues,
    });

    return (
        <RightDialogLayout
            onClose={() =>
                dispatch(setAddTaskDialog(false))
            }
            actionButtons={
                <AddTaskActions
                    reset={reset}
                    handleSubmit={handleSubmit}
                    onClose={() =>
                        dispatch(setAddTaskDialog(false))
                    }
                />
            }
            open={addTaskDialog}
            closeBtnText="Task"
            title={"Add Task"}
        >
            <AddItemContainer>
                <AddTask
                    watch={watch}
                    register={register}
                    control={control}
                    errors={errors}
                />
            </AddItemContainer>
        </RightDialogLayout >
    );
}

export default AddTaskDialog