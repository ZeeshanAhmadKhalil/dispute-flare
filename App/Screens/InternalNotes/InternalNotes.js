import ClientTopTabs from '@Components/ClientTopTabs/ClientTopTabs';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import {
    useEffect
} from 'react';
import CreditScoreReport from './Components/CreditScoreReport';

function InternalNotes(props) {

    const tabs = [
        { label: "Dashboard", value: "client-dashboard" },
        { label: "Dispute", value: "dispute" },
        { label: "Documents", value: "documents" },
        { label: "Internal Notes", value: "internal-notes" },
    ]

    useEffect(() => {
    }, [])

    return (
        <>
            <ClientTopTabs tabs={tabs} />
            <TitleHeader
                title="REPORT"
            />
            <CreditScoreReport />
        </>
    )
}

export default InternalNotes