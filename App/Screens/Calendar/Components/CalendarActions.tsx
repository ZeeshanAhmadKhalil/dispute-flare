import Button from '@Components/Button/Button';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { setAddTaskDialog } from '../Store/calendarSlice';

function CalendarActions() {

    const dispatch = useDispatch()

    return (
        <>
            <Button
                onClick={() => dispatch(setAddTaskDialog(true))}
                iconOnSmall={<AddIcon />}
                color={"lightPink"}
                startIcon={null}
                style={{
                    borderRadius: 3,
                    marginRight: 10
                }}
            >
                NEW TASK
            </Button>
        </>
    )
}

export default CalendarActions