import TopTabs from '@Components/TopTabs/TopTabs';
import ScrollContainer from '@Components/ScrollContainer/ScrollContainer';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import BigCalendar from '@Components/BigCalendar/BigCalendar';

function Calendar() {

    const tabs = [
        { label: "Calendar", value: "calendar" },
        { label: "Task", value: "task" },
    ]

    const events = [
        {
            title: "Event 1",
            start: new Date(2023, 1, 1),
            end: new Date(2023, 1, 1),
        },
        {
            title: "Event 2",
            start: new Date(2023, 1, 3),
            end: new Date(2023, 1, 3),
        },
        {
            title: "Event 3",
            start: new Date(2023, 1, 7),
            end: new Date(2023, 1, 7),
        },
        {
            title: "Event 4",
            start: new Date(2023, 1, 11),
            end: new Date(2023, 1, 11),
        },
        {
            title: "Event 4",
            start: new Date(2023, 1, 14),
            end: new Date(2023, 1, 14),
        },
    ]

    return (
        <>
            <TopTabs
                tabs={tabs}
            />
            <ScrollContainer>
                <TitleHeader
                    title="Calendar"
                    actionButtons={null}
                />
                <BigCalendar
                    events={events}
                />
            </ScrollContainer>
        </>
    )
}

export default Calendar