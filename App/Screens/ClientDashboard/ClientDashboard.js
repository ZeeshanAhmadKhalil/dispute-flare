import TopTabs from '@Components/TopTabs/TopTabs';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ClientDashboard(props) {

    const dispatch = useDispatch()

    const tabs = [
        { label: "Dashboard", value: "client-dashboard" },
        { label: "Dispute", value: "dispute" },
        { label: "Documents", value: "documents" },
        { label: "Internal Notes", value: "internal-note" },
    ]
    const {
        columns,
        clients,
    } = useSelector(state => state.clients)

    const [selectedClients, setSelectedClients] = useState([])

    useEffect(() => {
    }, [])

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