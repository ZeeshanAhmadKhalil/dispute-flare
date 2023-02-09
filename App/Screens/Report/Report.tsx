import TitleHeader from '@Components/TitleHeader/TitleHeader';
import TopTabs from '@Components/TopTabs/TopTabs';
import {
    useEffect
} from 'react';
import CreditScoreReport from './Components/CreditScoreReport';

function Report() {

    const tabs = [
        { label: "Dashboard", value: "client-dashboard" },
        { label: "Dispute", value: "dispute" },
        { label: "Documents", value: "documents" },
        { label: "Internal Notes", value: "internal-note" },
    ]

    useEffect(() => {
    }, [])

    return (
        <>
            <TopTabs tabs={tabs} />

            <TitleHeader
                title="REPORT"
            />
            <CreditScoreReport />

        </>
    )
}

export default Report