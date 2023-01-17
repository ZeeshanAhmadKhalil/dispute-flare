import ClientTopTabs from '@Components/ClientTopTabs/ClientTopTabs';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CreditorDashboard(props) {

    const dispatch = useDispatch()

    const tabs = [
        { label: "Dashboard", value: "creditor-dashboard" },
        { label: "Affiliates", value: "affiliates" },
        { label: "Commission", value: "commission" },
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
            <ClientTopTabs tabs={tabs} />
            <TitleHeader
                title="Dashboard"
                actionButtons={null}
            />
        </>
    )
}

export default CreditorDashboard