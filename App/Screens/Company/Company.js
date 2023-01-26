import TopTabs from '@Components/TopTabs/TopTabs';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileDialog from '@Screens/Profile/Components/Profile/ProfileDialog';

function Company(props) {

    const dispatch = useDispatch()

    const tabs = [
        { label: "Dashboard", value: "client-dashboard" },
        { label: "Company Profile", value: "company-profile" },
        { label: "Team", value: "team" },
        { label: "Flare Mail", value: "flare-mail" },
        { label: "Billing", value: "billing" },
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

            <ProfileDialog />
        </>
    )
}

export default Company