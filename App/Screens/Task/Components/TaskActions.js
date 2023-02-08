import DropDown from '@Components/DropDown/DropDown';
import { darkTheme } from '@Config/theme';
import { useDispatch } from 'react-redux';

function TaskActions({
    priority,
    setPriority,
    priorityList,
}) {

    const dispatch = useDispatch()

    return (
        <>
            <DropDown
                list={priorityList}
                name="priority"
                customChange={{
                    value: priority,
                    onChange: setPriority,
                }}
                hideTextField={true}
                theme={darkTheme}
                styles={{
                    marginRight: 1,
                }}
            />
        </>
    )
}

export default TaskActions