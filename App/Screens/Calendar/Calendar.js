import TopTabs from '@Components/TopTabs/TopTabs';
import ScrollContainer from '@Components/ScrollContainer/ScrollContainer';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import BigCalendar from '@Components/BigCalendar/BigCalendar';
import AddTaskDialog from './Components/AddTask/AddTaskDialog';
import CalendarActions from './Components/CalendarActions';

function Calendar() {

    const tabs = [
        { label: "Calendar", value: "calendar" },
        { label: "Task", value: "task" },
    ]

    const events = [
        {
            title: "Johan doe",
            start: new Date(2023, 0, 20),
            end: new Date(2023, 0, 20),
            type: "high",
        },
        {
            title: "High",
            start: new Date(2023, 0, 23),
            end: new Date(2023, 0, 23),
            type: "high",
        },
        {
            title: "Medium",
            start: new Date(2023, 0, 23),
            end: new Date(2023, 0, 23),
            type: "medium",
        },
        {
            title: "Low",
            start: new Date(2023, 0, 23),
            end: new Date(2023, 0, 23),
            type: "low",
            value: 420,
        },
        {
            title: "Johan doe",
            start: new Date(2023, 0, 26),
            end: new Date(2023, 0, 26),
            type: "high",
        },
    ]

    return (
        <>
            <TopTabs
                tabs={tabs}
            />

            <TitleHeader
                title="Calendar"
                actionButtons={
                    <CalendarActions />
                }
            />
            <BigCalendar
                events={events}
            />

            <AddTaskDialog />
        </>
    )
}

export default Calendar