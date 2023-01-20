import TopTabs from '@Components/TopTabs/TopTabs';
import ScrollContainer from '@Components/ScrollContainer/ScrollContainer';
import TitleHeader from '@Components/TitleHeader/TitleHeader';

function Calendar() {

    const tabs = [
        { label: "Calendar", value: "calendar" },
        { label: "Task", value: "task" },
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
            </ScrollContainer>
        </>
    )
}

export default Calendar