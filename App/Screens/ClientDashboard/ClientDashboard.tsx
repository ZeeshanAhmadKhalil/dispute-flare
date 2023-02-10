import TitleHeader from '@Components/TitleHeader/TitleHeader';
import TopTabs from '@Components/TopTabs/TopTabs';
import { useDispatch } from 'react-redux';

function ClientDashboard() {

    const dispatch = useDispatch()

    const tabs = [
        { label: "Dashboard", value: "client-dashboard" },
        { label: "Dispute", value: "dispute" },
        { label: "Documents", value: "documents" },
        { label: "Internal Notes", value: "internal-note" },
    ]

    return (
        <>
            <TopTabs tabs={tabs} />
            <TitleHeader
                title="Dashboard"
                actionButtons={null}
            />
        </>
    )
}

export default ClientDashboard